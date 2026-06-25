import { sampleNoise } from "./sampleNoise"
import { getDisplayNoiseValue } from "./normalizeNoise"
import type { NoiseGrid3DProps } from "./types"
import { lerp } from "three/src/math/MathUtils.js"
import { pointNeighborCheck } from "./pointNeighborCheck"
import { noiseColor3D } from "./noiseColor3D"

export function NoiseGrid3D(config: NoiseGrid3DProps) {
    const radius = .1
    const quality = 4
    const rows = 60
    const spacing = .3
    const maskRadius = (rows * spacing) / 2
    const gridElements = []
    const totalWidth = (rows - 1) * spacing
    const pointValueCutoff = .5

    for (let x = 0; x < rows; x++) {
        const posX = (x * spacing) - (totalWidth/2)

        for (let y = 0; y < rows; y++) {
            const posY = (y * spacing) - (totalWidth/2)

            for (let z = 0; z < rows; z++) {
                const posZ = (z * spacing) - (totalWidth/2)
                const pointNoiseValue = getDisplayNoiseValue(
                    sampleNoise(config, config.noise, config.warpNoise, x, y, z),
                    config.blackWhitePoint
                )

                const shrinkStart = maskRadius * 0.85
                const distanceSquared = Math.pow(posX, 2) + Math.pow(posY, 2) + Math.pow(posZ, 2)

                if (distanceSquared < Math.pow(maskRadius, 2) && pointNoiseValue > pointValueCutoff && pointNeighborCheck({ ...config, threshold: pointValueCutoff, x, y, z })) {
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
                        <mesh key={`${x}-${y}-${z}`} position={[posX, posY, posZ]}>
                            <sphereGeometry args={[dotSize, dotQuality, dotQuality]} />
                            <meshStandardMaterial emissive={noiseColor3D(distanceSquared, Math.pow(maskRadius, 2))} emissiveIntensity={1}/>
                        </mesh>
                    )
                }
            }
        }
    }
    return gridElements
}