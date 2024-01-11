import {useEffect, useState, memo} from "react";

const MultiSelectDropdownItem = memo(function MultiSelectDropdownItem({
                                                                        value,
                                                                        text,
                                                                        isSelected = false,
                                                                        onSelectOption
                                                                      }: {
  value: string,
  text: string,
  isSelected: boolean,
  onSelectOption: (value: string) => void
}) {
  const [selected, setSelected] = useState(isSelected);

  function handleSelect() {
    setSelected(!selected);
    onSelectOption(value);
  }

  useEffect(() => {
    setSelected(isSelected);
  }, [isSelected]);

  return (
    <label>
      <input type="checkbox" onChange={handleSelect} checked={selected}/>{text}
    </label>
  )
});

export default MultiSelectDropdownItem
