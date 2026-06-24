import { useState } from 'react'
import FastNoiseLite from 'fastnoise-lite'
import type {
    CellularDistanceFunction,
    CellularReturnType,
    DomainWarpFractalType,
    DomainWarpType,
    NoiseFractalType,
    NoiseType,
    NoiseVisualizerProps,
} from '../components/NoiseGrid/types'

export function useNoiseSettings() {
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
    const [cellularDistanceFunction, setCellularDistanceFunction] = useState<CellularDistanceFunction>(FastNoiseLite.CellularDistanceFunction.EuclideanSq)
    const [cellularReturnType, setCellularReturnType] = useState<CellularReturnType>(FastNoiseLite.CellularReturnType.Distance)
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

    const visualizerProps: NoiseVisualizerProps = {
        frequency,
        intensity,
        seed,
        type: noiseType,
        fractal: fractalType,
        fractalOctaves,
        fractalLacunarity,
        fractalGain,
        fractalWeightedStrength,
        fractalPingPongStrength,
        cellularDistanceFunction,
        cellularReturnType,
        cellularJitter,
        domainWarpType,
        domainWarpAmp,
        domainWarpSeed,
        domainWarpFrequency,
        domainWarpFractalType,
        domainWarpFractalOctaves,
        domainWarpFractalLacunarity,
        domainWarpFractalGain,
        isDisplaying3D,
    }

    return {
        visualizerProps,
        frequency,
        setFrequency,
        intensity,
        setIntensity,
        seed,
        setSeed,
        noiseType,
        setNoiseType,
        fractalType,
        setFractalType,
        fractalOctaves,
        setFractalOctaves,
        fractalLacunarity,
        setFractalLacunarity,
        fractalGain,
        setFractalGain,
        fractalWeightedStrength,
        setFractalWeightedStrength,
        fractalPingPongStrength,
        setFractalPingPongStrength,
        cellularDistanceFunction,
        setCellularDistanceFunction,
        cellularReturnType,
        setCellularReturnType,
        cellularJitter,
        setCellularJitter,
        domainWarpType,
        setDomainWarpType,
        domainWarpAmp,
        setDomainWarpAmp,
        domainWarpSeed,
        setDomainWarpSeed,
        domainWarpFrequency,
        setDomainWarpFrequency,
        domainWarpFractalType,
        setDomainWarpFractalType,
        domainWarpFractalOctaves,
        setDomainWarpFractalOctaves,
        domainWarpFractalLacunarity,
        setDomainWarpFractalLacunarity,
        domainWarpFractalGain,
        setDomainWarpFractalGain,
        isDisplaying3D,
        setIsDisplaying3D,
    }
}

export type NoiseSettings = Omit<ReturnType<typeof useNoiseSettings>, 'visualizerProps'>
