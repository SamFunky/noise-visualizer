import type { pointNeighborCheckProps } from "./types"
import { sampleNoise } from "./sampleNoise"

export function pointNeighborCheck(config: pointNeighborCheckProps): boolean {
    const neighborOffset = [
        { x: 0, y: 1, z: 0 },
        { x: 0, y: -1, z: 0 },
        { x: 1, y: 0, z: 0 },
        { x: -1, y: 0, z: 0 },
        { x: 0, y: 0, z: 1 },
        { x: 0, y: 0, z: -1 }
    ]
    
    for (const offset of neighborOffset) {
        if (((sampleNoise(
            config,
            config.noise,
            config.warpNoise,
            config.x + offset.x,
            config.y + offset.y,
            config.z + offset.z
        ) + 1) / 2) < config.threshold) return true
    }

    return false
}
