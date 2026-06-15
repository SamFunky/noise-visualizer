import './NoiseControls.css'
import Slider from '@mui/material/Slider';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FastNoiseLite from 'fastnoise-lite'

type NoiseType = typeof FastNoiseLite.NoiseType[keyof typeof FastNoiseLite.NoiseType]
type FractalType = typeof FastNoiseLite.FractalType[keyof typeof FastNoiseLite.FractalType]

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
    setFractalType

}: NoiseControlProps) {

    return (
        <div className='noise-controls'>
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
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    value={noiseType}
                    displayEmpty
                    onChange={(event: SelectChangeEvent<NoiseType>) => setNoiseType(event.target.value as NoiseType)}
                    inputProps={{ 'aria-label': 'Noise Type' }}
                    sx={{
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
                    }}
                >
                    <MenuItem value={FastNoiseLite.NoiseType.OpenSimplex2}><em>Simplex</em></MenuItem>
                    <MenuItem value={FastNoiseLite.NoiseType.Cellular}>Cellular</MenuItem>
                    <MenuItem value={FastNoiseLite.NoiseType.Perlin}>Perlin</MenuItem>
                    <MenuItem value={FastNoiseLite.NoiseType.ValueCubic}>ValueCubic</MenuItem>
                    <MenuItem value={FastNoiseLite.NoiseType.Value}>Value</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    value={fractalType}
                    displayEmpty
                    onChange={(event: SelectChangeEvent<FractalType>) => setFractalType(event.target.value as FractalType)}
                    inputProps={{ 'aria-label': 'Fractal Type' }}
                    sx={{
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
                    }}
                >
                    <MenuItem value={FastNoiseLite.FractalType.None}><em>None</em></MenuItem>
                    <MenuItem value={FastNoiseLite.FractalType.FBm}>FBm</MenuItem>
                    <MenuItem value={FastNoiseLite.FractalType.Ridged}>Ridged</MenuItem>
                    <MenuItem value={FastNoiseLite.FractalType.PingPong}>PingPong</MenuItem>
                    <MenuItem value={FastNoiseLite.FractalType.DomainWarpProgressive}>DomainWaprProgressive</MenuItem>
                    <MenuItem value={FastNoiseLite.FractalType.DomainWarpIndependent}>DomainWarpIndependent</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}