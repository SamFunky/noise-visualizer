import { lerp } from 'three/src/math/MathUtils.js'

const LOW = { r: 237, g: 64, b: 90 } // coral red/orange
const HIGH = { r: 108, g: 207, b: 246 } // light blue

export function noiseColor3D(
    pointDistance: number,
    maxDistance: number,
    x: number, 
    y: number,
    z: number
): string {
    const distanceToCenterFactor = pointDistance/maxDistance
    // interpolated channels
    const r = Math.round(lerp(HIGH.r, LOW.r, distanceToCenterFactor))
    const g = Math.round(lerp(HIGH.g, LOW.g, distanceToCenterFactor))
    const b = Math.round(lerp(HIGH.b, LOW.b, distanceToCenterFactor))

    return(`rgb(${r}, ${g}, ${b})`)
}

