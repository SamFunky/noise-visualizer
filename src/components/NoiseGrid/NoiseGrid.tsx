import { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import FastNoiseLite from 'fastnoise-lite'
import { lerp } from 'three/src/math/MathUtils.js'

type NoiseType = typeof FastNoiseLite.NoiseType[keyof typeof FastNoiseLite.NoiseType]

type GridCanvasProps = {
    frequency: number,
    intensity: number,
    type: NoiseType
}

export function GridCanvas({ frequency, intensity, type }: GridCanvasProps) {
    const radius = .1
    const quality = 4
    const rows = 60
    const cols = 60
    const spacing = .3
    const maskRadius = (rows * spacing) / 2
    const gridElements = []
    const totalWidth = (cols - 1) * spacing
    const totalHeight = (cols - 1) * spacing

    const noiseFrequency = frequency
    const noiseIntensity = intensity
    const noiseType = type
    const noise = useMemo(() => {
        const finalNoise = new FastNoiseLite()
        finalNoise.SetNoiseType(noiseType)
        finalNoise.SetFrequency(noiseFrequency)
        return finalNoise
    }, [noiseFrequency, noiseType])

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            const posX = (x * spacing) - (totalWidth/2)
            const posY = (y * spacing) - (totalHeight/2)
            const pointNoiseValue = (noise.GetNoise(x, y) + 1) / 2 // normalize the value
            const posZ = pointNoiseValue * noiseIntensity
            // coral red/orange
            const r1 = 237
            const g1 = 64
            const b1 = 90
            // light blue
            const r2 = 108
            const g2 = 207
            const b2 = 246
            // interpolated channels
            const r = Math.round(lerp(r1, r2, pointNoiseValue))
            const g = Math.round(lerp(g1, g2, pointNoiseValue))
            const b = Math.round(lerp(b1, b2, pointNoiseValue))

            const shrinkStart = maskRadius * 0.7
            const distanceSquared = Math.pow(posX, 2) + Math.pow(posY, 2)

            if (distanceSquared < Math.pow(maskRadius, 2)) {
                const currentDistance = Math.sqrt(distanceSquared)
                let edgeScaleFactor = 1

                // checks if the current dot position is past the shrinking threshold.
                if (currentDistance > shrinkStart) {
                    const rimTotalWidth = maskRadius - shrinkStart
                    const distanceIntoRim = currentDistance - shrinkStart
                    const rimProgress = distanceIntoRim / rimTotalWidth
                    
                    edgeScaleFactor = 1 - rimProgress
                }

                edgeScaleFactor = Math.max(0, Math.min(1, edgeScaleFactor)) // just in case

                const baseNoiseSize = lerp(radius / 4, radius, pointNoiseValue)
                const dotSize = lerp(0, baseNoiseSize, edgeScaleFactor)
                const dotQuality = Math.max(3, Math.round(quality * pointNoiseValue))

                gridElements.push(
                    <mesh key={`${x}-${y}`} position={[posX, posY, posZ]}>
                        <sphereGeometry args={[dotSize, dotQuality, dotQuality]} />
                        <meshStandardMaterial emissive={`rgb(${r}, ${g}, ${b})`} emissiveIntensity={1}/>
                    </mesh>
                )
            }
            
        }
    }

    return (
        <div id="canvas-container" style={{
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh'
        }}>
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, -15, 8]}/>
                <OrbitControls target={[0, 0, -1.5]}/>
                <ambientLight intensity={0.3} />
                {gridElements}
            </Canvas>
        </div>
    )
}