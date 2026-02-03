import { Container, Row, Col } from "react-bootstrap"

type SimpleHeroProps = {
    title?: string
    backgroundImage: string
    className?: string
}

const SimpleHero = ({ title, backgroundImage, className }: SimpleHeroProps) => {
    return (
        <section
            className={`w-100 d-flex align-items-center mb-3 py-0 ${className ?? ""
                }`}
        >
            <div
                className={`position-relative w-100 d-flex align-items-center ${title ? "pt-8 pb-6" : "py-6"
                    }`}
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    minHeight: "150px"
                }}
            >
                {/* Overlay */}
                <div className="bg-overlay bg-dark opacity-6 position-absolute top-0 start-0 w-100 h-100 z-1" />

                {/* Content */}
                {title && (
                    <Container className="position-relative z-2">
                        <Row className="m-0">
                            <Col md={10} className="mx-auto text-center px-2">
                                <h1
                                    className="text-white fw-semibold mb-0"
                                    style={{
                                        fontSize:
                                            "clamp(1.5rem, 3vw, 2.4rem)",
                                        lineHeight: 1.15,
                                        letterSpacing: "-0.02em"
                                    }}
                                >
                                    {title}
                                </h1>
                            </Col>
                        </Row>
                    </Container>
                )}
            </div>
        </section>
    )
}

export default SimpleHero
