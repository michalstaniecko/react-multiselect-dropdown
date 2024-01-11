import {useState} from "react";

export interface IMultiSelectDropdownSearch {
  onValueChange: (value: string) => void;
}
function MultiSelectDropdownSearch({onValueChange}: IMultiSelectDropdownSearch) {
  const [value, setValue] = useState('');
  function handleChange(inputValue: string) {
    setValue(inputValue);
    onValueChange?.(inputValue);
  }

  return (
    <div>
      <input value={value} onChange={(e) => handleChange(e.target.value)} />
    </div>
  )
}

export default MultiSelectDropdownSearch;
