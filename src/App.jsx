import './App.css'
import Countries from './components/countries/countries'

const countriesPromise = fetch('https://restcountries.com/v3.1/all').then(res => res.json())
function App() {

  return (
    <>
      <Countries countriesPromise ={countriesPromise}></Countries>
    </>
  )
}

export default App
