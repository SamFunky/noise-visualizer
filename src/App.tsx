import './App.css'
import { GridCanvas } from './components/NoiseGrid/NoiseGrid'
import FastNoiseLite from 'fastnoise-lite'

function App() {

  return (
    <div>
      <GridCanvas frequency={.05} type={FastNoiseLite.NoiseType.OpenSimplex2} intensity={1.0}/>
    </div>
  )
}

export default App
