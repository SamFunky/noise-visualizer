import './App.css'
import { NoiseControlPannel } from './components/NoiseControls/NoiseControls'
import FastNoiseLite from 'fastnoise-lite'
import { useState } from 'react'
import { NoiseVisualizer } from './components/NoiseGrid/NoiseVisualizer'
import type {
  CellularDistanceFunction,
  CellularReturnType,
  DomainWarpFractalType,
  DomainWarpType,
  NoiseFractalType,
  NoiseType,
} from './components/NoiseGrid/types'

function App() {
  const [frequency, setFrequency] = useState([0.01])
  const [intensity, setIntensity] = useState([1.0])
  const [seed, setSeed] = useState([1337])
  const [noiseType, setNoiseType] = useState<NoiseType>(FastNoiseLite.NoiseType.OpenSimplex2)
  const [fractalType, setFractalType] = useState<NoiseFractalType | null>(null)
  const [fractalOctaves, setFractalOctaves] = useState([3])
  const [fractalLacunarity, setFractalLacunarity] = useState([2.0])
  const [fractalGain, setFractalGain] = useState([0.5])
  const [fractalWeightedStrength, setFractalWeightedStrength] = useState([0.0])
  const [fractalPingPongStrength, setFractalPingPongStrength] = useState([2.0])
  const [cellularDistanceFunction, setCellularDistanceFunction] = useState<CellularDistanceFunction>(
    FastNoiseLite.CellularDistanceFunction.EuclideanSq
  )
  const [cellularReturnType, setCellularReturnType] = useState<CellularReturnType>(
    FastNoiseLite.CellularReturnType.Distance
  )
  const [cellularJitter, setCellularJitter] = useState([1.0])
  const [domainWarpType, setDomainWarpType] = useState<DomainWarpType | null>(null)
  const [domainWarpAmp, setDomainWarpAmp] = useState([1.0])
  const [domainWarpSeed, setDomainWarpSeed] = useState([1337])
  const [domainWarpFrequency, setDomainWarpFrequency] = useState([0.01])
  const [domainWarpFractalType, setDomainWarpFractalType] = useState<DomainWarpFractalType | null>(null)
  const [domainWarpFractalOctaves, setDomainWarpFractalOctaves] = useState([3])
  const [domainWarpFractalLacunarity, setDomainWarpFractalLacunarity] = useState([2.0])
  const [domainWarpFractalGain, setDomainWarpFractalGain] = useState([0.5])
  const [isDisplaying3D, setIsDisplaying3D] = useState(false)

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
        fractalWeightedStrength={fractalWeightedStrength}
        setFractalWeightedStrength={setFractalWeightedStrength}
        fractalPingPongStrength={fractalPingPongStrength}
        setFractalPingPongStrength={setFractalPingPongStrength}
        cellularDistanceFunction={cellularDistanceFunction}
        setCellularDistanceFunction={setCellularDistanceFunction}
        cellularReturnType={cellularReturnType}
        setCellularReturnType={setCellularReturnType}
        cellularJitter={cellularJitter}
        setCellularJitter={setCellularJitter}
        domainWarpType={domainWarpType}
        setDomainWarpType={setDomainWarpType}
        domainWarpAmp={domainWarpAmp}
        setDomainWarpAmp={setDomainWarpAmp}
        domainWarpSeed={domainWarpSeed}
        setDomainWarpSeed={setDomainWarpSeed}
        domainWarpFrequency={domainWarpFrequency}
        setDomainWarpFrequency={setDomainWarpFrequency}
        domainWarpFractalType={domainWarpFractalType}
        setDomainWarpFractalType={setDomainWarpFractalType}
        domainWarpFractalOctaves={domainWarpFractalOctaves}
        setDomainWarpFractalOctaves={setDomainWarpFractalOctaves}
        domainWarpFractalLacunarity={domainWarpFractalLacunarity}
        setDomainWarpFractalLacunarity={setDomainWarpFractalLacunarity}
        domainWarpFractalGain={domainWarpFractalGain}
        setDomainWarpFractalGain={setDomainWarpFractalGain}
        isDisplaying3D={isDisplaying3D}
        setIsDisplaying3D={setIsDisplaying3D}
      />
      <NoiseVisualizer
        isDisplaying3D={isDisplaying3D}
        frequency={frequency}
        intensity={intensity}
        seed={seed}
        type={noiseType}
        fractal={fractalType}
        fractalOctaves={fractalOctaves}
        fractalLacunarity={fractalLacunarity}
        fractalGain={fractalGain}
        fractalWeightedStrength={fractalWeightedStrength}
        fractalPingPongStrength={fractalPingPongStrength}
        cellularDistanceFunction={cellularDistanceFunction}
        cellularReturnType={cellularReturnType}
        cellularJitter={cellularJitter}
        domainWarpType={domainWarpType}
        domainWarpAmp={domainWarpAmp}
        domainWarpSeed={domainWarpSeed}
        domainWarpFrequency={domainWarpFrequency}
        domainWarpFractalType={domainWarpFractalType}
        domainWarpFractalOctaves={domainWarpFractalOctaves}
        domainWarpFractalLacunarity={domainWarpFractalLacunarity}
        domainWarpFractalGain={domainWarpFractalGain}
      />
    </div>
  )
}

export default App
