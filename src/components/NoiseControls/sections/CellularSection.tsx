import FastNoiseLite from 'fastnoise-lite'
import { ControlSection } from '../ControlSection'
import { ControlSlider } from '../ControlSlider'
import { ControlSelect } from '../ControlSelect'
import { CELLULAR_DISTANCE_OPTIONS, CELLULAR_RETURN_OPTIONS } from '../noiseOptions'
import type { CellularSectionProps } from '../types'

export function CellularSection({
    noiseType,
    cellularDistanceFunction,
    setCellularDistanceFunction,
    cellularReturnType,
    setCellularReturnType,
    cellularJitter,
    setCellularJitter,
}: CellularSectionProps) {
    const isCellular = noiseType === FastNoiseLite.NoiseType.Cellular

    return (
        <ControlSection title="Cellular">
            <ControlSelect
                label="Distance Function"
                value={cellularDistanceFunction}
                onValueChange={setCellularDistanceFunction}
                options={CELLULAR_DISTANCE_OPTIONS}
                disabled={!isCellular}
            />
            <ControlSelect
                label="Return Type"
                value={cellularReturnType}
                onValueChange={setCellularReturnType}
                options={CELLULAR_RETURN_OPTIONS}
                disabled={!isCellular}
            />
            <ControlSlider
                id="slider-cellular-jitter"
                label="Jitter"
                value={cellularJitter}
                onValueChange={setCellularJitter}
                min={0.0}
                max={2.0}
                step={0.01}
                disabled={!isCellular}
            />
        </ControlSection>
    )
}
