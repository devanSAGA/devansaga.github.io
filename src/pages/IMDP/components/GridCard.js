import React from 'react';
import styled from 'styled-components';
import RatingBadge from './RatingBadge';
import ShowDetails from './ShowDetails';

const StyledGridCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 240px;
  border: 1px solid transparent;
  background: ${(props) => `padding-box linear-gradient(#161616, #161616),
    border-box linear-gradient(${props.theme['imdp-primary-color']}, ${props.theme['imdp-primary-color']})`};
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  font-weight: 400;
  color: red;
`;

function GridCard(props) {
  const { name, rating, numberOfSeasons, genres, episodeRatingLink, OTT, OTTLink } = props;
  return (
    <StyledGridCard>
      <RatingBadge rating={rating} />
      <ShowDetails
        name={name}
        genres={genres}
        numberOfSeasons={numberOfSeasons}
        OTT={OTT}
        OTTLink={OTTLink}
        episodeRatingLink={episodeRatingLink}
      />
    </StyledGridCard>
  );
}

export default GridCard;