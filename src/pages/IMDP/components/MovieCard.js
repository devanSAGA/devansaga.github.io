import React from "react";
import styled from "styled-components";
import ExternalLinkIcon from "../../../icons/ExternalLinkIcon";

const StyledMovieCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  height: 240px;
  padding: 12px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: ${(props) => `padding-box linear-gradient(#161616, #161616),
    border-box linear-gradient(${props.theme['imdp-primary-color']}, ${props.theme['imdp-primary-color']})`};

  &:hover {
    .movie-card__external-link-icon--wrapper {
      transform: scale(1.05);
      border-color: ${(props) => props.theme['content-color-primary']};
      svg path {
        fill: ${(props) => props.theme['content-color-primary']};
      }
    }

    .movie-card__letterboxd-text {
      span:nth-child(2) {
        color: #ff7c37;
      }
      span:nth-child(3) {
        color: #3bde79;
      }
      span:nth-child(4) {
        color: #48a4ff;
      }
    }
  }
`;

const ExternalLinkIconWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  border-radius: 999px;
  border: 1px solid ${(props) => props.theme['content-color-secondary']};
`;

const MovieCardHeading = styled.span`
  display: inline-block;
  font-size: ${(props) => props.theme['font-size-l']};
  line-height: 1;
  font-family: ${(props) => props.theme['font-family-secondary']};
  color: ${(props) => props.headingColor};
  width: 84px;
`;

const MovieCardSubHeading = styled.span`
  font-size: ${(props) => props.theme['font-size-s']};
  font-family: ${(props) => props.theme['font-family-secondary']};
  color: ${(props) => props.theme['content-color-secondary']};
`;

const LetterBoxdText = styled.span`
  span {
    color: ${(props) => props.theme['content-color-secondary']};
    font-size: ${(props) => props.theme['font-size-s']};
    font-family: ${(props) => props.theme['font-family-secondary']};
  }
`;

function MovieCard(props) {
  const { heading, subHeading, url, headingColor, letterboxdEasterEgg } = props;

  const handleClick = () => {
    window.open(url, '_blank');
  }

  return (
    <StyledMovieCard onClick={handleClick}>
      <ExternalLinkIconWrapper className="movie-card__external-link-icon--wrapper">
        <ExternalLinkIcon width='32' height='32' />
      </ExternalLinkIconWrapper>
      {heading && <MovieCardHeading headingColor={headingColor}>{heading}</MovieCardHeading>}
      {subHeading && <MovieCardSubHeading>{subHeading}</MovieCardSubHeading>}
      {letterboxdEasterEgg && (
        <LetterBoxdText className="movie-card__letterboxd-text">
          <span>on </span>
          <span>Lett</span>
          <span>erb</span>
          <span>oxd</span>
        </LetterBoxdText>
      )}
    </StyledMovieCard>
  );
}

export default MovieCard;
