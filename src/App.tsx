import './App.css'
import { GridCanvas } from './components/NoiseGrid/NoiseGrid'
import { NoiseControlPannel } from './components/NoiseControls/NoiseControls'
import FastNoiseLite from 'fastnoise-lite'
import { useState } from 'react'

type NoiseType = typeof FastNoiseLite.NoiseType[keyof typeof FastNoiseLite.NoiseType]
type FractalType = typeof FastNoiseLite.FractalType[keyof typeof FastNoiseLite.FractalType]
type DomainWarpType = typeof FastNoiseLite.DomainWarpType[keyof typeof FastNoiseLite.DomainWarpType]

function App() {
  const [frequency, setFrequency] = useState(0.05)
  const [intensity, setIntensity] = useState(1.0)
  const [seed, setSeed] = useState(1337)
  const [noiseType, setNoiseType] = useState<NoiseType>(FastNoiseLite.NoiseType.OpenSimplex2)
  const [fractalType, setFractalType] = useState<FractalType>(FastNoiseLite.FractalType.None)
  const [fractalOctaves, setFractalOctaves] = useState(3)
  const [fractalLacunarity, setFractalLacunarity] = useState(2.0)
  const [fractalGain, setFractalGain] = useState(0.5)
  const [domainWarpType, setDomainWarpType] = useState<DomainWarpType>(FastNoiseLite.DomainWarpType.OpenSimplex2)
  const [domainWarpAmp, setDomainWarpAmp] = useState(0.0)

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
        fractalOctaves={fractalOctaves}
        setFractalOctaves={setFractalOctaves}
        fractalLacunarity={fractalLacunarity}
        setFractalLacunarity={setFractalLacunarity}
        fractalGain={fractalGain}
        setFractalGain={setFractalGain}
        domainWarpType={domainWarpType}
        setDomainWarpType={setDomainWarpType}
        domainWarpAmp={domainWarpAmp}
        setDomainWarpAmp={setDomainWarpAmp}
      />
      <GridCanvas 
        frequency={frequency} 
        intensity={intensity}
        seed={seed}
        type={noiseType} 
        fractal={fractalType}
        fractalOctaves={fractalOctaves}
        fractalLacunarity={fractalLacunarity}
        fractalGain={fractalGain}
        domainWarpType={domainWarpType}
        domainWarpAmp={domainWarpAmp}
      />
      
    </div>
  )
}

export default App
