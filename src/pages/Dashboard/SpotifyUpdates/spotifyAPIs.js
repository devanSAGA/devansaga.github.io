import axios from 'axios';
import * as qs from 'qs'

const GET_CURRENT_SONG_ACTIVITY = 'https://api.spotify.com/v1/me/player/currently-playing',
      GET_TOP_TRACKS = 'https://api.spotify.com/v1/me/top/tracks',
      GET_RECENTLY_PLAYED_TRACKS = 'https://api.spotify.com/v1/me/player/recently-played',
      GET_ACCESS_TOKEN = 'https://accounts.spotify.com/api/token'

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;
const encoded_credentials = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');

// This API returns the access token, using which we can access private spotify account data
const getAccessToken = async () => {
  const response = await axios({
    method: 'post',
    url: GET_ACCESS_TOKEN,
    headers: {
      Authorization: `Basic ${encoded_credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  })

  return response;
};

// This API returns the current status of the spotify player
// It returns 204 if no song is playing currently, otherwise it returns the data of the song
const getCurrentSong = async (access_token) => {
  const response = await axios({
    method: 'get',
    url: GET_CURRENT_SONG_ACTIVITY,
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })

  return response;
}

// This API returns my top tracks chart
const getTopTracks = async (access_token) => {
  const response = await axios({
    method: 'get',
    url: GET_TOP_TRACKS,
    headers: {
      Authorization: `Bearer ${access_token}`
    },
    params: {
      time_range: 'short_term'
    }
  })

  return response;
}

// This API returns the history of recently played songs
const getRecentlyPlayedTracks = async (access_token) => {
  const response = await axios({
    method: 'get',
    url: GET_RECENTLY_PLAYED_TRACKS,
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })

  return response;
}

export {
  getAccessToken,
  getCurrentSong,
  getTopTracks,
  getRecentlyPlayedTracks
};