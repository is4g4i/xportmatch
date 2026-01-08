import { Container, Row, Col } from 'react-bootstrap'

type SimpleHeroProps = {
    title?: string
    backgroundImage: string
    className?: string
}

const SimpleHero = ({ title, backgroundImage, className }: SimpleHeroProps) => {
    return (
        <section className={`w-100 d-flex align-items-center mb-4 py-0 ${className ?? ''}`}>
            <div
                className="position-relative w-100 d-flex align-items-center pb-xl-2 pt-xl-7 pt-8 pb-6"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    minHeight: "150px"
                }}
            >
                {/* Overlay */}
                <div className="bg-overlay bg-dark opacity-6 position-absolute top-0 start-0 w-100 h-100 z-1" />

                {/* Content */}
                {title && <Container className="position-relative z-2">
                    <Row className="my-2 my-xl-5">
                        <Col md={8} className="mx-auto text-center">
                            <h1 className="text-white">{title}</h1>
                        </Col>
                    </Row>
                </Container>}
            </div>
        </section>
    )
}

export default SimpleHero
