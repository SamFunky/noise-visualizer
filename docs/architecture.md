# Architecture

## Overview

The app has two main halves: a **control panel** (sidebar) and a **visualizer** (Three.js canvas). All noise settings live in a single React hook and are passed to both halves.

```
useNoiseSettings()
       │
       ├──► NoiseControlPanel   (sidebar UI)
       │
       └──► NoiseVisualizer     (Three.js canvas)
                 │
                 ├── NoiseGrid2D   (2D dot grid)
                 └── NoiseGrid3D   (3D point surface)
```

## Entry point

`App.tsx` is intentionally thin:

```tsx
const { visualizerProps, ...controlProps } = useNoiseSettings()

<NoiseControlPanel {...controlProps} />
<NoiseVisualizer {...visualizerProps} />
```

`visualizerProps` is a pre-mapped object typed as `NoiseVisualizerProps` (with renamed fields like `type` instead of `noiseType`). Everything else from the hook goes to the control panel as `NoiseSettings`.

## State: `useNoiseSettings`

Location: `src/hooks/useNoiseSettings.ts`

This custom hook owns all `useState` calls for noise parameters and display settings. It returns:

- **`visualizerProps`** — read-only config bundle for the canvas
- **Individual values + setters** — for the control panel (`NoiseSettings` type)

The `NoiseSettings` type is derived automatically:

```ts
type NoiseSettings = Omit<ReturnType<typeof useNoiseSettings>, 'visualizerProps'>
```

## Control panel

Location: `src/components/NoiseControls/`

```
NoiseControls/
  NoiseControls.tsx          Shell — composes sections, wraps ThemeProvider
  ControlSlider.tsx          Reusable slider + editable value input(s)
  ControlSelect.tsx          Reusable labeled select
  ControlSection.tsx         Section title wrapper
  noiseOptions.ts            Select option constants (noise types, fractal types, etc.)
  types.ts                   Per-section prop types (Pick<NoiseSettings, ...>)
  sections/
    DisplaySection.tsx
    GeneralSection.tsx
    FractalSection.tsx
    CellularSection.tsx
    DomainWarpSection.tsx
    DomainWarpFractalSection.tsx
```

Each section file owns its own disabled logic (e.g. cellular controls disable when noise type isn't Cellular). Section prop types use TypeScript `Pick<>` to declare only the fields that section needs.

## Visualizer pipeline

Location: `src/components/NoiseGrid/`

### 1. Config → noise instances

`NoiseVisualizer` splits props into `noiseConfig` and `domainWarpConfig`, then calls `useFastNoise()` to create configured `FastNoiseLite` instances (main noise + domain warp noise).

### 2. Grid rendering

- **`NoiseGrid2D`** — iterates a 2D grid of dots inside a circular mask. Each dot's Z height, size, and color come from the noise value at that grid coordinate.
- **`NoiseGrid3D`** — iterates a 3D grid and renders dots above a threshold, using neighbor checks to form a surface-like appearance.

### 3. Noise sampling

`sampleNoise.ts` handles the core sampling call, including domain warp coordinate transformation when warp is active.

### 4. Display remapping

Raw noise output is roughly -1 to 1. Before rendering, values pass through `getDisplayNoiseValue()` in `normalizeNoise.ts`:

1. Normalize to 0–1: `(raw + 1) / 2`
2. Apply black/white point: `(value - black) / (white - black)`, clamped to [0, 1]

This remapping is used for 2D color, 2D height, 3D threshold checks, and neighbor comparisons — not in the noise algorithm itself.

### 5. Coloring

- **2D** — `noiseColor2D.ts` lerps between two RGB colors based on the remapped noise value
- **3D** — `noiseColor3D.ts` colors by distance from center (not by noise value)

## Types

Location: `src/components/NoiseGrid/types.ts`

Key types:

| Type | Purpose |
|---|---|
| `NoiseConfig` | Core noise parameters |
| `DomainWarpConfig` | Domain warp parameters |
| `DisplayConfig` | Display-only settings (`blackWhitePoint`) |
| `NoiseVisualizerProps` | Everything the visualizer needs |
| `NoiseGrid2DProps` / `NoiseGrid3DProps` | Grid renderer props (includes noise instances) |

## UI components

Shared shadcn/ui primitives live in `src/components/ui/`. The control panel uses `Slider`, `Select`, `Input`, `Button`, `Field`, and `Label` from this folder.
