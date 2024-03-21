import './App.css'
import LineChart from './Components/LineChart/LineChart'
import Navigationbar from './Components/Navigationbar'
import PriceOption from './Components/PriceOption/PriceOption'
// import Daisynav from './Components/DaisyNav/Daisynav'


function App() {

  return (
    <>

    <Navigationbar></Navigationbar>

    {/* <Daisynav></Daisynav> */}

      <h1 className=' mt-10 text-5xl bg-orange-500'>Vite + React</h1>

      <PriceOption></PriceOption>

      <LineChart></LineChart>
    </>
  )
}

export default App
