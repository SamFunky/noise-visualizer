import FastNoiseLite from 'fastnoise-lite'

export type FastNoiseLiteInstace = InstanceType<typeof FastNoiseLite>
export type NoiseType = typeof FastNoiseLite.NoiseType[keyof typeof FastNoiseLite.NoiseType]
export type NoiseFractalType =
    | typeof FastNoiseLite.FractalType.FBm
    | typeof FastNoiseLite.FractalType.Ridged
    | typeof FastNoiseLite.FractalType.PingPong
export type DomainWarpType = typeof FastNoiseLite.DomainWarpType[keyof typeof FastNoiseLite.DomainWarpType]
export type CellularDistanceFunction = typeof FastNoiseLite.CellularDistanceFunction[keyof typeof FastNoiseLite.CellularDistanceFunction]
export type CellularReturnType = typeof FastNoiseLite.CellularReturnType[keyof typeof FastNoiseLite.CellularReturnType]
export type DomainWarpFractalType =
    | typeof FastNoiseLite.FractalType.DomainWarpProgressive
    | typeof FastNoiseLite.FractalType.DomainWarpIndependent

export type NoiseConfig = {
    frequency: number[]
    seed: number[]
    type: NoiseType
    fractal: NoiseFractalType | null
    fractalOctaves: number[]
    fractalLacunarity: number[]
    fractalGain: number[]
    fractalWeightedStrength: number[]
    fractalPingPongStrength: number[]
    cellularDistanceFunction: CellularDistanceFunction
    cellularReturnType: CellularReturnType
    cellularJitter: number[]
}

export type DomainWarpConfig = {
    domainWarpType: DomainWarpType | null
    domainWarpAmp: number[]
    domainWarpSeed: number[]
    domainWarpFrequency: number[]
    domainWarpFractalType: DomainWarpFractalType | null
    domainWarpFractalOctaves: number[]
    domainWarpFractalLacunarity: number[]
    domainWarpFractalGain: number[]
}

export type NoiseVisualizerProps = NoiseConfig & DomainWarpConfig & {
    intensity: number[]
    isDisplaying3D: boolean
    blackWhitePoint: number[]
}

export type NoiseGrid2DProps = NoiseConfig & DomainWarpConfig & {
    intensity: number[]
    noise: FastNoiseLiteInstace
    warpNoise: FastNoiseLiteInstace
}

export type NoiseGrid3DProps = NoiseConfig & DomainWarpConfig & {
    noise: FastNoiseLiteInstace
    warpNoise: FastNoiseLiteInstace
}

export type pointNeighborCheckProps = DomainWarpConfig & {
    noise: FastNoiseLiteInstace
    warpNoise: FastNoiseLiteInstace
    threshold: number
    x: number
    y: number
    z: number
}
