import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import polyline from '@mapbox/polyline';

// UI Components
import DashboardCard from '../../../components/DashboardCards/DashboardCard';
import LastActivityCard from './LastActivityCard';
import Emoji from '../../../components/Emoji/Emoji';
import Spinner from '../../../components/Spinner/Spinner';
import AsyncText from '../../../components/Typography/AsyncText';

// Utils
import useLocalStorage from '../../../hooks/useLocalStorage';
import LastActivityMap from './LastActivityMap';

const MONTH_NUMBER_TO_NAME_MAPPING = {
  1: 'Jan',
  2: 'Feb',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'Aug',
  9: 'Sept',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec'
};

const END_TIME_2023=1704067199, // Epoch time of 31st Dec 2022
      START_TIME_2023=1672531200, // Epoch time of 1st Jan 2022
      GET_STRAVA_ACCESS_TOKEN_URL=`https://www.strava.com/oauth/token?client_id=${process.env.REACT_APP_STRAVA_CLIENT_ID}&client_secret=${process.env.REACT_APP_STRAVA_CLIENT_SECRET}&refresh_token=${process.env.REACT_APP_STRAVA_REFRESH_TOKEN}&grant_type=refresh_token`,
      GET_ACTIVITIES_INFO_2023=`https://www.strava.com/api/v3/athlete/activities?before=${END_TIME_2023}&after=${START_TIME_2023}&per_page=100`,
      STRAVA_WEBSITE_URL='https://www.strava.com';

const CardGrid = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: auto;

  @media (min-width: 469px) and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 16px;
  }

  @media (max-width: 468px) {
    grid-template-columns: 1fr;
    grid-row-gap: 16px;
  }
