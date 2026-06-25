# Future Features

Planned work for the noise visualizer. Update this as priorities change.

## Planned

### Camera

- [ ] **Center the camera** — adjust default camera position so the noise grid sits more centered in the viewport
- [ ] **Fix rotation axis** — orbit controls should rotate around the correct axis so panning/orbiting feels natural relative to the grid

### Node graph — drag & combine noises

- [ ] **Node drag-and-combine area** — a workspace where users can drag noise nodes together and wire them into a single, more complex output (e.g. blend, layer, or pipe one noise into another)
- [ ] **Combined preview** — the main canvas reflects the result of the node graph, not just a single noise config

### View modes

- [ ] **Marching squares (2D)** — square-based isocontour rendering instead of (or alongside) the current dot grid
- [ ] **Marching cubes (3D)** — mesh-based isosurface rendering instead of (or alongside) the current point cloud

### Export

- [ ] **Image export** — save the current view as an image file
- [ ] **Noise code export** — generate ready-to-use noise setup code for multiple languages (e.g. C++, C#, HLSL, and whatever FastNoiseLite supports)

### Transitions & animation

- [ ] **View-switch animation** — animate the noise grid when toggling between 2D and 3D (or between other view modes)
- [ ] **Load-in animation** — animate the grid on initial page load so the visualization doesn’t pop in statically
