import { sampleNoise } from "./sampleNoise"
import { getDisplayNoiseValue } from "./normalizeNoise"
import { noiseColor2D } from "./noiseColor2D"
import type { NoiseGrid2DProps } from './types'
import { lerp } from "three/src/math/MathUtils.js"

export function NoiseGrid2D(config: NoiseGrid2DProps) {
    const radius = .1
    const quality = 4
    const rows = 60
    const spacing = .3
    const maskRadius = (rows * spacing) / 2
    const gridElements = []
    const totalWidth = (rows - 1) * spacing
    const totalHeight = (rows - 1) * spacing

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < rows; x++) {
            const posX = (x * spacing) - (totalWidth/2)
            const posY = (y * spacing) - (totalHeight/2)
            const pointNoiseValue = getDisplayNoiseValue(
                sampleNoise(config, config.noise, config.warpNoise, x, y),
                config.blackWhitePoint
            )
            const posZ = pointNoiseValue * config.intensity[0]

            const shrinkStart = maskRadius * 0.7
            const distanceSquared = Math.pow(posX, 2) + Math.pow(posY, 2)

            if (distanceSquared < Math.pow(maskRadius, 2)) {
                const currentDistance = Math.sqrt(distanceSquared)
                let edgeScaleFactor = 1

                if (currentDistance > shrinkStart) {
                    const rimTotalWidth = maskRadius - shrinkStart
                    const distanceIntoRim = currentDistance - shrinkStart
                    const rimProgress = distanceIntoRim / rimTotalWidth
                    
                    edgeScaleFactor = 1 - rimProgress
                }

                edgeScaleFactor = Math.max(0, Math.min(1, edgeScaleFactor))

                const baseNoiseSize = lerp(radius / 4, radius, pointNoiseValue)
                const dotSize = lerp(0, baseNoiseSize, edgeScaleFactor)
                const dotQuality = Math.max(3, Math.round(quality * pointNoiseValue))

                gridElements.push(
                    <mesh key={`${x}-${y}`} position={[posX, posY, posZ]}>
                        <sphereGeometry args={[dotSize, dotQuality, dotQuality]} />
                        <meshStandardMaterial emissive={noiseColor2D(pointNoiseValue)} emissiveIntensity={1}/>
                    </mesh>
                )
            }
            
        }
    }
    return gridElements
}