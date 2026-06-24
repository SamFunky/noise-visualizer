import type { ReactNode } from 'react'

type ControlSectionProps = {
    title: string
    children: ReactNode
}

export function ControlSection({ title, children }: ControlSectionProps) {
    return (
        <>
            <p className="noise-controls-section">{title}</p>
            {children}
        </>
    )
}
