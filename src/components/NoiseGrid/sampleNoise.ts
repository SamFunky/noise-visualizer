import { Vector3, Vector2 } from 'fastnoise-lite'
import type { FastNoiseLiteInstace } from './types'

export function sampleNoise(
    domainWarpAmp: number, 
    noise: FastNoiseLiteInstace, 
    x: number, 
    y: number,
    z?: number
): number {
    if (z != null) {
        if (domainWarpAmp > 0) {
            const coord = new Vector3( x, y, z )
            noise.DomainWrap(coord)
            return noise.GetNoise(coord.x, coord.y, coord.z)
        }
        return noise.GetNoise(x, y, z)
    } else {
        if (domainWarpAmp > 0) {
            const coord = new Vector2( x, y )
            noise.DomainWrap(coord)
            return noise.GetNoise(coord.x, coord.y)
        }
        return noise.GetNoise(x, y)
    }
}
