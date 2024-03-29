import React, { useRef } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import {
  CustomValueContainer,
  CustomMultiValueContainer,
  ClearIndicatorIcon,
  DropdownIndicatorIcon,
  CustomOption
} from './CustomFilterSelectComponents';

import {
  postmanSpecificStyles,
} from './CustomFilterSelectStyles';

const StyledReactSelect = styled(Select)`
  ${postmanSpecificStyles}
`;

const FilterSelectContainer = styled.div`
  width: ${( props ) => props.width || '100%'};
`;


export default function FilterSelect(props) {
  const {
    emptyStateMessage,
    isDisabled,
    onChange,
    value,
    options: dropdownOptions,
    placeholder,
    inlineLabel,
    label,
    width
  } = props;

  const [options, setOptions] = React.useState(dropdownOptions);
  const dropdownRef = useRef(null);

  function handleOnChange(newSelectedOptions) {
    onChange(newSelectedOptions);
  }

  function clearSelectedOptions() {
    dropdownRef.current.clearValue();
  }

  // This useEffect hook, rerenders the component whenever the options are changed dynamically from consumer side
  React.useEffect(() => {
    setOptions(dropdownOptions);
  }, [dropdownOptions]);

  return (
    <FilterSelectContainer width={width} className='filter-select-dropdown'>
      <StyledReactSelect
        ref={dropdownRef}
        isMulti
        hideSelectedOptions={false}
        blurInputOnSelect={false}
        closeMenuOnSelect={false}
        backspaceRemovesValue={false}
        onChange={handleOnChange}
        onClearSelectedOptions={clearSelectedOptions}
        {...(value && { value })}
        options={options}
        placeholder={placeholder}
        isDisabled={isDisabled}
        isSearchable={false}
        isClearable={true}
        inlineLabel={inlineLabel}
        label={label}
        emptyStateMessage={emptyStateMessage}
        classNamePrefix='filter-select-dropdown'
        components={{
          ClearIndicator: ClearIndicatorIcon,
          IndicatorSeparator: null,
          DropdownIndicator: DropdownIndicatorIcon,
          MultiValue: CustomMultiValueContainer,
          ValueContainer: CustomValueContainer,
          Option: CustomOption
        }}
      />
    </FilterSelectContainer>
  );
}