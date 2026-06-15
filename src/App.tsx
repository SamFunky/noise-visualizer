import './App.css'
import { GridCanvas } from './components/NoiseGrid/NoiseGrid'
import { NoiseControlPannel } from './components/NoiseControls/NoiseControls'
import FastNoiseLite from 'fastnoise-lite'
import { useState } from 'react'

type NoiseType = typeof FastNoiseLite.NoiseType[keyof typeof FastNoiseLite.NoiseType]
type FractalType = typeof FastNoiseLite.FractalType[keyof typeof FastNoiseLite.FractalType]

function App() {
  const [frequency, setFrequency] = useState(0.05)
  const [intensity, setIntensity] = useState(1.0)
  const [seed, setSeed] = useState(1337)
  const [noiseType, setNoiseType] = useState<NoiseType>(FastNoiseLite.NoiseType.OpenSimplex2)
  const [fractalType, setFractalType] = useState<FractalType>(FastNoiseLite.FractalType.None)

  return (
    <div>
      <NoiseControlPannel 
        frequency={frequency}
        setFrequency={setFrequency}
        intensity={intensity}
        setIntensity={setIntensity}
        seed={seed}
        setSeed={setSeed}
        noiseType={noiseType}
        setNoiseType={setNoiseType}
        fractalType={fractalType}
        setFractalType={setFractalType}
      />
      <GridCanvas 
        frequency={frequency} 
        intensity={intensity}
        seed={seed}
        type={noiseType} 
        fractal={fractalType}
      />
      
    </div>
  )
}

export default App
