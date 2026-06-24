import './App.css'
import { NoiseControlPanel } from './components/NoiseControls/NoiseControls'
import { NoiseVisualizer } from './components/NoiseGrid/NoiseVisualizer'
import { useNoiseSettings } from './hooks/useNoiseSettings'

function App() {
    const { visualizerProps, ...controlProps } = useNoiseSettings()

    return (
        <div>
            <NoiseControlPanel {...controlProps} />
            <NoiseVisualizer {...visualizerProps} />
        </div>
    )
}

export default App
