import './NoiseControls.css'
import Slider from '@mui/material/Slider'
import Switch from '@mui/material/Switch'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import type { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FastNoiseLite from 'fastnoise-lite'
import type {
    CellularDistanceFunction,
    CellularReturnType,
    DomainWarpFractalType,
    DomainWarpType,
    NoiseFractalType,
    NoiseType,
} from '../NoiseGrid/types'

const NONE_OPTION_TEXT = 'None'

type NoiseControlProps = {
    frequency: number
    setFrequency: (value: number) => void
    intensity: number
    setIntensity: (value: number) => void
    seed: number
    setSeed: (value: number) => void
    noiseType: NoiseType
    setNoiseType: (value: NoiseType) => void
    fractalType: NoiseFractalType | null
    setFractalType: (value: NoiseFractalType | null) => void
    fractalOctaves: number
    setFractalOctaves: (value: number) => void
    fractalLacunarity: number
    setFractalLacunarity: (value: number) => void
    fractalGain: number
    setFractalGain: (value: number) => void
    fractalWeightedStrength: number
    setFractalWeightedStrength: (value: number) => void
    fractalPingPongStrength: number
    setFractalPingPongStrength: (value: number) => void
    cellularDistanceFunction: CellularDistanceFunction
    setCellularDistanceFunction: (value: CellularDistanceFunction) => void
    cellularReturnType: CellularReturnType
    setCellularReturnType: (value: CellularReturnType) => void
    cellularJitter: number
    setCellularJitter: (value: number) => void
    domainWarpType: DomainWarpType | null
    setDomainWarpType: (value: DomainWarpType | null) => void
    domainWarpAmp: number
    setDomainWarpAmp: (value: number) => void
    domainWarpSeed: number
    setDomainWarpSeed: (value: number) => void
    domainWarpFrequency: number
    setDomainWarpFrequency: (value: number) => void
    domainWarpFractalType: DomainWarpFractalType | null
    setDomainWarpFractalType: (value: DomainWarpFractalType | null) => void
    domainWarpFractalOctaves: number
    setDomainWarpFractalOctaves: (value: number) => void
    domainWarpFractalLacunarity: number
    setDomainWarpFractalLacunarity: (value: number) => void
    domainWarpFractalGain: number
    setDomainWarpFractalGain: (value: number) => void
    isDisplaying3D: boolean
    setIsDisplaying3D: (value: boolean) => void
}

const selectSx = {
    color: "white",
    "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
    "& .MuiSvgIcon-root": { color: "white" },
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
    return (
        <div className="noise-controls custom-scrollbar">
            <p className="noise-controls-section">General</p>
            <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
                <p className="noise-controls-label">noise type</p>
                <Select
                    value={noiseType}
                    displayEmpty
                    onChange={(event: SelectChangeEvent<NoiseType>) => setNoiseType(event.target.value as NoiseType)}
                    inputProps={{ 'aria-label': 'Noise Type' }}
                    sx={selectSx}
                >
                    <MenuItem value={FastNoiseLite.NoiseType.OpenSimplex2}>OpenSimplex2</MenuItem>
                    <MenuItem value={FastNoiseLite.NoiseType.OpenSimplex2S}>OpenSimplex2S</MenuItem>
                    <MenuItem value={FastNoiseLite.NoiseType.Cellular}>Cellular</MenuItem>
                    <MenuItem value={FastNoiseLite.NoiseType.Perlin}>Perlin</MenuItem>
                    <MenuItem value={FastNoiseLite.NoiseType.ValueCubic}>ValueCubic</MenuItem>
                    <MenuItem value={FastNoiseLite.NoiseType.Value}>Value</MenuItem>
                </Select>
            </FormControl>
            <p className="noise-controls-label">seed</p>
            <Slider
                aria-label="seed"
                value={seed}
                size="small"
                min={1}
                max={9999}
                step={1}
                valueLabelDisplay="auto"
                onChange={(_, value) => setSeed(value as number)}
            />
            <p className="noise-controls-label">frequency</p>
            <Slider
                aria-label="frequency"
                value={frequency}
                size="small"
                min={0.001}
                max={1.0}
                step={0.001}
                valueLabelDisplay="auto"
                onChange={(_, value) => setFrequency(value as number)}
            />

            <p className="noise-controls-section">Fractal</p>
            <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
                <p className="noise-controls-label">fractal type</p>
                <Select
                    value={fractalType ?? NONE_OPTION_TEXT}
                    displayEmpty
                    onChange={(event: SelectChangeEvent<string>) => {
                        const next = event.target.value
                        setFractalType(next === NONE_OPTION_TEXT ? null : next as NoiseFractalType)
                    }}
                    inputProps={{ 'aria-label': 'Fractal Type' }}
                    sx={selectSx}
                >
                    <MenuItem value={NONE_OPTION_TEXT}>None</MenuItem>
                    <MenuItem value={FastNoiseLite.FractalType.FBm}>FBm</MenuItem>
                    <MenuItem value={FastNoiseLite.FractalType.Ridged}>Ridged</MenuItem>
                    <MenuItem value={FastNoiseLite.FractalType.PingPong}>PingPong</MenuItem>
                </Select>
            </FormControl>
            <p className="noise-controls-label">octaves</p>
            <Slider
                aria-label="fractal octaves"
                value={fractalOctaves}
                size="small"
                min={1}
                max={10}
                step={1}
                valueLabelDisplay="auto"
                onChange={(_, value) => setFractalOctaves(value as number)}
            />
            <p className="noise-controls-label">lacunarity</p>
            <Slider
                aria-label="fractal lacunarity"
                value={fractalLacunarity}
                size="small"
                min={1.0}
                max={4.0}
                step={0.1}
                valueLabelDisplay="auto"
                onChange={(_, value) => setFractalLacunarity(value as number)}
            />
            <p className="noise-controls-label">gain</p>
            <Slider
                aria-label="fractal gain"
                value={fractalGain}
                size="small"
                min={0.0}
                max={1.0}
                step={0.01}
                valueLabelDisplay="auto"
                onChange={(_, value) => setFractalGain(value as number)}
            />
            <p className="noise-controls-label">weighted strength</p>
            <Slider
                aria-label="fractal weighted strength"
                value={fractalWeightedStrength}
                size="small"
                min={0.0}
                max={1.0}
                step={0.01}
                valueLabelDisplay="auto"
                onChange={(_, value) => setFractalWeightedStrength(value as number)}
            />
            <p className="noise-controls-label">ping pong strength</p>
            <Slider
                aria-label="fractal ping pong strength"
                value={fractalPingPongStrength}
                size="small"
                min={0.0}
                max={4.0}
                step={0.1}
                valueLabelDisplay="auto"
                onChange={(_, value) => setFractalPingPongStrength(value as number)}
            />

            <p className="noise-controls-section">Cellular</p>
            <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
                <p className="noise-controls-label">distance function</p>
                <Select
                    value={cellularDistanceFunction}
                    displayEmpty
                    onChange={(event: SelectChangeEvent<CellularDistanceFunction>) => setCellularDistanceFunction(event.target.value as CellularDistanceFunction)}
                    inputProps={{ 'aria-label': 'Cellular Distance Function' }}
                    sx={selectSx}
                >
                    <MenuItem value={FastNoiseLite.CellularDistanceFunction.Euclidean}>Euclidean</MenuItem>
                    <MenuItem value={FastNoiseLite.CellularDistanceFunction.EuclideanSq}>Euclidean Sq</MenuItem>
                    <MenuItem value={FastNoiseLite.CellularDistanceFunction.Manhattan}>Manhattan</MenuItem>
                    <MenuItem value={FastNoiseLite.CellularDistanceFunction.Hybrid}>Hybrid</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
                <p className="noise-controls-label">return type</p>
                <Select
                    value={cellularReturnType}
                    displayEmpty
                    onChange={(event: SelectChangeEvent<CellularReturnType>) => setCellularReturnType(event.target.value as CellularReturnType)}
                    inputProps={{ 'aria-label': 'Cellular Return Type' }}
                    sx={selectSx}
                >
                    <MenuItem value={FastNoiseLite.CellularReturnType.CellValue}>CellValue</MenuItem>
                    <MenuItem value={FastNoiseLite.CellularReturnType.Distance}>Distance</MenuItem>
                    <MenuItem value={FastNoiseLite.CellularReturnType.Distance2}>Distance2</MenuItem>
                    <MenuItem value={FastNoiseLite.CellularReturnType.Distance2Add}>Distance2Add</MenuItem>
                    <MenuItem value={FastNoiseLite.CellularReturnType.Distance2Sub}>Distance2Sub</MenuItem>
                    <MenuItem value={FastNoiseLite.CellularReturnType.Distance2Mul}>Distance2Mul</MenuItem>
                    <MenuItem value={FastNoiseLite.CellularReturnType.Distance2Div}>Distance2Div</MenuItem>
                </Select>
            </FormControl>
            <p className="noise-controls-label">jitter</p>
            <Slider
                aria-label="cellular jitter"
                value={cellularJitter}
                size="small"
                min={0.0}
                max={2.0}
                step={0.01}
                valueLabelDisplay="auto"
                onChange={(_, value) => setCellularJitter(value as number)}
            />

            <p className="noise-controls-section">Domain Warp</p>
            <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
                <p className="noise-controls-label">domain warp type</p>
                <Select
                    value={domainWarpType ?? NONE_OPTION_TEXT}
                    displayEmpty
                    onChange={(event: SelectChangeEvent<string>) => {
                        const next = event.target.value
                        setDomainWarpType(next === NONE_OPTION_TEXT ? null : next as DomainWarpType)
                    }}
                    inputProps={{ 'aria-label': 'Domain Warp Type' }}
                    sx={selectSx}
                >
                    <MenuItem value={NONE_OPTION_TEXT}>None</MenuItem>
                    <MenuItem value={FastNoiseLite.DomainWarpType.OpenSimplex2}>OpenSimplex2</MenuItem>
                    <MenuItem value={FastNoiseLite.DomainWarpType.OpenSimplex2Reduced}>OpenSimplex2Reduced</MenuItem>
                    <MenuItem value={FastNoiseLite.DomainWarpType.BasicGrid}>BasicGrid</MenuItem>
                </Select>
            </FormControl>
            <p className="noise-controls-label">amplitude</p>
            <Slider
                aria-label="domain warp amplitude"
                value={domainWarpAmp}
                size="small"
                min={0.0}
                max={10.0}
                step={0.01}
                valueLabelDisplay="auto"
                onChange={(_, value) => setDomainWarpAmp(value as number)}
            />
            <p className="noise-controls-label">seed</p>
            <Slider
                aria-label="domain warp seed"
                value={domainWarpSeed}
                size="small"
                min={1}
                max={9999}
                step={1}
                valueLabelDisplay="auto"
                onChange={(_, value) => setDomainWarpSeed(value as number)}
            />
            <p className="noise-controls-label">frequency</p>
            <Slider
                aria-label="domain warp frequency"
                value={domainWarpFrequency}
                size="small"
                min={0.001}
                max={1.0}
                step={0.001}
                valueLabelDisplay="auto"
                onChange={(_, value) => setDomainWarpFrequency(value as number)}
            />

            <p className="noise-controls-section">Domain Warp Fractal</p>
            <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
                <p className="noise-controls-label">domain warp fractal type</p>
                <Select
                    value={domainWarpFractalType ?? NONE_OPTION_TEXT}
                    displayEmpty
                    onChange={(event: SelectChangeEvent<string>) => {
                        const next = event.target.value
                        setDomainWarpFractalType(next === NONE_OPTION_TEXT ? null : next as DomainWarpFractalType)
                    }}
                    inputProps={{ 'aria-label': 'Domain Warp Fractal Type' }}
                    sx={selectSx}
                >
                    <MenuItem value={NONE_OPTION_TEXT}>None</MenuItem>
                    <MenuItem value={FastNoiseLite.FractalType.DomainWarpProgressive}>DomainWarpProgressive</MenuItem>
                    <MenuItem value={FastNoiseLite.FractalType.DomainWarpIndependent}>DomainWarpIndependent</MenuItem>
                </Select>
            </FormControl>
            <p className="noise-controls-label">octaves</p>
            <Slider
                aria-label="domain warp fractal octaves"
                value={domainWarpFractalOctaves}
                size="small"
                min={1}
                max={10}
                step={1}
                valueLabelDisplay="auto"
                onChange={(_, value) => setDomainWarpFractalOctaves(value as number)}
            />
            <p className="noise-controls-label">lacunarity</p>
            <Slider
                aria-label="domain warp fractal lacunarity"
                value={domainWarpFractalLacunarity}
                size="small"
                min={1.0}
                max={4.0}
                step={0.1}
                valueLabelDisplay="auto"
                onChange={(_, value) => setDomainWarpFractalLacunarity(value as number)}
            />
            <p className="noise-controls-label">gain</p>
            <Slider
                aria-label="domain warp fractal gain"
                value={domainWarpFractalGain}
                size="small"
                min={0.0}
                max={1.0}
                step={0.01}
                valueLabelDisplay="auto"
                onChange={(_, value) => setDomainWarpFractalGain(value as number)}
            />

            <p className="noise-controls-section">Display</p>
            <p className="noise-controls-label">intensity</p>
            <Slider
                aria-label="intensity"
                value={intensity}
                size="small"
                min={0.01}
                max={4.0}
                step={0.01}
                valueLabelDisplay="auto"
                onChange={(_, value) => setIntensity(value as number)}
            />
            <p className="noise-controls-label">3D mode</p>
            <Switch checked={isDisplaying3D} onChange={(_, value) => setIsDisplaying3D(value)} />
        </div>
    )
}
