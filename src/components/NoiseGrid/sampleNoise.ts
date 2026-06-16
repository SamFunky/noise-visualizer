import { Vector2 } from 'fastnoise-lite'
import type { FastNoiseLiteInstace } from './types'

export function sampleNoise(
    domainWarpAmp: number, 
    noise: FastNoiseLiteInstace, 
    x: number, 
    y: number
): number {
    if (domainWarpAmp > 0) {
        const coord = new Vector2( x, y )
        noise.DomainWrap(coord)
        return noise.GetNoise(coord.x, coord.y)
    }
    return noise.GetNoise(x, y)
}
