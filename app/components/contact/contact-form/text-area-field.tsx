import type { TextareaHTMLAttributes } from "react"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string
}

export const TextAreaField = ({
    label,
    id,
    className,
    ...props
}: TextAreaProps) => (
    <div>
        <Label htmlFor={id} className="cc-reveal-up">
            {label}
        </Label>

        <Textarea id={id} className={cn("cc-reveal-up")} {...props} />
    </div>
)
