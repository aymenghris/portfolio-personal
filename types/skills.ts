import type { ComponentType } from "react"

export interface SkillItem {
    icon: ComponentType<{ size?: number }>
    title: string
}
