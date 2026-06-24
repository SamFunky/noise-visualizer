import { Field, FieldLabel } from '@/components/ui/field'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { NONE_OPTION_TEXT } from './noiseOptions'

type SelectOption = {
    value: string
    label: string
}

type ControlSelectProps = {
    label: string
    value: string | null
    onValueChange: (value: string) => void
    options: readonly SelectOption[]
    allowNone?: boolean
    disabled?: boolean
}

export function ControlSelect({
    label,
    value,
    onValueChange,
    options,
    allowNone = false,
    disabled = false,
}: ControlSelectProps) {
    return (
        <Field className={`noise-controls-label ${disabled ? 'is-disabled' : ''}`}>
            <FieldLabel>{label}</FieldLabel>
            <Select
                defaultValue={value ?? (allowNone ? NONE_OPTION_TEXT : undefined)}
                onValueChange={onValueChange}
                disabled={disabled}
            >
                <SelectTrigger>
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {allowNone && (
                            <SelectItem value={NONE_OPTION_TEXT}>{NONE_OPTION_TEXT}</SelectItem>
                        )}
                        {options.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </Field>
    )
}
