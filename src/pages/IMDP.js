import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ExternalLink } from 'react-feather';
import IMDPLogo from '../assets/IMDpLogo.png';
import PageContainer from '../components/PageContainer/PageContainer';
import RadioGroup from '../components/RadioGroup/RadioGroup';
import Spinner from '../components/Spinner/Spinner';

const AIRTABLE_API_BASE_URL = 'https://api.airtable.com/v0';
const TV_SHOWS_TABLES_ID = 'tbluWl1xcEifazpLC';
const GET_LIST_OF_TV_SHOWS_URL = `${AIRTABLE_API_BASE_URL}/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${TV_SHOWS_TABLES_ID}`;
const RATING_ENUM = {
  '5_STAR': 'Must Watch',
  '4_STAR': 'Really Good',
  '3_STAR': 'Good',
  '2_STAR': 'Ok',
  '1_STAR': 'Don\'t Watch',
}
const LANG_FILTER_OPTIONS = [
  { value: 'indian', label: 'Indian TV Shows'},
  { value: 'english', label: 'English TV Shows'}
];

const Grid = styled.div`
  display: grid;
  width: 100%;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 12px;
`;

const BlankState = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const IMDPLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  img {
    height: 52px;
    width: 96px;
  }
`;

export default function IMDP() {
  const [shows, setShows] = useState([]);
  const [langFilterValue, setLangFilterValue] = useState(LANG_FILTER_OPTIONS[0].value);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: 'get',
      url: GET_LIST_OF_TV_SHOWS_URL,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_TOKEN}`
      }
    })
    .then((response) => response.data)
    .then((data) => {
      const sortedList = [...data.records].sort((a, b) => {
        const ratingOrder = {
          'Must Watch' : 1,
          'Really Good': 2,
          'Good': 3,
          'Ok': 4,
          'Don\'t Watch': 5
        };
    
        return ratingOrder[a.fields.Rating] - ratingOrder[b.fields.Rating];
      });
      setShows(sortedList);
      setLoading(false);
    })
  }, []);

  return (
    <PageContainer>
      <IMDPLogoContainer>
        <img alt='IMDP Logo' src={IMDPLogo} />
      </IMDPLogoContainer>
      <FilterSection>
        <RadioGroup options={LANG_FILTER_OPTIONS} value={langFilterValue} onChange={setLangFilterValue} />
      </FilterSection>
      {isLoading ? <BlankState><Spinner /></BlankState> : (
        <Grid>
          {shows
            .filter((show) => {
              if (langFilterValue === 'english') {
                if (show.fields.Language === 'English') return true;
                else return false;
              } else {
                if (show.fields.Language === 'English') return false;
                else return true;
              }
            })
            .map((show, index) => {
              const { Name, Rating, Genre, NumberOfSeasons, EpisodeWiseRating, OTT, Link } = show.fields;
              return (
                <GridCard
                  key={index}
                  name={Name}
                  rating={Rating}
                  genres={Genre}
                  OTTLink={Link}
                  OTT={OTT}
                  numberOfSeasons={NumberOfSeasons}
                  episodeRatingLink={EpisodeWiseRating}
                />
              );
          })}
        </Grid>
      )}
    </PageContainer>
  ); 
}

const StyledShowCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 240px;
  border: 1px solid transparent;
  background: padding-box linear-gradient(#161616, #161616),
    border-box linear-gradient(rgb(86 77 168), rgb(86 77 168));
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  font-weight: 400;
  color: red;
`;



function GridCard(props) {
  const { name, rating, numberOfSeasons, genres, episodeRatingLink, OTT, OTTLink } = props;
  return (
    <StyledShowCard>
      <RatingBadge rating={rating} />
      <ShowDetails
        name={name}
        genres={genres}
        numberOfSeasons={numberOfSeasons}
        OTT={OTT}
        OTTLink={OTTLink}
        episodeRatingLink={episodeRatingLink}
      />
    </StyledShowCard>
  );
}

const StyledRatingBadge = styled.span`
  display: inline-block;
  width: fit-content;
  padding: 8px;
  border-radius: 999px;
  font-size: 12px;
  line-height: 8px;
  font-weight: 700;

  ${(props) => {
    const { rating } = props;
    if (rating === RATING_ENUM['5_STAR']) {
      return `
        color: #74AEF6;
        border: 1px solid #002D70;
      `;
    } else if (rating === RATING_ENUM['4_STAR']) {
      return `
        color: #6BDD9A;
        border: 1px solid #013614;
      `;
    } else if (rating === RATING_ENUM['3_STAR']) {
      return `
        color: #FFE47E;
        border: 1px solid #523A03;
      `;
    } else if (rating === RATING_ENUM['2_STAR']) {
      return `
        color: #FFE47E;
        border: 1px solid #523A03;
      `;
    } else {
      return `
        color: #F79A8E;
        border: 1px solid #591B08;
      `;
    }
  }}
`;

function RatingBadge(props) {
  const { rating } = props;
  return <StyledRatingBadge rating={rating}>{rating}</StyledRatingBadge>;
}

const StyledShowDetails = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: ${(props) => props.theme['content-color-primary']};
  text-align: left;

  & .show-details__name {
    display: block;
    margin-bottom: 4px;
  }
`;

const ShowMetaDetails = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => props.theme['content-color-secondary']};
  
  span {
    display: inline-block;
  }

  & > a:not(:last-child) {
    margin-bottom: 4px;
  }

  & .show-details__dot {
    display: inline-flex;
    align-items: center;
    height: 16px;
    margin: 0px 2px;
  }
`;

const Divider = styled.hr`
  width: 100%;
  border: 0;
  height: 0;
  border-top: 1px solid rgba(86, 77, 168, 0.8);
  margin: 8px 0px;
`;

function ShowDetails(props) {
  const { name, numberOfSeasons, episodeRatingLink, genres, OTTLink, OTT } = props;
  return (
    <StyledShowDetails>
      <span className='show-details__name'>{name}</span>
      <ShowMetaDetails>
        <span className='show-details__meta-info'>{numberOfSeasons === 1 ? `${numberOfSeasons} season` : `${numberOfSeasons} seasons`}</span>
        <span className='show-details__dot'>•</span>
        {genres.map((genre, index) => (
          <React.Fragment key={index}>
            <span className='show-details__meta-info'>{genre}</span>
            {genres.length - 1 !== index && <span className='show-details__dot'>•</span>}
          </React.Fragment>
        ))}
        <Divider />
        <EpisodeMetaInfoLink link={episodeRatingLink} title='Per episode ratings' />
        <EpisodeMetaInfoLink link={OTTLink} title={`Watch it on ${OTT}`} />
      </ShowMetaDetails>
    </StyledShowDetails>
  );
}

const StyledEpisodeMetaInfoLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0px 4px;
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme['content-color-tertiary']};
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    color: ${(props) => props.theme['content-color-primary']};
    text-decoration: underline;
  }

  svg {
    height: 12px;
    width: 12px;
    margin-left: 4px;
  }
`;

function EpisodeMetaInfoLink(props) {
  const { link, title } = props;
  return (
    <StyledEpisodeMetaInfoLink href={link} target='_blank'>
      {title}
      <ExternalLink />
    </StyledEpisodeMetaInfoLink>
  );
}
