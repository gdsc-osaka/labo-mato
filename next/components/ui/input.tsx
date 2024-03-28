import * as React from "react"
import {ReactNode} from "react"

import {cn} from "@/lib/utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: ReactNode,
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({className, type, ...props}, ref) => {
        const input = (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background " +
                    "file:border-0 file:bg-transparent file:text-sm file:font-medium " +
                    "placeholder:text-muted-foreground " +
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring " +
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        );

        if (props.label) {
            return (
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    {props.label}
                    {input}
                </div>
            )
        }

        return input;
    }
)
Input.displayName = "Input"

export {Input}
