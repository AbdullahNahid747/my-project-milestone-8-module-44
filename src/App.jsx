import './App.css'
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
    </>
  )
}

export default App
