import React, { useEffect, useState } from 'react';
import FilterSelect from '../../../components/FilterSelect/FilterSelect';

const OTT_PLATFORMS_LIST = [
  { value: 'Jio Cinema', label: 'Jio Cinema'},
  { value: 'Hotstar', label: 'Hotstar'},
  { value: 'Apple TV', label: 'Apple TV'},
  { value: 'Sony LIV', label: 'Sony LIV'},
  { value: 'Voot', label: 'Voot'},
  { value: 'Zee5', label: 'Zee5'},
  { value: 'Netflix', label: 'Netflix'},
  { value: 'Amazon Prime', label: 'Amazon Prime'}
];

export default function FilterByOTTDropdown(props) {
  const { selectedOTTs, setSelectedOTTs } = props;
  const [ inlineLabel, setInlineLabel ] = useState('');

  const handleOnSelection = (newOptions) => {
    setSelectedOTTs(newOptions);
  }

  useEffect(() => {
    const countOfSelectedOptions = selectedOTTs.length;
    if (countOfSelectedOptions === 0) {
      setInlineLabel('');
    } else if (countOfSelectedOptions === 1) {
      const selectedOptionLabel = selectedOTTs[0].label;
      setInlineLabel(selectedOptionLabel);
    } else {
      const selectedOptionLabel = `${countOfSelectedOptions} OTTs Selected`;
      setInlineLabel(selectedOptionLabel);
    }
  }, [selectedOTTs]);

 return (
  <FilterSelect
    value={selectedOTTs}
    options={OTT_PLATFORMS_LIST}
    onChange={handleOnSelection}
    placeholder='Select platform'
    label='OTT'
    inlineLabel={inlineLabel}
    width='200px'
  />
 ); 
}

