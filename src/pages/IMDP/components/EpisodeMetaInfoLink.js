import React from 'react';
import styled from 'styled-components';
import ExternalLinkIcon from '../../../icons/ExternalLinkIcon';

const StyledEpisodeMetaInfoLink = styled.a`
  display: inline-flex;
  align-items: center;
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
`;

function EpisodeMetaInfoLink(props) {
  const { link, title } = props;
  return (
    <StyledEpisodeMetaInfoLink href={link} target='_blank'>
      {title}
      <ExternalLinkIcon />
    </StyledEpisodeMetaInfoLink>
  );
}

export default EpisodeMetaInfoLink;
