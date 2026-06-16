import FastNoiseLite from 'fastnoise-lite'

type NoiseType = typeof FastNoiseLite.NoiseType[keyof typeof FastNoiseLite.NoiseType]
type FractalType = typeof FastNoiseLite.FractalType[keyof typeof FastNoiseLite.FractalType]
type DomainWarpType = typeof FastNoiseLite.DomainWarpType[keyof typeof FastNoiseLite.DomainWarpType]

type GridCanvasProps = {
    frequency: number,
    intensity: number,
    seed: number,
    type: NoiseType
    fractal: FractalType
    fractalOctaves: number
    fractalLacunarity: number
    fractalGain: number
    domainWarpType: DomainWarpType
    domainWarpAmp: number
}