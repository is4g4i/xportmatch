interface FeatureBadgeProps {
    label: string
    className?: string
}

const FeatureBadge = ({ label, className = '' }: FeatureBadgeProps) => {
    return (
        <span className={`badge rounded-pill bg-primary ${className}`}>
            {label}
        </span>
    )
}

export default FeatureBadge
