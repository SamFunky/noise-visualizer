# Noise Visualizer

An interactive visualizer for [FastNoiseLite](https://github.com/Auburn/FastNoiseLite) noise. Tweak noise parameters in a sidebar and see the result rendered in real time as a 2D dot grid or a 3D point surface.

## Features

- **2D view** — circular dot grid with height and color driven by noise values
- **3D view** — isosurface-style point cloud with orbit controls
- **Full FastNoiseLite controls** — noise type, fractal, cellular, domain warp, and domain warp fractal settings
- **Display adjustments** — intensity, black/white point remapping
- **Editable slider values** — click any value readout to type a number directly

## Quick start

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

### Other scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Type-check and production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Controls overview

| Section | What it controls |
|---|---|
| **Display** | 2D/3D toggle, intensity, black & white point |
| **General** | Noise type, seed, frequency |
| **Fractal** | Fractal type and octaves/lacunarity/gain (disabled when type is None) |
| **Cellular** | Distance function, return type, jitter (disabled unless noise type is Cellular) |
| **Domain Warp** | Warp type, amplitude, seed, frequency |
| **Domain Warp Fractal** | Warp fractal type and parameters (requires active domain warp) |

For parameter details, see the [FastNoiseLite documentation](https://github.com/Auburn/FastNoiseLite).

## Tech stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Three.js](https://threejs.org/) via [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) and [@react-three/drei](https://github.com/pmndrs/drei)
- [fastnoise-lite](https://www.npmjs.com/package/fastnoise-lite)
- [shadcn/ui](https://ui.shadcn.com/) + [Tailwind CSS](https://tailwindcss.com/)

## Project docs

- [Architecture](./docs/architecture.md) — how the app is structured and how data flows
- [Future features](./docs/future-features.md) — planned improvements and ideas
