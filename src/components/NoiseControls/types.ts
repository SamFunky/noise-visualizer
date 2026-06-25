import type { NoiseSettings } from '@/hooks/useNoiseSettings'

export type DisplaySectionProps = Pick<
    NoiseSettings,
    'isDisplaying3D' | 'setIsDisplaying3D' | 'intensity' | 'setIntensity' | 'blackWhitePoint' | 'setBlackWhitePoint'
>

export type GeneralSectionProps = Pick<
    NoiseSettings,
    'noiseType' | 'setNoiseType' | 'seed' | 'setSeed' | 'frequency' | 'setFrequency'
>

export type FractalSectionProps = Pick<
    NoiseSettings,
    | 'fractalType'
    | 'setFractalType'
    | 'fractalOctaves'
    | 'setFractalOctaves'
    | 'fractalLacunarity'
    | 'setFractalLacunarity'
    | 'fractalGain'
    | 'setFractalGain'
    | 'fractalWeightedStrength'
    | 'setFractalWeightedStrength'
    | 'fractalPingPongStrength'
    | 'setFractalPingPongStrength'
>

export type CellularSectionProps = Pick<
    NoiseSettings,
    | 'noiseType'
    | 'cellularDistanceFunction'
    | 'setCellularDistanceFunction'
    | 'cellularReturnType'
    | 'setCellularReturnType'
    | 'cellularJitter'
    | 'setCellularJitter'
>

export type DomainWarpSectionProps = Pick<
    NoiseSettings,
    | 'domainWarpType'
    | 'setDomainWarpType'
    | 'domainWarpAmp'
    | 'setDomainWarpAmp'
    | 'domainWarpSeed'
    | 'setDomainWarpSeed'
    | 'domainWarpFrequency'
    | 'setDomainWarpFrequency'
>

export type DomainWarpFractalSectionProps = Pick<
    NoiseSettings,
    | 'domainWarpType'
    | 'domainWarpFractalType'
    | 'setDomainWarpFractalType'
    | 'domainWarpFractalOctaves'
    | 'setDomainWarpFractalOctaves'
    | 'domainWarpFractalLacunarity'
    | 'setDomainWarpFractalLacunarity'
    | 'domainWarpFractalGain'
    | 'setDomainWarpFractalGain'
>
