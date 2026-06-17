import { lerp } from 'three/src/math/MathUtils.js'
import { sampleNoise } from './sampleNoise'
import type { DomainWarpConfig, FastNoiseLiteInstace } from './types'

const LOW = { r: 237, g: 64, b: 90 }
const HIGH = { r: 108, g: 207, b: 246 }

export function noiseColor2D(
    config: DomainWarpConfig,
    noise: FastNoiseLiteInstace,
    warpNoise: FastNoiseLiteInstace,
    x: number,
    y: number
): string {
    const pointNoiseValue = (sampleNoise(config, noise, warpNoise, x, y) + 1) / 2
    const r = Math.round(lerp(LOW.r, HIGH.r, pointNoiseValue))
    const g = Math.round(lerp(LOW.g, HIGH.g, pointNoiseValue))
    const b = Math.round(lerp(LOW.b, HIGH.b, pointNoiseValue))

    return `rgb(${r}, ${g}, ${b})`
}
