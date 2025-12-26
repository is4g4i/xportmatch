import { Col, Container, Image, Row } from 'react-bootstrap'
import fuchibol3 from '@/assets/images/xportMatch/fuchibol3.jpg'
import cancha3 from '@/assets/images/xportMatch/cancha3.jpg'
import { aboutFeatures } from '@/constants/home'
import { TwistedArrowSvg } from '@/assets/svgs/svgs'

const About = () => {
    return (
        <section>
            <Container>
                <Row className="g-4">
                    <Col lg={4} className="position-relative">
                        <h2>La mejor aplicacion para reservar tus mejengas</h2>
                        <p>Reserva la cancha que mas deseas en segundos, sin complicaciones, super facil.</p>
                        <Image src={fuchibol3} className="rounded-3" />
                    </Col>
                    <Col lg={7} className="position-relative ms-auto">
                        <div className="position-absolute top-0 start-0 translate-middle mt-8 ms-n4 z-index-9 d-none d-xl-block feature-item-3d">
                            <figure className="feature-item-3d-layer">
                                <TwistedArrowSvg />
                            </figure>
                        </div>
                        <div className="position-relative mb-5">
                            <Image src={cancha3} className="rounded-3" />
                            {/* <div className="position-absolute bottom-0 start-0 ms-n3 ms-lg-n6 mb-2 z-index-1">
                                <div className="bg-mode shadow d-inline-block text-center rounded-3 position-relative p-4">
                                    <span className="h3 text-primary mb-2">100+</span>
                                    <h6 className="fw-normal">Total de Reservas</h6>
                                </div>
                            </div> */}
                        </div>
                        <Row className="g-4 g-md-5">
                            {aboutFeatures.map((item, idx) => {
                                return (
                                    <Col key={idx} sm={6}>
                                        <div className="d-flex feature-item-3d">
                                            <figure>{item.image}</figure>

                                            <div className="ms-3">
                                                <h5 className="mb-2">{item.title}</h5>
                                                <p className="mb-0">{item.description}</p>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About
