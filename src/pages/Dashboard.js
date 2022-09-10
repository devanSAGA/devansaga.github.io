import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Emoji from '../components/Emoji/Emoji';
import Spinner from '../components/Spinner/Spinner';
import PageContainer from '../components/PageContainer/PageContainer';
import useLocalStorage from '../hooks/useLocalStorage';
import ConfettiButton from '../components/ConfettiButton/ConfettiButton';

const END_TIME=1672511340, // Epoch time of 31st Dec 2022
      START_TIME=1640975400, // Epoch time of 1st Jan 2022
      GET_STRAVA_ACCESS_TOKEN_URL=`https://www.strava.com/oauth/token?client_id=${process.env.REACT_APP_STRAVA_CLIENT_ID}&client_secret=${process.env.REACT_APP_STRAVA_CLIENT_SECRET}&refresh_token=${process.env.REACT_APP_STRAVA_REFRESH_TOKEN}&grant_type=refresh_token`,
      GET_ACTIVITIES_INFO=`https://www.strava.com/api/v3/athlete/activities?before=${END_TIME}&after=${START_TIME}&per_page=100`;

const DashboardCardsList = styled.div`
  margin-top: 32px;
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 32px;
  grid-template-columns: 1fr 1fr 2fr;
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

const DashboardCard = styled.div`
  display: flex;
  height: 200px;
  border-radius: 16px;
  padding: 12px;
  border: 4px solid ${(props) => props.theme['strava-primary-color']};

  & .dashboard-card__emoji {
    font-size: ${(props) => props.theme['font-size-xl']};
    align-self: flex-end;
  }

  &+.dashboard-card__3 {
    @media (min-width: 469px) and (max-width: 768px) {
      grid-column: 1 / 3;
    }
  }
`;

const CardContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    font-size: ${(props) => props.theme['font-size-xl']};
    font-weight: ${(props) => props.theme['font-weight-strong']};
    color: ${(props) => props.theme['strava-primary-color']};
  }
`;

const CardContentHeading = styled.div`
  font-family: ${(props) => props.theme['font-family-pageHeading']};

  h2 {
    display: inline-block;
    margin: 0;
    font-size: ${(props) => props.theme['font-size-l']};
    font-weight: ${(props) => props.theme['font-weight-strong']};
    color: ${(props) => props.theme['content-color-primary']};
    line-height: 24px;
  }

  span {
    display: inline-block;
    margin-left: 4px;
    color: ${(props) => props.theme['content-color-secondary']};
    font-size: ${(props) => props.theme['font-size-s']};
  }

  span.last-activity__name {
    display: block;
    margin-left: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const KudosButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const GiveKudosButton = styled(ConfettiButton)`
  display: flex;
  box-sizing: border-box;
  height: 48px;
  width: 48px;
  font-size: ${(props) => props.theme['font-size-m']};
  background-color: transparent;
  border: 1px solid ${(props) => props.theme['border-color-light']};
  border-radius: 999px;
  justify-content: center;
  align-items: center;
  transition: border-color 0.5s ease-in-out, box-shadow 0.5s ease-in-out;

  &:hover {
    border: 1px solid ${(props) => props.theme['strava-primary-color']};
    box-shadow: 0 0 0 2px ${(props) => props.theme['strava-primary-color']}
  }

  &::before {
    background: transparent;
    border: none;
  }

  &::after {
    background-color: transparent;
    border: none;
  }
`

function populateLastActivity(allActivities) {
  if(Array.isArray(allActivities) && allActivities.length !== 0) {
    let lastActivity = allActivities[0];
    const { distance, type, name } = lastActivity;
    return {
      distance: Math.round(distance/1000),
      type: type.toLowerCase(),
      name
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

export default function Dashboard() {
  const [totalDistanceWalked, setTotalDistanceWalked] = useState('');
  const [totalDistanceCycled, setTotalDistanceCycled] = useState('');

  const [fallbackWalkedDistance, setFallbackWalkedDistance] = useLocalStorage('fallbackWalkedDistance', 0);
  const [fallbackCycledDistance, setFallbackCycledDistance] = useLocalStorage('fallbackCycledDistance', 0);
  const [isLoading, setLoading] = useState(true);
  const [lastActivity, setLastActivity] = useState({ distance: 0, type: '', name: '' });

  useEffect(() => {
    axios.post(GET_STRAVA_ACCESS_TOKEN_URL)
      .then(response => {
        const {data: { access_token }} = response;

        return axios({
          method: 'get',
          url: GET_ACTIVITIES_INFO,
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        })
      })
      .then(response => response.data)
      .then(activities => {
        const lastActivity = populateLastActivity(activities);
        setLastActivity(lastActivity);

        const { totalDistanceCycled, totalDistanceWalked } = calculateTotalDistance(activities);

        if ( totalDistanceCycled !== 0 && totalDistanceWalked !==0 ) {
          setTotalDistanceCycled(totalDistanceCycled);
          setTotalDistanceWalked(totalDistanceWalked);
          console.log('here');
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
      })
  }, []);

  // useEffect(() => {
  //   if ( totalDistanceCycled !== 0 && totalDistanceWalked !==0 ) {
  //   }
  // }, [totalDistanceCycled, totalDistanceWalked])

  return (
    <PageContainer title="Dashboard">
      <DashboardCardsList>
        <DashboardCard className='dashboard-card__1'>
          <CardContent className='dashboard-card__content'>
            <CardContentHeading>
              <h2>Running</h2>
              <span>in 2022</span>
            </CardContentHeading>
            {isLoading ? <Spinner /> : <span>{totalDistanceWalked}km</span>}
          </CardContent>
          <Emoji ariaLabel="running-man" emoji="🏃" className="dashboard-card__emoji"/>
        </DashboardCard>
        <DashboardCard className='dashboard-card__2'>
          <CardContent className='dashboard-card__content'>
            <CardContentHeading>
              <h2>Cycling</h2>
              <span>in 2022</span>
            </CardContentHeading>
            {isLoading ? <Spinner /> : <span>{totalDistanceCycled}km</span>}
          </CardContent>
          <Emoji ariaLabel="cycling-man" emoji="🚴‍♂️" className="dashboard-card__emoji"/>
        </DashboardCard>
        <DashboardCard className='dashboard-card__3'>
          <CardContent className='dashboard-card__content'>
            <CardContentHeading>
              <h2>Last activity</h2>
              <span className='last-activity__name'>{lastActivity.name}</span>
            </CardContentHeading>
            {isLoading ? <Spinner /> : (
              <span>
                A&nbsp;
                <span className='last-activity__distance'>{lastActivity.distance}km</span>
                &nbsp;{lastActivity.type}
              </span>
            )}
          </CardContent>
          <KudosButtonContainer>
            <GiveKudosButton text="🎉" />
          </KudosButtonContainer>
        </DashboardCard>
      </DashboardCardsList>
    </PageContainer>
  );
}