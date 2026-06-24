import './NoiseControls.css'
import { ThemeProvider } from "@/components/theme-provider"
import FastNoiseLite from 'fastnoise-lite'
import type {
    CellularDistanceFunction,
    CellularReturnType,
    DomainWarpFractalType,
    DomainWarpType,
    NoiseFractalType,
    NoiseType,
} from '../NoiseGrid/types'
import { Field, FieldLabel } from "@/components/ui/field"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

const NONE_OPTION_TEXT = 'None'

type NoiseControlProps = {
    frequency: number[]
    setFrequency: (value: number[]) => void
    intensity: number[]
    setIntensity: (value: number[]) => void
    seed: number[]
    setSeed: (value: number[]) => void
    noiseType: NoiseType
    setNoiseType: (value: NoiseType) => void
    fractalType: NoiseFractalType | null
    setFractalType: (value: NoiseFractalType | null) => void
    fractalOctaves: number[]
    setFractalOctaves: (value: number[]) => void
    fractalLacunarity: number[]
    setFractalLacunarity: (value: number[]) => void
    fractalGain: number[]
    setFractalGain: (value: number[]) => void
    fractalWeightedStrength: number[]
    setFractalWeightedStrength: (value: number[]) => void
    fractalPingPongStrength: number[]
    setFractalPingPongStrength: (value: number[]) => void
    cellularDistanceFunction: CellularDistanceFunction
    setCellularDistanceFunction: (value: CellularDistanceFunction) => void
    cellularReturnType: CellularReturnType
    setCellularReturnType: (value: CellularReturnType) => void
    cellularJitter: number[]
    setCellularJitter: (value: number[]) => void
    domainWarpType: DomainWarpType | null
    setDomainWarpType: (value: DomainWarpType | null) => void
    domainWarpAmp: number[]
    setDomainWarpAmp: (value: number[]) => void
    domainWarpSeed: number[]
    setDomainWarpSeed: (value: number[]) => void
    domainWarpFrequency: number[]
    setDomainWarpFrequency: (value: number[]) => void
    domainWarpFractalType: DomainWarpFractalType | null
    setDomainWarpFractalType: (value: DomainWarpFractalType | null) => void
    domainWarpFractalOctaves: number[]
    setDomainWarpFractalOctaves: (value: number[]) => void
    domainWarpFractalLacunarity: number[]
    setDomainWarpFractalLacunarity: (value: number[]) => void
    domainWarpFractalGain: number[]
    setDomainWarpFractalGain: (value: number[]) => void
    isDisplaying3D: boolean
    setIsDisplaying3D: (value: boolean) => void
}

