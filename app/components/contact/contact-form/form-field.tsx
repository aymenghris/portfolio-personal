import type { InputHTMLAttributes } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export const FormField = ({ label, id, className, ...props }: FieldProps) => (
    <div className="mb-4">
        <Label htmlFor={id} className="cc-reveal-up">
            {label}
        </Label>

        <Input id={id} className={cn("cc-reveal-up")} {...props} />
    </div>
)
