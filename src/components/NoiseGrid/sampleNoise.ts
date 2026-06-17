import { Vector3, Vector2 } from 'fastnoise-lite'
import type { DomainWarpConfig, FastNoiseLiteInstace } from './types'

export function isDomainWarpActive(config: Pick<DomainWarpConfig, 'domainWarpType' | 'domainWarpAmp'>): boolean {
    return config.domainWarpType != null && config.domainWarpAmp > 0
}

export function sampleNoise(
    config: DomainWarpConfig,
    noise: FastNoiseLiteInstace,
    warpNoise: FastNoiseLiteInstace,
    x: number,
    y: number,
    z?: number
): number {
    if (isDomainWarpActive(config)) {
        if (z != null) {
            const coord = new Vector3(x, y, z)
            warpNoise.DomainWrap(coord)
            return noise.GetNoise(coord.x, coord.y, coord.z)
        }

        const coord = new Vector2(x, y)
        warpNoise.DomainWrap(coord)
        return noise.GetNoise(coord.x, coord.y)
    }

    if (z != null) {
        return noise.GetNoise(x, y, z)
    }

    return noise.GetNoise(x, y)
}
