import React, { useEffect, useState } from 'react';
import FilterSelect from '../../../components/FilterSelect/FilterSelect';

const GENRES_LIST = [
  { value: 'Action', label: 'Action'},
  { value: 'Biography', label: 'Biography'},
  { value: 'Comedy', label: 'Comedy'},
  { value: 'Crime', label: 'Crime'},
  { value: 'Dark', label: 'Dark'},
  { value: 'Drama', label: 'Drama'},
  { value: 'Entrepreneurship', label: 'Entrepreneurship'},
  { value: 'Feel Good', label: 'Feel Good'},
  { value: 'Gore', label: 'Gore'},
  { value: 'History', label: 'History'},
  { value: 'Politics', label: 'Politics'},
  { value: 'Superheroes', label: 'Superheroes'},
  { value: 'Suspense', label: 'Suspense'},
  { value: 'Thriller', label: 'Thriller'},
];

export default function FilterByGenreDropdown(props) {
  const { selectedGenres, setSelectedGenres } = props;
  const [ inlineLabel, setInlineLabel ] = useState('');

  const handleOnSelection = (newOptions) => {
    setSelectedGenres(newOptions);
  }

  useEffect(() => {
    const countOfSelectedOptions = selectedGenres.length;
    if (countOfSelectedOptions === 0) {
      setInlineLabel('');
    } else if (countOfSelectedOptions === 1) {
      const selectedOptionLabel = selectedGenres[0].label;
      setInlineLabel(selectedOptionLabel);
    } else {
      const selectedOptionLabel = `${countOfSelectedOptions} Genres Selected`;
      setInlineLabel(selectedOptionLabel);
    }
  }, [selectedGenres]);

 return (
  <FilterSelect
    value={selectedGenres}
    options={GENRES_LIST}
    onChange={handleOnSelection}
    placeholder='Select genre'
    label='Genre'
    inlineLabel={inlineLabel}
    width='228px'
  />
 ); 
}

