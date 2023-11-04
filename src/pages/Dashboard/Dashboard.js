import React from 'react';
import styled from 'styled-components';

// UI Components
import PageContainer from '../../components/PageContainer/PageContainer';
import StravaUpdates from './StravaUpdates/StravaUpdates';
import SpotifyUpdates from './SpotifyUpdates/SpotifyUpdates';
import PokemonUpdates from './PokemonUpdates/PokemonUpdates';

const DashboardGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export default function Dashboard() {
  return (
    <PageContainer title="Dashboard">
      <DashboardGrid>
        <StravaUpdates />
        <SpotifyUpdates />
        <PokemonUpdates />
      </DashboardGrid>
    </PageContainer>
  );
}