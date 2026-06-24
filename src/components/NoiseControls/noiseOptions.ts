import FastNoiseLite from 'fastnoise-lite'

export const NONE_OPTION_TEXT = 'None'

export const NOISE_TYPE_OPTIONS = [
    { value: FastNoiseLite.NoiseType.OpenSimplex2, label: 'OpenSimplex2' },
    { value: FastNoiseLite.NoiseType.OpenSimplex2S, label: 'OpenSimplex2S' },
    { value: FastNoiseLite.NoiseType.Cellular, label: 'Cellular' },
    { value: FastNoiseLite.NoiseType.Perlin, label: 'Perlin' },
    { value: FastNoiseLite.NoiseType.ValueCubic, label: 'ValueCubic' },
    { value: FastNoiseLite.NoiseType.Value, label: 'Value' },
] as const

export const FRACTAL_TYPE_OPTIONS = [
    { value: FastNoiseLite.FractalType.FBm, label: 'FBm' },
    { value: FastNoiseLite.FractalType.Ridged, label: 'Ridged' },
    { value: FastNoiseLite.FractalType.PingPong, label: 'PingPong' },
] as const

export const CELLULAR_DISTANCE_OPTIONS = [
    { value: FastNoiseLite.CellularDistanceFunction.Euclidean, label: 'Euclidean' },
    { value: FastNoiseLite.CellularDistanceFunction.EuclideanSq, label: 'Euclidean Sq' },
    { value: FastNoiseLite.CellularDistanceFunction.Manhattan, label: 'Manhattan' },
    { value: FastNoiseLite.CellularDistanceFunction.Hybrid, label: 'Hybrid' },
] as const

export const CELLULAR_RETURN_OPTIONS = [
    { value: FastNoiseLite.CellularReturnType.CellValue, label: 'CellValue' },
    { value: FastNoiseLite.CellularReturnType.Distance, label: 'Distance' },
    { value: FastNoiseLite.CellularReturnType.Distance2, label: 'Distance2' },
    { value: FastNoiseLite.CellularReturnType.Distance2Add, label: 'Distance2Add' },
    { value: FastNoiseLite.CellularReturnType.Distance2Sub, label: 'Distance2Sub' },
    { value: FastNoiseLite.CellularReturnType.Distance2Mul, label: 'Distance2Mul' },
    { value: FastNoiseLite.CellularReturnType.Distance2Div, label: 'Distance2Div' },
] as const

export const DOMAIN_WARP_TYPE_OPTIONS = [
    { value: FastNoiseLite.DomainWarpType.OpenSimplex2, label: 'OpenSimplex2' },
    { value: FastNoiseLite.DomainWarpType.OpenSimplex2Reduced, label: 'OpenSimplex2Reduced' },
    { value: FastNoiseLite.DomainWarpType.BasicGrid, label: 'BasicGrid' },
] as const

export const DOMAIN_WARP_FRACTAL_TYPE_OPTIONS = [
    { value: FastNoiseLite.FractalType.DomainWarpProgressive, label: 'DomainWarpProgressive' },
    { value: FastNoiseLite.FractalType.DomainWarpIndependent, label: 'DomainWarpIndependent' },
] as const
