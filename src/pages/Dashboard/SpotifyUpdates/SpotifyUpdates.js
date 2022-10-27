import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// UI components
import CurrentSongStatus from './CurrentSongStatus';
import TopTracks from './TopTracks';

// Utils
import { getAccessToken, getCurrentSong, getRecentlyPlayedTracks, getTopTracks } from './spotifyAPIs';

const CardGrid = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 2fr 4fr;
  grid-template-rows: auto;

  @media (min-width: 469px) and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 16px;
  }

  @media (max-width: 468px) {
    grid-template-columns: 1fr;
    grid-row-gap: 16px;
  }
`;

function populateTrackArtists(artists) {
  if (Array.isArray(artists) && artists.length > 0) {
    const allArtists = artists.map(artist => artist.name);

    return allArtists.join(' & ');
  }

  return null;
}

function SpotifyUpdates() {
  const [isOnline, setOnlineStatus] = useState(false);
  const [currentSong, setCurrentSong] = useState('');
  const [currentSongURL, setCurrentSongURL] = useState('');
  const [lastPlayedSong, setLastPlayedSong] = useState('');
  const [lastPlayedSongURL, setLastPlayedSongURL] = useState('');
  const [topTracks, setTopTracks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      const { data: { access_token }} = await getAccessToken();
      const currentSongData = await getCurrentSong(access_token);
      const topTracksData = await getTopTracks(access_token);
      const recentlyPlayedTracksData = await getRecentlyPlayedTracks(access_token);

      return {
        currentSongData,
        topTracksData,
        recentlyPlayedTracksData
      };
    }

    fetchSpotifyData().then(response => {
      const { currentSongData, topTracksData, recentlyPlayedTracksData } = response;
      setLoading(false);

      if (currentSongData) {
        if (currentSongData.status === 200) {
          const songData = currentSongData.data.item;
          const songName = songData.name;
          const songURL = songData.external_urls.spotify;
  
          setCurrentSong(songName);
          setCurrentSongURL(songURL);
          setOnlineStatus(true);
        } else {
          setCurrentSong(null);
          setCurrentSongURL(null);
        }
      }

      if (topTracksData) {
        if(topTracksData.status === 200) {
          const NUMBER_OF_TRACKS = 3;
          const fetchedTracks = topTracksData.data.items;
          const topTracks = [];

          for(let i=0; i<NUMBER_OF_TRACKS; i++) {
            const track = fetchedTracks[i];

            if (track && track.name) {
              const trackName = track && track.name;
              const trackArtists = populateTrackArtists(track.artists);
              const trackURL = track && track.external_urls.spotify;

              topTracks.push({
                name: trackName,
                artists: trackArtists,
                link: trackURL
              })
            }
          }
          setTopTracks(topTracks);
        }
      }

      if (recentlyPlayedTracksData) {
        if (recentlyPlayedTracksData.status === 200) {
          const recentlyPlayedSongs = recentlyPlayedTracksData.data.items;
          const lastPlayedSong = recentlyPlayedSongs[0].track.name;
          const lastPlayedSongURL = recentlyPlayedSongs[0].track.external_urls.spotify;

          setLastPlayedSong(lastPlayedSong);
          setLastPlayedSongURL(lastPlayedSongURL);
        }
      }
    });  
  }, [])

  return (
    <CardGrid>
      <CurrentSongStatus
        isOnline={isOnline}
        isLoading={isLoading}
        songName={isOnline ? currentSong : lastPlayedSong}
        songURL={isOnline ? currentSongURL: lastPlayedSongURL}
      />
      <TopTracks isLoading={isLoading} tracks={topTracks} />
    </CardGrid>
  );
}

export default SpotifyUpdates;