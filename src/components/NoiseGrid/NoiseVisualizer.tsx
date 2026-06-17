import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { NoiseGrid3D } from './NoiseGrid3D'
import { NoiseGrid2D } from './NoiseGrid2D'
import type { NoiseVisualizerProps } from './types'
import { useFastNoise } from './useFastNoise'



export function NoiseVisualizer({ intensity, isDisplaying3D, ...config }: NoiseVisualizerProps) {
    const {
        frequency, seed, type, fractal, fractalOctaves, fractalLacunarity, fractalGain,
        fractalWeightedStrength, fractalPingPongStrength,
        cellularDistanceFunction, cellularReturnType, cellularJitter,
        domainWarpType, domainWarpAmp, domainWarpSeed, domainWarpFrequency,
        domainWarpFractalType, domainWarpFractalOctaves, domainWarpFractalLacunarity, domainWarpFractalGain,

    } = config
    const noiseConfig = {
        frequency, seed, type, fractal, fractalOctaves, fractalLacunarity, fractalGain,
        fractalWeightedStrength, fractalPingPongStrength,
        cellularDistanceFunction, cellularReturnType, cellularJitter,
    }
    const domainWarpConfig = {
        domainWarpType, domainWarpAmp, domainWarpSeed, domainWarpFrequency,
        domainWarpFractalType, domainWarpFractalOctaves, domainWarpFractalLacunarity, domainWarpFractalGain,

    }
    const { noise, warpNoise } = useFastNoise(noiseConfig, domainWarpConfig)
    const gridProps = { ...config, noise, warpNoise }
    const noiseGrid = isDisplaying3D
        ? <NoiseGrid3D {...gridProps} />
        : <NoiseGrid2D {...gridProps} intensity={intensity} />

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