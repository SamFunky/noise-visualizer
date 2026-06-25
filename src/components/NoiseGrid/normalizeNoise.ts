export function applyBlackWhitePoint(value: number, black: number, white: number): number {
    const range = white - black
    if (range <= 0) return value
    return Math.max(0, Math.min(1, (value - black) / range))
}

export function getDisplayNoiseValue(raw: number, blackWhitePoint: number[]): number {
    const normalized = (raw + 1) / 2
    const [black, white] = blackWhitePoint
    return applyBlackWhitePoint(normalized, black, white)
}
