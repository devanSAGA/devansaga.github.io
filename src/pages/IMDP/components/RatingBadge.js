import React from "react";
import styled from "styled-components";

const RATING_ENUM = {
  '5_STAR': 'Must Watch',
  '4_STAR': 'Really Good',
  '3_STAR': 'Good',
  '2_STAR': 'Ok',
  '1_STAR': 'Don\'t Watch',
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

export default RatingBadge;
