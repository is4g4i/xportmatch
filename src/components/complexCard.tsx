import { Card, CardBody, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import ActionButton from "./actionButton"

type ComplexCardProps = {
    image: string
    title: string
    subtitle: string
    link?: string
    ctaLabel?: string
    ctaLink?: string
}

const ComplexCard = ({
    image,
    title,
    subtitle,
    link = "#",
    ctaLabel = "Ver Detalles del Complejo",
    ctaLink = "/complex/1"
}: ComplexCardProps) => {
    return (
        <Card className="position-relative overflow-visible">
            <h5>Pertenece a:</h5>

            {/* Contenedor con ratio 4:3 */}
            <div className="ratio ratio-4x3 rounded overflow-hidden">
                <Image
                    src={image}
                    className="w-100 h-100 object-fit-cover"
                    alt={title}
                />
            </div>

            <div className="position-absolute top-100 start-50 translate-middle w-100">
                <CardBody className="text-center bg-mode shadow rounded mx-4 p-3">
                    <h6 className="card-title mb-1">
                        <Link to={link}>{title}</Link>
                    </h6>

                    <small>{subtitle}</small>

                    <div className="mt-2">
                        <ActionButton
                            to={ctaLink}
                            variant="primary"
                            size="sm"
                        >
                            {ctaLabel}
                        </ActionButton>
                    </div>
                </CardBody>
            </div>
        </Card>
    )
}

export default ComplexCard
