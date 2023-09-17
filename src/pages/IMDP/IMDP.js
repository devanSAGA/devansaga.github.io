import axios from 'axios';
import React, { useEffect, useState } from 'react';
import IMDPLogo from '../../assets/IMDpLogo.png';
import PageContainer from '../../components/PageContainer/PageContainer';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import Spinner from '../../components/Spinner/Spinner';
import FilterByOTTDropdown from './components/FilterByOTTDropdown';
import FilterByGenreDropdown from './components/FilterByGenreDropdown';
import TVShowCard from './components/TVShowCard';
import {
  Grid,
  GridBottom,
  Section,
  MovieCardsContainer,
  BlankState,
  IMDPLogoContainer,
  SectionHeading,
  FilterSection,
  FilterDropdowns,
  TVShowContainer,
  InfoNote,
  IMDPPageHeading
} from './styles';
import MovieCard from './components/MovieCard';
import Tooltip from '../../components/Tooltip/Tooltip';

const AIRTABLE_API_BASE_URL = 'https://api.airtable.com/v0';
const TV_SHOWS_TABLES_ID = 'tbluWl1xcEifazpLC';
const GET_LIST_OF_TV_SHOWS_URL = `${AIRTABLE_API_BASE_URL}/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${TV_SHOWS_TABLES_ID}`;
const LANG_FILTER_OPTIONS = [
  { value: 'indian', label: 'Indian TV Shows'},
  { value: 'english', label: 'English TV Shows'}
];
const MUST_WATCH_MOVIES_URL = 'https://letterboxd.com/devansaga/films/rated/4.5-5/';
const UNDERRATED_MOVIES_URL = 'https://letterboxd.com/devansaga/list/underrated/';
const REALLY_GOOD_MOVIES_URL = 'https://letterboxd.com/devansaga/films/rated/4/';
const GOOD_MOVIES_URL = 'https://letterboxd.com/devansaga/films/rated/3-3.5/';
const ALL_MOVIES_URL = 'https://letterboxd.com/devansaga/films';

export default function IMDP() {
  const [shows, setShows] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);
  const [langFilterValue, setLangFilterValue] = useState(LANG_FILTER_OPTIONS[0].value);
  const [isLoading, setLoading] = useState(true);
  const [selectedOTTs, setSelectedOTTs] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const filterShowsBasedOnLang = (shows) => {
    return shows.filter((show) => {
      if (langFilterValue === 'english') {
        if (show.fields.Language === 'English') return true;
        else return false;
      } else {
        if (show.fields.Language === 'English') return false;
        else return true;
      }
    });
  }

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

      const filteredShowsBasedOnLang = filterShowsBasedOnLang(sortedList);
      setFilteredShows(filteredShowsBasedOnLang);

      setLoading(false);
    })
  }, []);

  useEffect(() => {
    let newFilteredShows = [...shows];

    if (newFilteredShows.length === 0) return;
    
    newFilteredShows = filterShowsBasedOnLang(newFilteredShows);

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
  }, [shows, selectedOTTs, selectedGenres, langFilterValue]);

  return (
    <PageContainer>
      <IMDPLogoContainer>
        <Tooltip content={<span>IMDP stands for <b>I am Devansh Purohit</b> 😛</span>}>
          <img alt='IMDP Logo' src={IMDPLogo} />
        </Tooltip>
      </IMDPLogoContainer>
      <IMDPPageHeading>Recommended list of TV shows and Movies</IMDPPageHeading>
      {isLoading ? <BlankState><Spinner /></BlankState> : (
        <>
          <Section>
            {!isLoading && filteredShows.length !== 0 ? <GridBottom /> : null}
            <SectionHeading>TV Shows</SectionHeading>
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
            <TVShowContainer>
              {filteredShows.length === 0 ? (
                <BlankState showBorder={true}>
                  <span className='blank-state_title'>No TV Shows found</span>
                  <span className='blank-state_desc'>Change the filters</span>
                </BlankState>
              ) : (
                <Grid>
                  {filteredShows
                    .map((show, index) => {
                      const { Name, Rating, Genre, NumberOfSeasons, EpisodeWiseRating, OTT, Link, Emoji } = show.fields;
                      return (
                        <TVShowCard
                          key={index}
                          name={Name}
                          rating={Rating}
                          genres={Genre}
                          OTTLink={Link}
                          OTT={OTT}
                          numberOfSeasons={NumberOfSeasons}
                          hoverEmoji={Emoji}
                          episodeRatingLink={EpisodeWiseRating}
                        />
                      );
                  })}
                </Grid>
              )}

            </TVShowContainer>
          </Section>
          <Section>
            <SectionHeading>Movies</SectionHeading>
            <GridBottom />
            <MovieCardsContainer>
              <Grid>
                <MovieCard
                  heading='Must Watch Movies'
                  subHeading='4.5-5 Stars'
                  url={MUST_WATCH_MOVIES_URL}
                  headingColor='#74AEF6'
                />
                <MovieCard
                  heading='Really Good Movies'
                  subHeading='4 Stars'
                  url={REALLY_GOOD_MOVIES_URL}
                  headingColor='#6BDD9A'
                />
                <MovieCard
                  heading='Good Movies'
                  subHeading='3-3.5 Stars'
                  url={GOOD_MOVIES_URL}
                  headingColor='#FFE47E'
                />
                <MovieCard
                  heading='Underrated Movies'
                  subHeading='Star Performances'
                  url={UNDERRATED_MOVIES_URL}
                  headingColor='#ff7c37'
                />          
                <MovieCard
                  heading='Check full list'
                  letterboxdEasterEgg
                  url={ALL_MOVIES_URL}
                  headingColor='#FFFFFF'
                />          
              </Grid>
            </MovieCardsContainer>
          </Section>
          <InfoNote>
            The ratings are based on my personal opinion and based on how much I enjoyed watching them. If you don't agree with particular rating, just consider as <i>the fault in our stars</i> ✨.
          </InfoNote>
        </>
      )}
    </PageContainer>
  ); 
}
