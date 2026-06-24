import './NoiseControls.css'
import { ThemeProvider } from '@/components/theme-provider'
import type { NoiseSettings } from '@/hooks/useNoiseSettings'
import { DisplaySection } from './sections/DisplaySection'
import { GeneralSection } from './sections/GeneralSection'
import { FractalSection } from './sections/FractalSection'
import { CellularSection } from './sections/CellularSection'
import { DomainWarpSection } from './sections/DomainWarpSection'
import { DomainWarpFractalSection } from './sections/DomainWarpFractalSection'

export function NoiseControlPanel(props: NoiseSettings) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="noise-controls custom-scrollbar">
                <DisplaySection {...props} />
                <GeneralSection {...props} />
                <FractalSection {...props} />
                <CellularSection {...props} />
                <DomainWarpSection {...props} />
                <DomainWarpFractalSection {...props} />
            </div>
        </ThemeProvider>
    )
}