`;

function StravaLogo() {
  return (
    <a
      href='https://www.strava.com/athletes/46493816'
      target='_blank'
      rel='noopener noreferrer'
    >
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '999px',
        height: '32px',
        width: '32px'
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Strava" viewBox="0 0 512 512">
          <rect width="512" height="512" fill="#fc4c01" rx="15%"/><path fill="#fff" d="M120 288L232 56l112 232h-72l-40-96-40 96z"/><path fill="#fda580" d="M280 288l32 72 32-72h48l-80 168-80-168z"/>
        </svg>
      </div>
    </a>
  );
}

function getSuffixedDate(date) {
  if (date > 3 && date < 21) return `${date}th`;
  switch (date % 10) {
    case 1:  return `${date}st`;
    case 2:  return `${date}nd`;
    case 3:  return `${date}rd`;
    default: return `${date}th`;
  }
}

function getCoordinates(activity) {
  if (!activity || !activity.map) return;

  let coordinates = polyline.decode(activity.map);
  let newCoordinates = [];

  for (let i = 0; i < coordinates.length; i++) {
    const [lat, long] = coordinates[i];
    newCoordinates[i] = [long, lat];
  }

  return newCoordinates;
}

function populateLastActivity(allActivities) {
  if(Array.isArray(allActivities) && allActivities.length !== 0) {
    let lastActivity = allActivities[0];

    const { distance, type, name, id, start_date, map } = lastActivity;
    let dateOfActivity = new Date(start_date);
    dateOfActivity = getSuffixedDate(dateOfActivity.getDate()) + ' ' + MONTH_NUMBER_TO_NAME_MAPPING[(dateOfActivity.getMonth()+1)];

    return {
      distance: Math.round(distance/1000),
      type: type.toLowerCase(),
      name,
      id,
      date: dateOfActivity,
      map: map.summary_polyline
    };
  }
}

function calculateTotalDistance(allActivities) {
  const DISTANCE_TO_KAMATIGARDEN = 2.25;
  let totalDistanceCycled, totalDistanceWalked;

  if(Array.isArray(allActivities) && allActivities.length !== 0) {
    const allRunningActivities = allActivities.filter(activity => activity.type === 'Run' || activity.type === 'Walk');
    const allCyclingActivities = allActivities.filter(activity => activity.type === 'Ride');
    const noOfRidesToKamatiGardens = allActivities.filter(activity => activity.name.includes('Ride to Kamatibaug')).length;

    totalDistanceWalked = allRunningActivities.map(activity => activity.distance/1000).reduce((prev, next) => prev + next);
    totalDistanceCycled = allCyclingActivities.map(activity => activity.distance/1000).reduce((prev, next) => prev + next) + (DISTANCE_TO_KAMATIGARDEN*2*noOfRidesToKamatiGardens);
  }

  return {
    totalDistanceCycled: Math.round(totalDistanceCycled),
    totalDistanceWalked: Math.round(totalDistanceWalked)
  };
}

function StravaUpdates() {
  const [totalDistanceWalked, setTotalDistanceWalked] = useState(0);
  const [totalDistanceCycled, setTotalDistanceCycled] = useState(0);
  const [coordinates, setCoordinates] = useState([]);

  const [fallbackWalkedDistance, setFallbackWalkedDistance] = useLocalStorage('fallbackWalkedDistance', 0);
  const [fallbackCycledDistance, setFallbackCycledDistance] = useLocalStorage('fallbackCycledDistance', 0);
  const [isLoading, setLoading] = useState(true);
  const [lastActivity, setLastActivity] = useState({ distance: 0, type: '', name: '', map: '' });

  useEffect(() => {
    axios.post(GET_STRAVA_ACCESS_TOKEN_URL)
      .then(response => {
        const {data: { access_token }} = response;

        return axios({
          method: 'get',
          url: GET_ACTIVITIES_INFO_2023,
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        })
      })
      .then(response => response.data)
      .then(activities => {
        const lastActivity = populateLastActivity(activities);
        const newCoordinates = getCoordinates(lastActivity);
        setLastActivity(lastActivity);
        setCoordinates(newCoordinates);

        const { totalDistanceCycled, totalDistanceWalked } = calculateTotalDistance(activities);

        if ( totalDistanceCycled !== 0 && totalDistanceWalked !==0 ) {
          setTotalDistanceCycled(totalDistanceCycled);
          setTotalDistanceWalked(totalDistanceWalked);
          setFallbackCycledDistance(totalDistanceCycled);
          setFallbackWalkedDistance(totalDistanceWalked);
        } else {
          setTotalDistanceCycled(fallbackCycledDistance);
          setTotalDistanceWalked(fallbackWalkedDistance);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);

        if( totalDistanceCycled === 0 && totalDistanceWalked ===0 ) {
          setTotalDistanceCycled(fallbackCycledDistance);
          setTotalDistanceWalked(fallbackWalkedDistance);
        }
      })
  }, []);

  return (
    <>
      <CardGrid>
        <LastActivityCard
          brand='strava'
          heading='Last activity'
          subHeading={(
            <AsyncText isLoading={isLoading}>
              A {lastActivity.distance}km {lastActivity.type}
            </AsyncText>
          )}
          subHeadingPosition='bottom'
          content={isLoading ? <Spinner /> : (
            <>
              <LastActivityMap coordinates={coordinates} />
              <a
                href={`${STRAVA_WEBSITE_URL}/activities/${lastActivity.id}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {lastActivity.name} on {lastActivity.date}
              </a>
            </>
          )}
          metaIcon={<StravaLogo />}
        />
        <DashboardCard
          brand='strava'
          heading='Running'
          subHeading='in 2023'
          content={isLoading ? <Spinner /> : `${totalDistanceWalked}km`}
          metaIcon={<Emoji size='xl' ariaLabel="running-man" emoji="🏃" />}
        />
        <DashboardCard
          brand='strava'
          heading='Cycling'
          subHeading='in 2023'
          content={isLoading ? <Spinner /> : `${totalDistanceCycled}km`}
          metaIcon={<Emoji size='xl' ariaLabel="cycling-man" emoji="🚴‍♂️" />}
        />
        <DashboardCard
          brand='strava'
          heading='Running'
          subHeading='in 2022'
          content={isLoading ? <Spinner /> : `${396}km`}
          metaIcon={<Emoji size='xl' ariaLabel="running-man" emoji="🏃" />}
        />
        <DashboardCard
          brand='strava'
          heading='Cycling'
          subHeading='in 2022'
          content={isLoading ? <Spinner /> : `${413}km`}
          metaIcon={<Emoji size='xl' ariaLabel="cycling-man" emoji="🚴‍♂️" />}
        />
      </CardGrid>
    </>
  );
}

export default StravaUpdates;