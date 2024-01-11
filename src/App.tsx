import './App.css'
import MultiSelectDropdown, {TOption} from "./components/MultiSelectDropdown.tsx";

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

  return (
    <>
      <MultiSelectDropdown options={options} />
    </>
  )
}

export default App