export function NoiseControlPannel({
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
}: NoiseControlProps) {
    const isCellular = noiseType === FastNoiseLite.NoiseType.Cellular
    const hasFractal = fractalType != null
    const isPingPong = fractalType === FastNoiseLite.FractalType.PingPong
    const hasDomainWarp = domainWarpType != null
    const hasDomainWarpFractal = domainWarpFractalType != null

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">        
            <div className="noise-controls custom-scrollbar">
                <p className="noise-controls-section">Display</p>
                <Field className='noise-controls-label'>
                    <Label htmlFor="slider-intensity">View</Label>
                    <ButtonGroup>
                        <Button variant={isDisplaying3D ?  'ghost' : 'outline'} onClick={() => setIsDisplaying3D(false)}>2D</Button>
                        <Button variant={isDisplaying3D ?  'outline' : 'ghost'} onClick={() => setIsDisplaying3D(true)}>3D</Button>
                    </ButtonGroup>
                </Field>
                <div className="mx-auto grid w-full max-w-xs gap-3">
                    <div className="flex items-center justify-between gap-2 noise-controls-label">
                        <Label htmlFor="slider-intensity">Intensity</Label>
                        <span className="text-sm text-muted-foreground">
                        {intensity.join(", ")}
                        </span>
                    </div>
                    <Slider
                        id="slider-intensity"
                        defaultValue={intensity}
                        onValueChange={setIntensity}
                        min={0.01}
                        max={4.0}
                        step={0.01}
                    />
                </div>
                <p className="noise-controls-section">General</p>
                <Field className='noise-controls-label'>
                    <FieldLabel>Noise Type</FieldLabel>
                    <Select defaultValue={noiseType} onValueChange={(value) => setNoiseType(value)}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value={FastNoiseLite.NoiseType.OpenSimplex2}>OpenSimplex2</SelectItem>
                                <SelectItem value={FastNoiseLite.NoiseType.OpenSimplex2S}>OpenSimplex2S</SelectItem>
                                <SelectItem value={FastNoiseLite.NoiseType.Cellular}>Cellular</SelectItem>
                                <SelectItem value={FastNoiseLite.NoiseType.Perlin}>Perlin</SelectItem>
                                <SelectItem value={FastNoiseLite.NoiseType.ValueCubic}>ValueCubic</SelectItem>
                                <SelectItem value={FastNoiseLite.NoiseType.Value}>Value</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </Field>
                <div className="mx-auto grid w-full max-w-xs gap-3">
                    <div className="flex items-center justify-between gap-2 noise-controls-label">
                        <Label htmlFor="slider-demo-temperature">Seed</Label>
                        <span className="text-sm text-muted-foreground">
                        {seed.join(", ")}
                        </span>
                    </div>
                    <Slider
                        id="slider-seed"
                        defaultValue={seed}
                        onValueChange={setSeed}
                        min={0}
                        max={999}
                        step={1}
                    />
                </div>
                <div className="mx-auto grid w-full max-w-xs gap-3">
                    <div className="flex items-center justify-between gap-2 noise-controls-label">
                        <Label htmlFor="slider-demo-temperature">Frequency</Label>
                        <span className="text-sm text-muted-foreground">
                        {frequency.join(", ")}
                        </span>
                    </div>
                    <Slider
                        id="slider-frequency"
                        defaultValue={frequency}
                        onValueChange={setFrequency}
                        min={0.01}
                        max={0.5}
                        step={.01}
                    />
                </div>
                <p className="noise-controls-section">Fractal</p>
                <Field className='noise-controls-label'>
                    <FieldLabel>Fractal Type</FieldLabel>
                    <Select defaultValue={fractalType ?? NONE_OPTION_TEXT} onValueChange={(value) => setFractalType(value)}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value={NONE_OPTION_TEXT}>None</SelectItem>
                                <SelectItem value={FastNoiseLite.FractalType.FBm}>FBm</SelectItem>
                                <SelectItem value={FastNoiseLite.FractalType.Ridged}>Ridged</SelectItem>
                                <SelectItem value={FastNoiseLite.FractalType.PingPong}>PingPong</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </Field>
                <div className="mx-auto grid w-full max-w-xs gap-3">
                    <div className={`flex items-center justify-between gap-2 noise-controls-label ${!hasFractal ? 'is-disabled' : ''}`}>
                        <Label htmlFor="slider-fractal-octaves">Octaves</Label>
                        <span className="text-sm text-muted-foreground">
                        {fractalOctaves.join(", ")}
                        </span>
                    </div>
                    <Slider
                        id="slider-fractal-octaves"
                        defaultValue={fractalOctaves}
                        onValueChange={setFractalOctaves}
                        min={1}
                        max={10}
                        step={1}
                        disabled={!hasFractal}
                    />
                </div>
                <div className="mx-auto grid w-full max-w-xs gap-3">
                    <div className={`flex items-center justify-between gap-2 noise-controls-label ${!hasFractal ? 'is-disabled' : ''}`}>
                        <Label htmlFor="slider-fractal-lacunarity">Lacunarity</Label>
                        <span className="text-sm text-muted-foreground">
                        {fractalLacunarity.join(", ")}
                        </span>
                    </div>
                    <Slider
                        id="slider-fractal-lacunarity"
                        defaultValue={fractalLacunarity}
                        onValueChange={setFractalLacunarity}
                        min={1.0}
                        max={4.0}
                        step={0.1}
                        disabled={!hasFractal}
                    />
                </div>
                <div className="mx-auto grid w-full max-w-xs gap-3">
                    <div className={`flex items-center justify-between gap-2 noise-controls-label ${!hasFractal ? 'is-disabled' : ''}`}>
                        <Label htmlFor="slider-fractal-gain">Gain</Label>
                        <span className="text-sm text-muted-foreground">
                        {fractalGain.join(", ")}
                        </span>
                    </div>
                    <Slider
                        id="slider-fractal-gain"
                        defaultValue={fractalGain}
                        onValueChange={setFractalGain}
                        min={0.0}
                        max={1.0}
                        step={0.01}
                        disabled={!hasFractal}
                    />
                </div>

                <div className="mx-auto grid w-full max-w-xs gap-3">
                    <div className={`flex items-center justify-between gap-2 noise-controls-label ${!hasFractal ? 'is-disabled' : ''}`}>
                        <Label htmlFor="slider-fractal-weighted-strength">Weighted Strength</Label>
                        <span className="text-sm text-muted-foreground">
                        {fractalWeightedStrength.join(", ")}
                        </span>
                    </div>
                    <Slider
                        id="slider-fractal-weighted-strength"
                        defaultValue={fractalWeightedStrength}
                        onValueChange={setFractalWeightedStrength}
                        min={0.0}
                        max={1.0}
                        step={0.01}
                        disabled={!hasFractal}
                    />
                </div>
                <div className="mx-auto grid w-full max-w-xs gap-3">
                    <div className={`flex items-center justify-between gap-2 noise-controls-label ${!isPingPong ? 'is-disabled' : ''}`}>
                        <Label htmlFor="slider-fractal-ping-pong-strength">Ping Pong Strength</Label>
                        <span className="text-sm text-muted-foreground">
                        {fractalPingPongStrength.join(", ")}
                        </span>
                    </div>
                    <Slider
                        id="slider-fractal-ping-pong-strength"
                        defaultValue={fractalPingPongStrength}
                        onValueChange={setFractalPingPongStrength}
                        min={0.0}
                        max={4.0}
                        step={0.1}
                        disabled={!isPingPong}
                    />
                </div>

                <p className="noise-controls-section">Cellular</p>
                <Field className={`noise-controls-label ${!isCellular ? 'is-disabled' : ''}`}>
                    <FieldLabel>Distance Function</FieldLabel>
                    <Select defaultValue={cellularDistanceFunction} onValueChange={(value) => setCellularDistanceFunction(value)} disabled={!isCellular}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value={FastNoiseLite.CellularDistanceFunction.Euclidean}>Euclidean</SelectItem>
                                <SelectItem value={FastNoiseLite.CellularDistanceFunction.EuclideanSq}>Euclidean Sq</SelectItem>
                                <SelectItem value={FastNoiseLite.CellularDistanceFunction.Manhattan}>Manhattan</SelectItem>
                                <SelectItem value={FastNoiseLite.CellularDistanceFunction.Hybrid}>Hybrid</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </Field>
                <Field className={`noise-controls-label ${!isCellular ? 'is-disabled' : ''}`}>
                    <FieldLabel>Return Type</FieldLabel>
                    <Select defaultValue={cellularReturnType} onValueChange={(value) => setCellularReturnType(value)} disabled={!isCellular}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value={FastNoiseLite.CellularReturnType.CellValue}>CellValue</SelectItem>
                                <SelectItem value={FastNoiseLite.CellularReturnType.Distance}>Distance</SelectItem>
                                <SelectItem value={FastNoiseLite.CellularReturnType.Distance2}>Distance2</SelectItem>
                                <SelectItem value={FastNoiseLite.CellularReturnType.Distance2Add}>Distance2Add</SelectItem>
                                <SelectItem value={FastNoiseLite.CellularReturnType.Distance2Sub}>Distance2Sub</SelectItem>
                                <SelectItem value={FastNoiseLite.CellularReturnType.Distance2Mul}>Distance2Mul</SelectItem>
                                <SelectItem value={FastNoiseLite.CellularReturnType.Distance2Div}>Distance2Div</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </Field>
                <div className="mx-auto grid w-full max-w-xs gap-3">
                    <div className={`flex items-center justify-between gap-2 noise-controls-label ${!isCellular ? 'is-disabled' : ''}`}>
                        <Label htmlFor="slider-cellular-jitter">Jitter</Label>
                        <span className="text-sm text-muted-foreground">
                        {cellularJitter.join(", ")}
                        </span>
                    </div>
                    <Slider
                        id="slider-cellular-jitter"
                        defaultValue={cellularJitter}
                        onValueChange={setCellularJitter}
                        min={0.0}
                        max={2.0}
                        step={0.01}
                        disabled={!isCellular}
                    />
                </div>

                <p className="noise-controls-section">Domain Warp</p>
                <Field className='noise-controls-label'>
                    <FieldLabel>Domain Warp Type</FieldLabel>
                    <Select defaultValue={domainWarpType ?? NONE_OPTION_TEXT} onValueChange={(value) => setDomainWarpType(value)}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value={NONE_OPTION_TEXT}>None</SelectItem>
                                <SelectItem value={FastNoiseLite.DomainWarpType.OpenSimplex2}>OpenSimplex2</SelectItem>
                                <SelectItem value={FastNoiseLite.DomainWarpType.OpenSimplex2Reduced}>OpenSimplex2Reduced</SelectItem>
                                <SelectItem value={FastNoiseLite.DomainWarpType.BasicGrid}>BasicGrid</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </Field>
                <div className="mx-auto grid w-full max-w-xs gap-3">
                    <div className={`flex items-center justify-between gap-2 noise-controls-label ${!hasDomainWarp ? 'is-disabled' : ''}`}>
                        <Label htmlFor="slider-domain-warp-amp">Amplitude</Label>
                        <span className="text-sm text-muted-foreground">
                        {domainWarpAmp.join(", ")}
                        </span>
                    </div>
                    <Slider
                        id="slider-domain-warp-amp"
                        defaultValue={domainWarpAmp}
                        onValueChange={setDomainWarpAmp}
                        min={0.0}
                        max={10.0}
                        step={0.01}
                        disabled={!hasDomainWarp}
                    />
                </div>
                <div className="mx-auto grid w-full max-w-xs gap-3">
                    <div className={`flex items-center justify-between gap-2 noise-controls-label ${!hasDomainWarp ? 'is-disabled' : ''}`}>
                        <Label htmlFor="slider-domain-warp-seed">Seed</Label>
                        <span className="text-sm text-muted-foreground">
                        {domainWarpSeed.join(", ")}
                        </span>
                    </div>
                    <Slider
                        id="slider-domain-warp-seed"
                        defaultValue={domainWarpSeed}
                        onValueChange={setDomainWarpSeed}
                        min={1}
                        max={9999}
                        step={1}
                        disabled={!hasDomainWarp}
                    />
                </div>
                <div className="mx-auto grid w-full max-w-xs gap-3">
                    <div className={`flex items-center justify-between gap-2 noise-controls-label ${!hasDomainWarp ? 'is-disabled' : ''}`}>
                        <Label htmlFor="slider-domain-warp-frequency">Frequency</Label>
                        <span className="text-sm text-muted-foreground">
                        {domainWarpFrequency.join(", ")}
                        </span>
                    </div>
                    <Slider
                        id="slider-domain-warp-frequency"
                        defaultValue={domainWarpFrequency}
                        onValueChange={setDomainWarpFrequency}
                        min={0.001}
                        max={1.0}
                        step={0.001}
                        disabled={!hasDomainWarp}
                    />
                </div>

                <p className="noise-controls-section">Domain Warp Fractal</p>
                <Field className={`noise-controls-label ${!hasDomainWarp ? 'is-disabled' : ''}`}>
                    <FieldLabel>Domain Warp Fractal Type</FieldLabel>
                    <Select defaultValue={domainWarpFractalType ?? NONE_OPTION_TEXT} onValueChange={(value) => setDomainWarpFractalType(value)} disabled={!hasDomainWarp}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value={NONE_OPTION_TEXT}>None</SelectItem>
                                <SelectItem value={FastNoiseLite.FractalType.DomainWarpProgressive}>DomainWarpProgressive</SelectItem>
                                <SelectItem value={FastNoiseLite.FractalType.DomainWarpIndependent}>DomainWarpIndependent</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </Field>
                <div className="mx-auto grid w-full max-w-xs gap-3">
                    <div className={`flex items-center justify-between gap-2 noise-controls-label ${!hasDomainWarp || !hasDomainWarpFractal ? 'is-disabled' : ''}`}>
                        <Label htmlFor="slider-domain-warp-fractal-octaves">Octaves</Label>
                        <span className="text-sm text-muted-foreground">
                        {domainWarpFractalOctaves.join(", ")}
                        </span>
                    </div>
                    <Slider
                        id="slider-domain-warp-fractal-octaves"
                        defaultValue={domainWarpFractalOctaves}
                        onValueChange={setDomainWarpFractalOctaves}
                        min={1}
                        max={10}
                        step={1}
                        disabled={!hasDomainWarp || !hasDomainWarpFractal}
                    />
                </div>
                <div className="mx-auto grid w-full max-w-xs gap-3">
                    <div className={`flex items-center justify-between gap-2 noise-controls-label ${!hasDomainWarp || !hasDomainWarpFractal ? 'is-disabled' : ''}`}>
                        <Label htmlFor="slider-domain-warp-fractal-lacunarity">Lacunarity</Label>
                        <span className="text-sm text-muted-foreground">
                        {domainWarpFractalLacunarity.join(", ")}
                        </span>
                    </div>
                    <Slider
                        id="slider-domain-warp-fractal-lacunarity"
                        defaultValue={domainWarpFractalLacunarity}
                        onValueChange={setDomainWarpFractalLacunarity}
                        min={1.0}
                        max={4.0}
                        step={0.1}
                        disabled={!hasDomainWarp || !hasDomainWarpFractal}
                    />
                </div>
                <div className="mx-auto grid w-full max-w-xs gap-3">
                    <div className={`flex items-center justify-between gap-2 noise-controls-label ${!hasDomainWarp || !hasDomainWarpFractal ? 'is-disabled' : ''}`}>
                        <Label htmlFor="slider-domain-warp-fractal-gain">Gain</Label>
                        <span className="text-sm text-muted-foreground">
                        {domainWarpFractalGain.join(", ")}
                        </span>
                    </div>
                    <Slider
                        id="slider-domain-warp-fractal-gain"
                        defaultValue={domainWarpFractalGain}
                        onValueChange={setDomainWarpFractalGain}
                        min={0.0}
                        max={1.0}
                        step={0.01}
                        disabled={!hasDomainWarp || !hasDomainWarpFractal}
                    />
                </div>

                
                
            </div>
        </ThemeProvider>
    )
}
