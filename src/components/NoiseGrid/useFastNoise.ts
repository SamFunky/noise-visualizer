import { useMemo } from "react"
import FastNoiseLite from "fastnoise-lite"
import type { NoiseConfig } from "./types"

export function useFastNoise(config: NoiseConfig) {
    const noise = useMemo(() => {
        const finalNoise = new FastNoiseLite()
        finalNoise.SetNoiseType(config.type)
        finalNoise.SetFrequency(config.frequency)
        finalNoise.SetFractalType(config.fractal)
        finalNoise.SetSeed(config.seed)
        finalNoise.SetFractalOctaves(config.fractalOctaves)
        finalNoise.SetFractalLacunarity(config.fractalLacunarity)
        finalNoise.SetFractalGain(config.fractalGain)
        finalNoise.SetDomainWarpType(config.domainWarpType)
        finalNoise.SetDomainWarpAmp(config.domainWarpAmp)
        
        return finalNoise
    }, [config.frequency, config.type, config.fractal, config.seed, config.fractalOctaves, config.fractalLacunarity, config.fractalGain, config.domainWarpType, config.domainWarpAmp])

    return noise
}