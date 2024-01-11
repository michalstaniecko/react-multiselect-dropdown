import './App.css'
import MultiSelectDropdown, {TOption, TSelectedOptions} from "./components/MultiSelectDropdown.tsx";

const options: TOption[] = [
  {
    value: 'tychy',
    text: 'Tychy',
    isSelected: true
  },
  {
    value: 'katowice',
    text: 'Katowice',
    isSelected: false
  },
  {
    value: 'sosnowiec',
    text: 'Sosnowiec',
    isSelected: false
  },
  {
    value: 'warszawa',
    text: 'Warszawa',
    isSelected: false
  },
  {
    value: 'wrocław',
    text: 'Wrocław',
    isSelected: true
  }
]

function App() {

  function handleOnChange(values: TSelectedOptions) {
    console.log('handleOnChange', values);
  }

  return (
    <>
      <MultiSelectDropdown options={options} onChange={handleOnChange}/>
    </>
  )
}

export default App
