import { Link } from "react-router-dom"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

type SocialKey = "facebook" | "instagram" | "twitter" | "linkedin"

type SocialPlatform = {
    key: SocialKey
    url: string
}

type SocialLinksProps = {
    platforms: SocialPlatform[]
    variant?: "light" | "solid"
}

const ICONS = {
    facebook: FaFacebookF,
    instagram: FaInstagram,
    twitter: FaXTwitter,
    linkedin: FaLinkedinIn
}

const LIGHT_CLASSES = {
    facebook: "text-facebook btn-white shadow",
    instagram: "text-instagram btn-white shadow",
    twitter: "text-twitter btn-white shadow",
    linkedin: "text-linkedin btn-white shadow"
}

const SOLID_CLASSES = {
    facebook: "bg-facebook text-white",
    instagram: "bg-instagram text-white",
    twitter: "bg-twitter text-white",
    linkedin: "bg-linkedin text-white"
}

const SocialLinks = ({ platforms, variant = "light" }: SocialLinksProps) => {
    if (!platforms?.length) return null

    const styleMap = variant === "solid" ? SOLID_CLASSES : LIGHT_CLASSES

    return (
        <ul className="list-inline mt-3 mb-0">
            {platforms.map((p) => {
                const Icon = ICONS[p.key]

                return (
                    <li key={p.key} className="list-inline-item me-2">
                        <Link
                            to={p.url}
                            target="_blank"
                            className={`btn btn-sm px-2 mb-0 ${styleMap[p.key]}`}
                        >
                            <Icon className="fa-fw" />
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default SocialLinks
