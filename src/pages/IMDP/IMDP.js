import axios from 'axios';
import React, { useEffect, useState } from 'react';
import IMDPLogo from '../../assets/IMDpLogo.png';
import PageContainer from '../../components/PageContainer/PageContainer';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import Spinner from '../../components/Spinner/Spinner';
import FilterByOTTDropdown from './components/FilterByOTTDropdown';
import FilterByGenreDropdown from './components/FilterByGenreDropdown';
import GridCard from './components/GridCard';
import { BlankState, FilterDropdowns, FilterSection, IMDPLogoContainer, Grid, IMDPPageHeading } from './styles';

const AIRTABLE_API_BASE_URL = 'https://api.airtable.com/v0';
const TV_SHOWS_TABLES_ID = 'tbluWl1xcEifazpLC';
const GET_LIST_OF_TV_SHOWS_URL = `${AIRTABLE_API_BASE_URL}/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${TV_SHOWS_TABLES_ID}`;
const LANG_FILTER_OPTIONS = [
  { value: 'indian', label: 'Indian TV Shows'},
  { value: 'english', label: 'English TV Shows'}
];

export default function IMDP() {
  const [shows, setShows] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);
  const [langFilterValue, setLangFilterValue] = useState(LANG_FILTER_OPTIONS[0].value);
  const [isLoading, setLoading] = useState(true);
  const [selectedOTTs, setSelectedOTTs] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: GET_LIST_OF_TV_SHOWS_URL,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_TOKEN}`
      }
    })
    .then((response) => response.data)
    .then((data) => {
      const sortedList = [...data.records].sort((a, b) => {
        const ratingOrder = {
          'Must Watch' : 1,
          'Really Good': 2,
          'Good': 3,
          'Ok': 4,
          'Don\'t Watch': 5
        };
    
        return ratingOrder[a.fields.Rating] - ratingOrder[b.fields.Rating];
      });
      setShows(sortedList);
      setFilteredShows(sortedList);
      setLoading(false);
    })
  }, []);

  useEffect(() => {
    let newFilteredShows = [...shows];

    if (selectedOTTs.length > 0) {
      const filteredOTTs = selectedOTTs.map((option) => option.value);
      newFilteredShows = newFilteredShows.filter((show) => filteredOTTs.includes(show.fields.OTT));
    }

    if (selectedGenres.length > 0) {
      const filteredGenres = selectedGenres.map((option) => option.value);
      newFilteredShows = newFilteredShows.filter((show) => {
        // Check if there is any intersection between the show's genres and the selected genres
        const intersection = show.fields.Genre.some((genre) =>
          filteredGenres.includes(genre)
        );
    
        // If there is an intersection, include the show in the filtered list
        return intersection;
      });
    }

    setFilteredShows(newFilteredShows);
  }, [selectedOTTs, selectedGenres]);

  return (
    <PageContainer>
      <IMDPLogoContainer>
        <img alt='IMDP Logo' src={IMDPLogo} />
      </IMDPLogoContainer>
      <IMDPPageHeading>TV Shows</IMDPPageHeading>
      <FilterSection>
        <RadioGroup options={LANG_FILTER_OPTIONS} value={langFilterValue} onChange={setLangFilterValue} />
        <FilterDropdowns>
          <span>Filter By:</span>
          <FilterByOTTDropdown
            selectedOTTs={selectedOTTs}
            setSelectedOTTs={setSelectedOTTs}
          />
          <FilterByGenreDropdown
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
          />
        </FilterDropdowns>
      </FilterSection>
      {isLoading ? <BlankState><Spinner /></BlankState> : (
        <Grid>
          {filteredShows
            .filter((show) => {
              if (langFilterValue === 'english') {
                if (show.fields.Language === 'English') return true;
                else return false;
              } else {
                if (show.fields.Language === 'English') return false;
                else return true;
              }
            })
            .map((show, index) => {
              const { Name, Rating, Genre, NumberOfSeasons, EpisodeWiseRating, OTT, Link } = show.fields;
              return (
                <GridCard
                  key={index}
                  name={Name}
                  rating={Rating}
                  genres={Genre}
                  OTTLink={Link}
                  OTT={OTT}
                  numberOfSeasons={NumberOfSeasons}
                  episodeRatingLink={EpisodeWiseRating}
                />
              );
          })}
        </Grid>
      )}
    </PageContainer>
  ); 
}
