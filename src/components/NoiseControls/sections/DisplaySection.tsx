import { Field } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { ControlSection } from '../ControlSection'
import { ControlSlider } from '../ControlSlider'
import type { DisplaySectionProps } from '../types'

export function DisplaySection({
    isDisplaying3D,
    setIsDisplaying3D,
    intensity,
    setIntensity,
    blackWhitePoint,
    setBlackWhitePoint,
}: DisplaySectionProps) {
    return (
        <ControlSection title="Display">
            <Field className="noise-controls-label">
                <Label htmlFor="view-toggle">View</Label>
                <ButtonGroup>
                    <Button variant={isDisplaying3D ? 'ghost' : 'outline'} onClick={() => setIsDisplaying3D(false)}>2D</Button>
                    <Button variant={isDisplaying3D ? 'outline' : 'ghost'} onClick={() => setIsDisplaying3D(true)}>3D</Button>
                </ButtonGroup>
            </Field>
            <ControlSlider
                id="slider-intensity"
                label="Intensity"
                value={intensity}
                onValueChange={setIntensity}
                min={0.01}
                max={4.0}
                step={0.01}
            />
            <ControlSlider 
                id="black-white-point"
                label="Black and White Point"
                value={blackWhitePoint}
                onValueChange={setBlackWhitePoint}
                min={0.0}
                max={1.0}
                step={0.01}
            />
        </ControlSection>
    )
}
