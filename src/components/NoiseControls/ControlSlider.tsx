import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'

type ControlSliderProps = {
    id: string
    label: string
    value: number[]
    onValueChange: (value: number[]) => void
    min: number
    max: number
    step: number
    disabled?: boolean
}

export function ControlSlider({
    id,
    label,
    value,
    onValueChange,
    min,
    max,
    step,
    disabled = false,
}: ControlSliderProps) {
    return (
        <div className="mx-auto grid w-full max-w-xs gap-3">
            <div className={`flex items-center justify-between gap-2 noise-controls-label ${disabled ? 'is-disabled' : ''}`}>
                <Label htmlFor={id}>{label}</Label>
                <span className="text-sm text-muted-foreground">
                    {value.join(', ')}
                </span>
            </div>
            <Slider
                id={id}
                value={value}
                onValueChange={onValueChange}
                min={min}
                max={max}
                step={step}
                disabled={disabled}
            />
        </div>
    )
}
