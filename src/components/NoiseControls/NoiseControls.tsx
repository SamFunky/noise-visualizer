import './NoiseControls.css'
import { ThemeProvider } from '@/components/theme-provider'
import FastNoiseLite from 'fastnoise-lite'
import type { NoiseSettings } from '@/hooks/useNoiseSettings'
import { Field } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { ControlSection } from './ControlSection'
import { ControlSlider } from './ControlSlider'
import { ControlSelect } from './ControlSelect'
import {
    CELLULAR_DISTANCE_OPTIONS,
    CELLULAR_RETURN_OPTIONS,
    DOMAIN_WARP_FRACTAL_TYPE_OPTIONS,
    DOMAIN_WARP_TYPE_OPTIONS,
    FRACTAL_TYPE_OPTIONS,
    NOISE_TYPE_OPTIONS,
} from './noiseOptions'

export function NoiseControlPanel({
    frequency,
    setFrequency,
    intensity,
    setIntensity,
    seed,
    setSeed,
    noiseType,
    setNoiseType,
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
    cellularDistanceFunction,
    setCellularDistanceFunction,
    cellularReturnType,
    setCellularReturnType,
    cellularJitter,
    setCellularJitter,
    domainWarpType,
    setDomainWarpType,
    domainWarpAmp,
    setDomainWarpAmp,
    domainWarpSeed,
    setDomainWarpSeed,
    domainWarpFrequency,
    setDomainWarpFrequency,
    domainWarpFractalType,
    setDomainWarpFractalType,
    domainWarpFractalOctaves,
    setDomainWarpFractalOctaves,
    domainWarpFractalLacunarity,
    setDomainWarpFractalLacunarity,
    domainWarpFractalGain,
    setDomainWarpFractalGain,
    isDisplaying3D,
    setIsDisplaying3D,
}: NoiseSettings) {
    const isCellular = noiseType === FastNoiseLite.NoiseType.Cellular
    const hasFractal = fractalType != null
    const isPingPong = fractalType === FastNoiseLite.FractalType.PingPong
    const hasDomainWarp = domainWarpType != null
    const hasDomainWarpFractal = domainWarpFractalType != null

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="noise-controls custom-scrollbar">
                <ControlSection title="Display">
                    <Field className="noise-controls-label">
                        <Label htmlFor="view-toggle">View</Label>
                        <ButtonGroup>
                            <Button variant={isDisplaying3D ? 'ghost' : 'outline'} onClick={() => setIsDisplaying3D(false)}>2D</Button>
                            <Button variant={isDisplaying3D ? 'outline' : 'ghost'} onClick={() => setIsDisplaying3D(true)}>3D</Button>
                        </ButtonGroup>
                    </Field>
                    <ControlSlider
                        id="slider-intensity"
                        label="Intensity"
                        value={intensity}
                        onValueChange={setIntensity}
                        min={0.01}
                        max={4.0}
                        step={0.01}
                    />
                </ControlSection>

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

                <ControlSection title="Domain Warp">
                    <ControlSelect
                        label="Domain Warp Type"
                        value={domainWarpType}
                        onValueChange={setDomainWarpType}
                        options={DOMAIN_WARP_TYPE_OPTIONS}
                        allowNone
                    />
                    <ControlSlider
                        id="slider-domain-warp-amp"
                        label="Amplitude"
                        value={domainWarpAmp}
                        onValueChange={setDomainWarpAmp}
                        min={0.0}
                        max={10.0}
                        step={0.01}
                        disabled={!hasDomainWarp}
                    />
                    <ControlSlider
                        id="slider-domain-warp-seed"
                        label="Seed"
                        value={domainWarpSeed}
                        onValueChange={setDomainWarpSeed}
                        min={1}
                        max={9999}
                        step={1}
                        disabled={!hasDomainWarp}
                    />
                    <ControlSlider
                        id="slider-domain-warp-frequency"
                        label="Frequency"
                        value={domainWarpFrequency}
                        onValueChange={setDomainWarpFrequency}
                        min={0.001}
                        max={1.0}
                        step={0.001}
                        disabled={!hasDomainWarp}
                    />
                </ControlSection>

                <ControlSection title="Domain Warp Fractal">
                    <ControlSelect
                        label="Domain Warp Fractal Type"
                        value={domainWarpFractalType}
                        onValueChange={setDomainWarpFractalType}
                        options={DOMAIN_WARP_FRACTAL_TYPE_OPTIONS}
                        allowNone
                        disabled={!hasDomainWarp}
                    />
                    <ControlSlider
                        id="slider-domain-warp-fractal-octaves"
                        label="Octaves"
                        value={domainWarpFractalOctaves}
                        onValueChange={setDomainWarpFractalOctaves}
                        min={1}
                        max={10}
                        step={1}
                        disabled={!hasDomainWarp || !hasDomainWarpFractal}
                    />
                    <ControlSlider
                        id="slider-domain-warp-fractal-lacunarity"
                        label="Lacunarity"
                        value={domainWarpFractalLacunarity}
                        onValueChange={setDomainWarpFractalLacunarity}
                        min={1.0}
                        max={4.0}
                        step={0.1}
                        disabled={!hasDomainWarp || !hasDomainWarpFractal}
                    />
                    <ControlSlider
                        id="slider-domain-warp-fractal-gain"
                        label="Gain"
                        value={domainWarpFractalGain}
                        onValueChange={setDomainWarpFractalGain}
                        min={0.0}
                        max={1.0}
                        step={0.01}
                        disabled={!hasDomainWarp || !hasDomainWarpFractal}
                    />
                </ControlSection>
            </div>
        </ThemeProvider>
    )
}
