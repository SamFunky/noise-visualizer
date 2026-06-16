import { lerp } from 'three/src/math/MathUtils.js'
import { sampleNoise } from './sampleNoise'
import type { FastNoiseLiteInstace } from './types'

const LOW = { r: 237, g: 64, b: 90 } // coral red/orange
const HIGH = { r: 108, g: 207, b: 246 } // light blue

export function noiseColor(
    domainWarpAmp: number, 
    noise: FastNoiseLiteInstace, 
    x: number, 
    y: number
): string {
    const pointNoiseValue = (sampleNoise(domainWarpAmp, noise, x, y) + 1) / 2 // normalize the value
    // interpolated channels
    const r = Math.round(lerp(LOW.r, HIGH.r, pointNoiseValue))
    const g = Math.round(lerp(LOW.g, HIGH.g, pointNoiseValue))
    const b = Math.round(lerp(LOW.b, HIGH.b, pointNoiseValue))

    return(`rgb(${r}, ${g}, ${b})`)
}

