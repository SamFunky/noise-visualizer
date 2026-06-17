import { useMemo } from "react"
import FastNoiseLite from "fastnoise-lite"
import type { DomainWarpConfig, NoiseConfig } from "./types"

export function useFastNoise(noiseConfig: NoiseConfig, domainWarpConfig: DomainWarpConfig) {
    const noise = useMemo(() => {
        const finalNoise = new FastNoiseLite()
        finalNoise.SetNoiseType(noiseConfig.type)
        finalNoise.SetFrequency(noiseConfig.frequency)
        finalNoise.SetFractalType(noiseConfig.fractal ?? FastNoiseLite.FractalType.None)
        finalNoise.SetSeed(noiseConfig.seed)
        finalNoise.SetFractalOctaves(noiseConfig.fractalOctaves)
        finalNoise.SetFractalLacunarity(noiseConfig.fractalLacunarity)
        finalNoise.SetFractalGain(noiseConfig.fractalGain)
        finalNoise.SetFractalWeightedStrength(noiseConfig.fractalWeightedStrength)
        finalNoise.SetFractalPingPongStrength(noiseConfig.fractalPingPongStrength)
        finalNoise.SetCellularDistanceFunction(noiseConfig.cellularDistanceFunction)
        finalNoise.SetCellularReturnType(noiseConfig.cellularReturnType)
        finalNoise.SetCellularJitter(noiseConfig.cellularJitter)

        return finalNoise
    }, [
        noiseConfig.frequency,
        noiseConfig.type,
        noiseConfig.fractal,
        noiseConfig.seed,
        noiseConfig.fractalOctaves,
        noiseConfig.fractalLacunarity,
        noiseConfig.fractalGain,
        noiseConfig.fractalWeightedStrength,
        noiseConfig.fractalPingPongStrength,
        noiseConfig.cellularDistanceFunction,
        noiseConfig.cellularReturnType,
        noiseConfig.cellularJitter,
    ])

    const warpNoise = useMemo(() => {
        const finalWarpNoise = new FastNoiseLite()
        finalWarpNoise.SetSeed(domainWarpConfig.domainWarpSeed)
        finalWarpNoise.SetFrequency(domainWarpConfig.domainWarpFrequency)
        finalWarpNoise.SetFractalType(domainWarpConfig.domainWarpFractalType ?? FastNoiseLite.FractalType.None)
        finalWarpNoise.SetFractalOctaves(domainWarpConfig.domainWarpFractalOctaves)
        finalWarpNoise.SetFractalLacunarity(domainWarpConfig.domainWarpFractalLacunarity)
        finalWarpNoise.SetFractalGain(domainWarpConfig.domainWarpFractalGain)

        if (domainWarpConfig.domainWarpType != null) {
            finalWarpNoise.SetDomainWarpType(domainWarpConfig.domainWarpType)
        }

        finalWarpNoise.SetDomainWarpAmp(domainWarpConfig.domainWarpAmp)

        return finalWarpNoise
    }, [
        domainWarpConfig.domainWarpType,
        domainWarpConfig.domainWarpAmp,
        domainWarpConfig.domainWarpSeed,
        domainWarpConfig.domainWarpFrequency,
        domainWarpConfig.domainWarpFractalType,
        domainWarpConfig.domainWarpFractalOctaves,
        domainWarpConfig.domainWarpFractalLacunarity,
        domainWarpConfig.domainWarpFractalGain,
    ])

    return { noise, warpNoise }
}
