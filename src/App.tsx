import './App.css'
import { GridCanvas } from './components/NoiseGrid/NoiseGrid'
import { NoiseControlPannel } from './components/NoiseControls/NoiseControls'
import FastNoiseLite from 'fastnoise-lite'
import { useState } from 'react'

type NoiseType = typeof FastNoiseLite.NoiseType[keyof typeof FastNoiseLite.NoiseType]

function App() {
  const [frequency, setFrequency] = useState(0.05)
  const [intensity, setIntensity] = useState(1.0)
  const [noiseType, setNoiseType] = useState<NoiseType>(FastNoiseLite.NoiseType.OpenSimplex2)

  return (
    <div>
      <NoiseControlPannel 
        frequency={frequency}
        setFrequency={setFrequency}
        intensity={intensity}
        setIntensity={setIntensity}
        noiseType={noiseType}
        setNoiseType={setNoiseType}
      />
      <GridCanvas 
        frequency={frequency} 
        type={noiseType} 
        intensity={intensity}
      />
      
    </div>
  )
}

export default App
