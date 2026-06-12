import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export function GridCanvas() {
    const radius = .05
    const quality = 8
    const rows = 40
    const cols = 40
    const spacing = .3
    const gridElements = []
    const totalWidth = (cols - 1) * spacing
    const totalHeight = (cols - 1) * spacing

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            const posX = (x * spacing) - (totalWidth/2)
            const posY = (y * spacing) - (totalHeight/2)
            const posZ = 0

            gridElements.push(
                <mesh key={'${x}-${y}'} position={[posX, posY, posZ]}>
                    <sphereGeometry args={[radius, quality, quality]} />
                    <meshStandardMaterial emissive={'#B8F1FF'} emissiveIntensity={1}/>
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