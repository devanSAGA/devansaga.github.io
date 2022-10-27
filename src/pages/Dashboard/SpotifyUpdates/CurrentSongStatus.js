import React from 'react';

import DashboardCard from "../../../components/DashboardCards/DashboardCard";
import Spinner from '../../../components/Spinner/Spinner';
import styled from 'styled-components';
import SpotifyLogo from './SpotifyLogo';
import StatusBadge from './StatusBadge';

const CurrentSongCard = styled(DashboardCard)`
  @media (min-width: 469px) and (max-width: 768px) {
    grid-column: 1 / 3;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentSubText = styled.span`
  display: inline-block;
  color: ${(props) => props.theme['content-color-secondary']};
  font-size: ${(props) => props.theme['font-size-s']};
`;

function CurrentSongLabel(props) {
  const { songName, songURL, isOnline } = props;

  if (!songName) return null;

  return (
    <ContentContainer>
      <ContentSubText>{isOnline ? 'Currently listening' : 'Last played'}</ContentSubText>
      <a
        href={songURL}
        target='_blank'
        rel='noopener noreferrer'
      >
        {songName}
      </a>
    </ContentContainer>
  );
}

function CurrentSongStatusCard(props) {
  const { isOnline, isLoading, songName, songURL } = props;
  return (
    <CurrentSongCard
      brand='spotify'
      heading={<StatusBadge isOnline={isOnline} isLoading={isLoading} />}
      content={isLoading ? <Spinner /> : (
        <CurrentSongLabel isOnline={isOnline} songName={songName} songURL={songURL} /> 
      )}
      metaIcon={<SpotifyLogo />}
    />
  );
}

export default CurrentSongStatusCard;