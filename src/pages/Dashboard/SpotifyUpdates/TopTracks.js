import React from 'react';
import styled from 'styled-components';
import DashboardCard from '../../../components/DashboardCards/DashboardCard';
import Emoji from '../../../components/Emoji/Emoji';
import Spinner from '../../../components/Spinner/Spinner';

const TopTracksCard = styled(DashboardCard)`
  @media (min-width: 469px) and (max-width: 768px) {
    grid-column: 1 / 3;
  }
`;

const TopTracksList = styled.ul`
  height: 100%;
  width: 100%;
  margin-top: 32px;
  list-style-type: none;

  & > li:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const StyledTrack = styled.li`
  width: 100%;
  color: ${(props) => props.theme['spotify-primary-color']};
  font-family: ${(props) => props.theme['font-family-primary']};
  font-size: ${(props) => props.theme['font-size-l']};
  border-radius: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }

  & .track__name {
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }

  & .track__artists {
    display: inline-block;
    font-size: ${(props) => props.theme['font-size-s']};
    color: ${(props) => props.theme['content-color-secondary']};
    margin-left: 8px;
  }
`;

function Track(props) {
  const { name, artists, link } = props;
  return (
    <StyledTrack>
      <a href={link} target='_blank' rel='noopener noreferrer' className='track__name'>{name}{artists && <span className='track__artists'> by {artists}</span>}</a>
    </StyledTrack>
  );
}

function TopTracks(props) {
  const { tracks, isLoading } = props;

  return (
    <TopTracksCard
      brand='spotify'
      heading={!isLoading ? 'Top tracks' : null}
      content={isLoading ? <Spinner /> : (
        <TopTracksList>
          {tracks.map((track, index) => (
            <Track
              key={index}
              name={track.name}
              artists={track.artists}
              link={track.link}
            />
          ))}
        </TopTracksList>
      )}
      metaIcon={<Emoji size='xl' ariaLabel='headphones' emoji='🎧' />}
    />
  );
}

export default TopTracks;