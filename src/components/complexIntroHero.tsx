import { Container, Row, Col, Card, CardBody } from "react-bootstrap"
import ActionButton from "@/components/actionButton"
import { Currency } from "@/constants/globals"
import { BsGeoAlt } from "react-icons/bs"
import ShareDropdown from "./shareDropdown"
import { getShareableUrl } from "@/utils/getCurrentUrl"

type ComplexIntroHeroProps = {
    backgroundImage: string
    title: string
    description: string
    duration?: string
    price: number
    ctaLabel?: string
    onCtaClick?: () => void
}

const ComplexIntroHero = ({
    backgroundImage,
    title,
    description,
    price,
    ctaLabel = "Reservar ahora",
    onCtaClick
}: ComplexIntroHeroProps) => {
    return (
        <section className="py-0 py-md-5">
            <Container>
                <div
                    className="position-relative rounded-3 overflow-hidden p-3 p-sm-5"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundPosition: "center left",
                        backgroundSize: "cover"
                    }}
                >
                    {/* Overlay oscuro */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-5" />

                    <Row className="position-relative z-2 align-items-start">
                        {/* Título sobre la imagen */}
                        <Col md={5} xl={5}>
                            <h1 className="h3 mt-2 mb-1 text-white">
                                Emperor Salon &amp; Spa
                            </h1>
                            <p className="mb-2 mb-sm-0 items-center text-white">
                                <BsGeoAlt className="me-1" />
                                5855 W Century Blvd, Los Angeles - 90045
                            </p>
                            <div className="position-absolute bottom-0 start-0 m-3">
                                <ShareDropdown url={getShareableUrl()} />
                            </div>
                        </Col>

                        {/* Card */}
                        <Col md={7} xl={5} className="ms-auto">
                            <Card as={CardBody} className="p-sm-5 shadow-sm">
                                <h5>{title}</h5>
                                <p className="mb-3">{description}</p>

                                {/* Precio */}
                                <div className="d-flex align-items-center mb-3">
                                    <div className="d-flex align-items-end gap-2">
                                        <span className="small">Desde</span>
                                        <h3 className="text-success mb-0">
                                            {Currency}
                                            {price}
                                        </h3>
                                        <span className="mb-1">/hora</span>
                                    </div>
                                </div>

                                {/* CTA */}
                                <ActionButton
                                    variant="primary"
                                    size="md"
                                    onClick={onCtaClick}
                                >
                                    {ctaLabel}
                                </ActionButton>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default ComplexIntroHero
