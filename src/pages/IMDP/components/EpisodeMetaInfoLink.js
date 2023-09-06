import React from 'react';
import { ExternalLink } from 'react-feather';
import styled from 'styled-components';

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

export default EpisodeMetaInfoLink;
