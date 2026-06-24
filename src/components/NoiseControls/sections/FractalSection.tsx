import FastNoiseLite from 'fastnoise-lite'
import { ControlSection } from '../ControlSection'
import { ControlSlider } from '../ControlSlider'
import { ControlSelect } from '../ControlSelect'
import { FRACTAL_TYPE_OPTIONS } from '../noiseOptions'
import type { FractalSectionProps } from '../types'

export function FractalSection({
    fractalType,
    setFractalType,
    fractalOctaves,
    setFractalOctaves,
    fractalLacunarity,
    setFractalLacunarity,
    fractalGain,
    setFractalGain,
    fractalWeightedStrength,
    setFractalWeightedStrength,
    fractalPingPongStrength,
    setFractalPingPongStrength,
}: FractalSectionProps) {
    const hasFractal = fractalType != null
    const isPingPong = fractalType === FastNoiseLite.FractalType.PingPong

    return (
        <ControlSection title="Fractal">
            <ControlSelect
                label="Fractal Type"
                value={fractalType}
                onValueChange={setFractalType}
                options={FRACTAL_TYPE_OPTIONS}
                allowNone
            />
            <ControlSlider
                id="slider-fractal-octaves"
                label="Octaves"
                value={fractalOctaves}
                onValueChange={setFractalOctaves}
                min={1}
                max={10}
                step={1}
                disabled={!hasFractal}
            />
            <ControlSlider
                id="slider-fractal-lacunarity"
                label="Lacunarity"
                value={fractalLacunarity}
                onValueChange={setFractalLacunarity}
                min={1.0}
                max={4.0}
                step={0.1}
                disabled={!hasFractal}
            />
            <ControlSlider
                id="slider-fractal-gain"
                label="Gain"
                value={fractalGain}
                onValueChange={setFractalGain}
                min={0.0}
                max={1.0}
                step={0.01}
                disabled={!hasFractal}
            />
            <ControlSlider
                id="slider-fractal-weighted-strength"
                label="Weighted Strength"
                value={fractalWeightedStrength}
                onValueChange={setFractalWeightedStrength}
                min={0.0}
                max={1.0}
                step={0.01}
                disabled={!hasFractal}
            />
            <ControlSlider
                id="slider-fractal-ping-pong-strength"
                label="Ping Pong Strength"
                value={fractalPingPongStrength}
                onValueChange={setFractalPingPongStrength}
                min={0.0}
                max={4.0}
                step={0.1}
                disabled={!isPingPong}
            />
        </ControlSection>
    )
}
