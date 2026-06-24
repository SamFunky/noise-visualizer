import { ControlSection } from '../ControlSection'
import { ControlSlider } from '../ControlSlider'
import { ControlSelect } from '../ControlSelect'
import { NOISE_TYPE_OPTIONS } from '../noiseOptions'
import type { GeneralSectionProps } from '../types'

export function GeneralSection({
    noiseType,
    setNoiseType,
    seed,
    setSeed,
    frequency,
    setFrequency,
}: GeneralSectionProps) {
    return (
        <ControlSection title="General">
            <ControlSelect
                label="Noise Type"
                value={noiseType}
                onValueChange={setNoiseType}
                options={NOISE_TYPE_OPTIONS}
            />
            <ControlSlider
                id="slider-seed"
                label="Seed"
                value={seed}
                onValueChange={setSeed}
                min={0}
                max={999}
                step={1}
            />
            <ControlSlider
                id="slider-frequency"
                label="Frequency"
                value={frequency}
                onValueChange={setFrequency}
                min={0.01}
                max={0.5}
                step={0.01}
            />
        </ControlSection>
    )
}
