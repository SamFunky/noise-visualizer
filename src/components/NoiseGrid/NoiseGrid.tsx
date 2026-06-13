import { useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import FastNoiseLite from 'fastnoise-lite'
import { lerp } from 'three/src/math/MathUtils.js'

export function GridCanvas() {
    const radius = .05
    const quality = 8
    const rows = 40
    const cols = 40
    const spacing = .3
    const gridElements = []
    const totalWidth = (cols - 1) * spacing
    const totalHeight = (cols - 1) * spacing

    const noiseFrequency = .05
    const noiseIntensity = 3.0
    const noiseType = FastNoiseLite.NoiseType.OpenSimplex2
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

            gridElements.push(
                <mesh key={'${x}-${y}'} position={[posX, posY, posZ]}>
                    <sphereGeometry args={[lerp(radius/4, radius, pointNoiseValue), Math.round(quality * pointNoiseValue), Math.round(quality * pointNoiseValue)]} />
                    <meshStandardMaterial emissive={`rgb(${r}, ${g}, ${b})`} emissiveIntensity={1}/>
                </mesh>
            )
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
                <OrbitControls />
                <ambientLight intensity={0.3} />
                {gridElements}
            </Canvas>
        </div>
    )
}

createRoot(document.getElementById('root')).render(<GridCanvas />)