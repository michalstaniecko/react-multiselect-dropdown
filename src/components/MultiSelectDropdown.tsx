import {useCallback, useEffect, useState} from "react";
import MultiSelectDropdownItem from "./MultiSelectDropdownItem.tsx";
import MultiSelectDropdownSearch from "./MultiSelectDropdownSearch.tsx";

export type TOption = {
  value: string,
  text: string,
  isSelected: boolean
}

export type TSelectedOptions = string[];

export interface IMultiSelectDropdown {
  options: TOption[],
  onChange: (values: string[]) => void
}

function MultiSelectDropdown({options, onChange}: IMultiSelectDropdown) {
  const [selectedOptions, setSelectedOptions] = useState<TSelectedOptions>(() => {
    return options.reduce((acc: string[], current) => {
      if (current.isSelected) acc.push(current.value);
      return acc;
    }, [])
  });
  const [showOptions, setShowOptions] = useState(true);
  const [filteredOptions, setFilteredOptions] = useState<TOption[]>([]);

  const handleSelectOption = useCallback((value: string) => {
    setSelectedOptions(prevSelectedOptions => {
      if (prevSelectedOptions.includes(value)) {
        const valueIndex = prevSelectedOptions.indexOf(value);
        const newSelectedOptions = [...prevSelectedOptions];
        newSelectedOptions.splice(valueIndex, 1);
        return newSelectedOptions;
      } else {
        return [...prevSelectedOptions, value];
      }
    })
  }, []);

  function handleToggleShowOptions() {
    setShowOptions(!showOptions);
  }

  function areSelectedAll() {
    return selectedOptions.length === options.length;
  }

  function handleSelectAll() {
    if (areSelectedAll()) {
      setSelectedOptions([]);
      return;
    }

    setSelectedOptions(options.map(({value}) => value));
  }

  function handleSearch(value: string) {
    if (value == null) {
      setFilteredOptions(options);
      return;
    }

    const valueToLowerCase = value.toLowerCase();

    setFilteredOptions(options.filter(
      option => option.text.toLowerCase().includes(valueToLowerCase))
    );
  }

  useEffect(() => {
    handleSearch('');
  }, []);

  useEffect(() => {
    onChange(selectedOptions);
  }, [selectedOptions]);

  return (
    <div className={'multiselect-dropdown'}>
      <button onClick={handleToggleShowOptions}>
        {selectedOptions?.length > 0 ? `Items selected: ${selectedOptions.length}` : 'Select cities'}
      </button>
      {showOptions && (
        <div>
          <button onClick={handleSelectAll}>{areSelectedAll() ? `Deselect all` : `Select all`}</button>
          <MultiSelectDropdownSearch onValueChange={handleSearch}/>
          <div className={'available-options-list'}>
            {filteredOptions.map(option => <MultiSelectDropdownItem
              onSelectOption={handleSelectOption}
              key={option.value}
              value={option.value} text={option.text} isSelected={selectedOptions.includes(option.value)}
            />)}
          </div>
        </div>
      )}
    </div>
  )
}

export default MultiSelectDropdown;
