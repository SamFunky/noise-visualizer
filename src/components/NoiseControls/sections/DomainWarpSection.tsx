import { ControlSection } from '../ControlSection'
import { ControlSlider } from '../ControlSlider'
import { ControlSelect } from '../ControlSelect'
import { DOMAIN_WARP_TYPE_OPTIONS } from '../noiseOptions'
import type { DomainWarpSectionProps } from '../types'

export function DomainWarpSection({
    domainWarpType,
    setDomainWarpType,
    domainWarpAmp,
    setDomainWarpAmp,
    domainWarpSeed,
    setDomainWarpSeed,
    domainWarpFrequency,
    setDomainWarpFrequency,
}: DomainWarpSectionProps) {
    const hasDomainWarp = domainWarpType != null

    return (
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
    )
}
