import React from 'react';
import styled, { keyframes } from 'styled-components';
import RatingBadge from './RatingBadge';
import ShowDetails from './ShowDetails';
import Emoji from '../../../components/Emoji/Emoji';

const ShakeAnimation = keyframes`
   0% { transform: translateX(0) }
  25% { transform: translateX(1px) }
  50% { transform: translateX(-1px) }
  75% { transform: translateX(1px) }
  100% { transform: translateX(0) }
`;

const StyledTVShowCard = styled.div`
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

  &:hover {
    .card__hover-emoji {
      animation: ${ShakeAnimation} 0.3s linear;
      visibility: visible;
    }
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  .card__hover-emoji {
    visibility: hidden;
  }
`;


function TVShowCard(props) {
  const { name, rating, numberOfSeasons, genres, episodeRatingLink, OTT, OTTLink, hoverEmoji } = props;
  return (
    <StyledTVShowCard>
      <CardHeader>
        <RatingBadge rating={rating} />
        <span className='card__hover-emoji'>
          {hoverEmoji ? <Emoji emoji={hoverEmoji} /> : null}
        </span>
      </CardHeader>  
      <ShowDetails
        name={name}
        genres={genres}
        numberOfSeasons={numberOfSeasons}
        OTT={OTT}
        OTTLink={OTTLink}
        episodeRatingLink={episodeRatingLink}
      />
    </StyledTVShowCard>
  );
}

export default TVShowCard;