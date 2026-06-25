import { useEffect, useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
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

function getStepPrecision(step: number): number {
    const stepText = String(step)
    const decimalIndex = stepText.indexOf('.')
    return decimalIndex === -1 ? 0 : stepText.length - decimalIndex - 1
}

function formatSliderValue(value: number, step: number): string {
    return value.toFixed(getStepPrecision(step))
}

function clampToStep(raw: number, min: number, max: number, step: number): number {
    const clamped = Math.min(max, Math.max(min, raw))
    const stepped = Math.round(clamped / step) * step
    return Number(stepped.toFixed(getStepPrecision(step)))
}

type SliderValueInputProps = {
    id: string
    value: number
    onCommit: (value: number) => void
    min: number
    max: number
    step: number
    disabled?: boolean
}

function SliderValueInput({ id, value, onCommit, min, max, step, disabled }: SliderValueInputProps) {
    const [draft, setDraft] = useState(formatSliderValue(value, step))
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        if (!isEditing) {
            setDraft(formatSliderValue(value, step))
        }
    }, [value, step, isEditing])

    const commit = () => {
        const parsed = Number.parseFloat(draft)
        if (Number.isNaN(parsed)) {
            setDraft(formatSliderValue(value, step))
            setIsEditing(false)
            return
        }

        const next = clampToStep(parsed, min, max, step)
        onCommit(next)
        setDraft(formatSliderValue(next, step))
        setIsEditing(false)
    }

    return (
        <Input
            id={id}
            type="text"
            inputMode="decimal"
            disabled={disabled}
            className="h-auto w-14 shrink-0 border-none bg-transparent p-0 text-center text-sm text-muted-foreground shadow-none focus-visible:ring-0"
            value={isEditing ? draft : formatSliderValue(value, step)}
            onFocus={() => {
                setIsEditing(true)
                setDraft(formatSliderValue(value, step))
            }}
            onChange={(event) => setDraft(event.target.value)}
            onBlur={commit}
            onKeyDown={(event) => {
                if (event.key === 'Enter') {
                    event.currentTarget.blur()
                }
            }}
        />
    )
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
    const updateValueAt = (index: number, next: number) => {
        const updated = [...value]
        updated[index] = next
        onValueChange(updated)
    }

    return (
        <div className="mx-auto grid w-full max-w-xs gap-3">
            <div className={`flex items-center justify-between gap-2 noise-controls-label ${disabled ? 'is-disabled' : ''}`}>
                <Label htmlFor={id}>{label}</Label>
                <div className="flex items-center gap-1">
                    {value.map((entry, index) => (
                        <SliderValueInput
                            key={`${id}-${index}`}
                            id={`${id}-${index}`}
                            value={entry}
                            onCommit={(next) => updateValueAt(index, next)}
                            min={min}
                            max={max}
                            step={step}
                            disabled={disabled}
                        />
                    ))}
                </div>
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
