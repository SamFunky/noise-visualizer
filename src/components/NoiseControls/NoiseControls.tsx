import './NoiseControls.css'
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FastNoiseLite from 'fastnoise-lite'

type NoiseType = typeof FastNoiseLite.NoiseType[keyof typeof FastNoiseLite.NoiseType]
type FractalType = typeof FastNoiseLite.FractalType[keyof typeof FastNoiseLite.FractalType]
type DomainWarpType = typeof FastNoiseLite.DomainWarpType[keyof typeof FastNoiseLite.DomainWarpType]

type NoiseControlProps = {
    frequency: number
    setFrequency: (value: number) => void
    intensity: number
    setIntensity: (value: number) => void
    seed: number
    setSeed: (value: number) => void
    noiseType: NoiseType
    setNoiseType: (value: NoiseType) => void
    fractalType: FractalType
    setFractalType: (value: FractalType) => void
    fractalOctaves: number
    setFractalOctaves: (value: number) => void
    fractalLacunarity: number
    setFractalLacunarity: (value: number) => void
    fractalGain: number
    setFractalGain: (value: number) => void
    domainWarpType: DomainWarpType
    setDomainWarpType: (value: DomainWarpType) => void
    domainWarpAmp: number
    setDomainWarpAmp: (value: number) => void
    isDisplaying3D: boolean
    setIsDisplaying3D: (value: boolean) => void
}

const selectSx = {
    color: "white",

    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
    },

    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
    },

    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
    },

    "& .MuiSvgIcon-root": {
        color: "white",
    },
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
    domainWarpType,
    setDomainWarpType,
    domainWarpAmp,
    setDomainWarpAmp,
    isDisplaying3D,
    setIsDisplaying3D

}: NoiseControlProps) {

    return (
        <div className='noise-controls'>
            <p style={{color: "white", margin: -2}}>frequency</p>
            <Slider 
                aria-label='frequency'
                value={frequency}
                size="small"
                min={0.001}
                max={1.0}
                step={0.001}
                valueLabelDisplay='auto'
                onChange={(_, value) => setFrequency(value as number)}
            />
            <p style={{color: "white", margin: -2}}>intensity</p>
            <Slider 
                aria-label='intensity'
                value={intensity}
                size="small"
                min={0.01}
                max={4.0}
                step={0.01}
                valueLabelDisplay='auto'
                onChange={(_, value) => setIntensity(value as number)}
            />
            <p style={{color: "white", margin: -2}}>seed</p>
            <Slider 
                aria-label='seed'
                value={seed}
                size="small"
                min={1}
                max={9999}
                step={1}
                valueLabelDisplay='auto'
                onChange={(_, value) => setSeed(value as number)}
            />
            <p style={{color: "white", margin: -2}}>fractal octaves</p>
            <Slider 
                aria-label='fractal octaves'
                value={fractalOctaves}
                size="small"
                min={1}
                max={10}
                step={1}
                valueLabelDisplay='auto'
                onChange={(_, value) => setFractalOctaves(value as number)}
            />
            <p style={{color: "white", margin: -2}}>fractal lacunarity</p>
            <Slider 
                aria-label='fractal lacunarity'
                value={fractalLacunarity}
                size="small"
                min={1.0}
                max={4.0}
                step={0.1}
                valueLabelDisplay='auto'
                onChange={(_, value) => setFractalLacunarity(value as number)}
            />
            <p style={{color: "white", margin: -2}}>fractal gain</p>
            <Slider 
                aria-label='fractal gain'
                value={fractalGain}
                size="small"
                min={0.0}
                max={1.0}
                step={0.01}
                valueLabelDisplay='auto'
                onChange={(_, value) => setFractalGain(value as number)}
            />
            <p style={{color: "white", margin: -2}}>domain warp amplitude</p>
            <Slider 
                aria-label='domain warp amplitude'
                value={domainWarpAmp}
                size="small"
                min={0.0}
                max={1000.0}
                step={1}
                valueLabelDisplay='auto'
                onChange={(_, value) => setDomainWarpAmp(value as number)}
            />
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <p style={{color: "white", margin: -2}}>noise type</p>
                <Select
                    value={noiseType}
                    displayEmpty
                    onChange={(event: SelectChangeEvent<NoiseType>) => setNoiseType(event.target.value as NoiseType)}
                    inputProps={{ 'aria-label': 'Noise Type' }}
                    sx={selectSx}
                >
                    <MenuItem value={FastNoiseLite.NoiseType.OpenSimplex2}><em>Simplex</em></MenuItem>
                    <MenuItem value={FastNoiseLite.NoiseType.Cellular}>Cellular</MenuItem>
                    <MenuItem value={FastNoiseLite.NoiseType.Perlin}>Perlin</MenuItem>
                    <MenuItem value={FastNoiseLite.NoiseType.ValueCubic}>ValueCubic</MenuItem>
                    <MenuItem value={FastNoiseLite.NoiseType.Value}>Value</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <p style={{color: "white", margin: -2}}>fractal type</p>
                <Select
                    value={fractalType}
                    displayEmpty
                    onChange={(event: SelectChangeEvent<FractalType>) => setFractalType(event.target.value as FractalType)}
                    inputProps={{ 'aria-label': 'Fractal Type' }}
                    sx={selectSx}
                >
                    <MenuItem value={FastNoiseLite.FractalType.None}><em>None</em></MenuItem>
                    <MenuItem value={FastNoiseLite.FractalType.FBm}>FBm</MenuItem>
                    <MenuItem value={FastNoiseLite.FractalType.Ridged}>Ridged</MenuItem>
                    <MenuItem value={FastNoiseLite.FractalType.PingPong}>PingPong</MenuItem>
                    <MenuItem value={FastNoiseLite.FractalType.DomainWarpProgressive}>DomainWaprProgressive</MenuItem>
                    <MenuItem value={FastNoiseLite.FractalType.DomainWarpIndependent}>DomainWarpIndependent</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <p style={{color: "white", margin: -2}}>domain warp type</p>
                <Select
                    value={domainWarpType}
                    displayEmpty
                    onChange={(event: SelectChangeEvent<DomainWarpType>) => setDomainWarpType(event.target.value as DomainWarpType)}
                    inputProps={{ 'aria-label': 'Domain Warp Type' }}
                    sx={selectSx}
                >
                    <MenuItem value={FastNoiseLite.DomainWarpType.OpenSimplex2}><em>OpenSimplex2</em></MenuItem>
                    <MenuItem value={FastNoiseLite.DomainWarpType.OpenSimplex2Reduced}>OpenSimplex2Reduced</MenuItem>
                    <MenuItem value={FastNoiseLite.DomainWarpType.BasicGrid}>BasicGrid</MenuItem>
                </Select>
            </FormControl>
            <Switch value={isDisplaying3D} onChange={(_, value) => setIsDisplaying3D(value as boolean)} />
        </div>
    )
}