import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { NoiseGrid3D } from './NoiseGrid3D'
import { NoiseGrid2D } from './NoiseGrid2D'
import type { NoiseVisualizerProps } from './types'
import { useFastNoise } from './useFastNoise'

export function NoiseVisualizer({intensity, isDisplaying3D, ...noiseConfig}: NoiseVisualizerProps) {
    const noise = useFastNoise(noiseConfig)
    const noiseGrid = isDisplaying3D ?  <NoiseGrid3D {...noiseConfig} noise={noise} /> : <NoiseGrid2D {...noiseConfig} intensity={intensity} noise={noise} />

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
                {noiseGrid}
            </Canvas>
        </div>
    )
}