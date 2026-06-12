import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'

export function GridCanvas() {
    return (
        <div id="canvas-container" style={{
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh'
        }}>
            <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial />
                </mesh>
            </Canvas>
        </div>
    )
}

createRoot(document.getElementById('root')).render(<GridCanvas />)