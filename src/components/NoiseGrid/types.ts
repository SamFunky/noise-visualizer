import FastNoiseLite from 'fastnoise-lite'

export type FastNoiseLiteInstace = InstanceType<typeof FastNoiseLite>
export type NoiseType = typeof FastNoiseLite.NoiseType[keyof typeof FastNoiseLite.NoiseType]
export type FractalType = typeof FastNoiseLite.FractalType[keyof typeof FastNoiseLite.FractalType]
export type DomainWarpType = typeof FastNoiseLite.DomainWarpType[keyof typeof FastNoiseLite.DomainWarpType]

export type NoiseConfig = {
    frequency: number,
    seed: number,
    type: NoiseType,
    fractal: FractalType,
    fractalOctaves: number,
    fractalLacunarity: number,
    fractalGain: number,
    domainWarpType: DomainWarpType,
    domainWarpAmp: number
}

export type NoiseVisualizerProps = NoiseConfig & {
    intensity: number
}

export type NoiseGrid2DProps = NoiseConfig & {
    intensity: number,
    noise: FastNoiseLiteInstace
}

export type NoiseGrid3DProps = NoiseConfig & {
    noise: FastNoiseLiteInstace
}

export type pointNeighborCheckProps = {
    noise: FastNoiseLiteInstace,
    domainWarpAmp: number,
    threshold: number,
    x: number,
    y: number,
    z: number
}