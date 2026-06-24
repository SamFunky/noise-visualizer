import { ControlSection } from '../ControlSection'
import { ControlSlider } from '../ControlSlider'
import { ControlSelect } from '../ControlSelect'
import { DOMAIN_WARP_FRACTAL_TYPE_OPTIONS } from '../noiseOptions'
import type { DomainWarpFractalSectionProps } from '../types'

export function DomainWarpFractalSection({
    domainWarpType,
    domainWarpFractalType,
    setDomainWarpFractalType,
    domainWarpFractalOctaves,
    setDomainWarpFractalOctaves,
    domainWarpFractalLacunarity,
    setDomainWarpFractalLacunarity,
    domainWarpFractalGain,
    setDomainWarpFractalGain,
}: DomainWarpFractalSectionProps) {
    const hasDomainWarp = domainWarpType != null
    const hasDomainWarpFractal = domainWarpFractalType != null
    const disabled = !hasDomainWarp || !hasDomainWarpFractal

    return (
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
                disabled={disabled}
            />
            <ControlSlider
                id="slider-domain-warp-fractal-lacunarity"
                label="Lacunarity"
                value={domainWarpFractalLacunarity}
                onValueChange={setDomainWarpFractalLacunarity}
                min={1.0}
                max={4.0}
                step={0.1}
                disabled={disabled}
            />
            <ControlSlider
                id="slider-domain-warp-fractal-gain"
                label="Gain"
                value={domainWarpFractalGain}
                onValueChange={setDomainWarpFractalGain}
                min={0.0}
                max={1.0}
                step={0.01}
                disabled={disabled}
            />
        </ControlSection>
    )
}
