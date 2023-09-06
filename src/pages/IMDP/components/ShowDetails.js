import React from "react";
import styled from "styled-components";
import EpisodeMetaInfoLink from "./EpisodeMetaInfoLink";

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
        {OTTLink && <EpisodeMetaInfoLink link={OTTLink} title={`Watch it on ${OTT}`} />}
      </ShowMetaDetails>
    </StyledShowDetails>
  );
}

export default ShowDetails;