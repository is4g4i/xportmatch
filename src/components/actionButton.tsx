import { Link } from "react-router-dom"
import { ReactNode } from "react"
import clsx from "clsx"

type ButtonVariant =
    | "primary"
    | "primary-soft"
    | "outline-primary"
    | "secondary"
    | "ghost"

type ButtonSize = "sm" | "md" | "lg"

type ActionButtonProps = {
    to?: string
    onClick?: () => void
    children: ReactNode
    icon?: ReactNode
    variant?: ButtonVariant
    size?: ButtonSize
    fullWidth?: boolean
    disabled?: boolean
    className?: string
    type?: "button" | "submit"
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
    primary: "btn-primary",
    "primary-soft": "btn-primary-soft btn-primary-check",
    "outline-primary": "btn-outline-primary",
    secondary: "btn-secondary",
    ghost: "btn-link text-decoration-none"
}

const SIZE_CLASSES: Record<ButtonSize, string> = {
    sm: "btn-sm",
    md: "",
    lg: "btn-lg"
}

const ActionButton = ({
    to,
    onClick,
    children,
    icon,
    variant = "primary",
    size = "md",
    fullWidth = false,
    disabled = false,
    className,
    type = "button"
}: ActionButtonProps) => {
    const classes = clsx(
        "btn d-inline-flex align-items-center justify-content-center gap-2",
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        fullWidth && "w-100",
        disabled && "disabled",
        className
    )

    if (to) {
        return (
            <Link
                to={to}
                className={classes}
                onClick={(e) => disabled && e.preventDefault()}
            >
                {children}
                {icon}
            </Link>
        )
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={classes}
            disabled={disabled}
        >
            {children}
            {icon}
        </button>
    )
}

export default ActionButton
