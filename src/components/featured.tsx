import { Card, Col, Container, Row } from 'react-bootstrap'
import fuchibol from '@/assets/images/xportMatch/fuchibol.jpg'
import { Asterisk, CirclesDecoration } from '@/assets/svgs/svgs'
import { xportMatchFeatures } from '@/constants/home'
import clsx from 'clsx'

const Featured = () => {
    return (
        <section className="pb-0 pb-xl-5">
            <Container>
                <Row className="g-4 justify-content-between align-items-center">
                    <Col lg={5} className="position-relative">
                        <div className="position-absolute top-0 start-0 translate-middle z-index-9 ms-4 d-none d-xl-block">
                            <figure className="feature-item-3d-layer">
                                <Asterisk size={77} />
                            </figure>
                        </div>

                        <figure className="position-absolute bottom-0 end-0 d-none d-md-block mb-n5 me-n4">
                            <CirclesDecoration />
                        </figure>

                        <img src={fuchibol} className="rounded-3 position-relative" />
                    </Col>

                    <Col lg={6}>
                        <h2 className="mb-3 mb-lg-5">Tu mejenga asegurada en un instante</h2>
                        <p className="mb-3 mb-lg-5">Con Xportmatch podes reservar canchas de futbol en tiempo real, realizar el pago en linea, y asegurar tu horario de juego en minutos.</p>

                        <Row className="g-4">
                            {xportMatchFeatures.map((item, idx) => {
                                const Icon = item.icon
                                return (
                                    <Col key={idx} sm={6} lg={6}>
                                        <Card className="card-body shadow p-4 h-100 feature-item-3d">
                                            <div className={clsx(item.variant, 'icon-lg bg-opacity-10 rounded-circle mb-4 flex-centered')}>
                                                <Icon className="fs-5" />
                                            </div>
                                            <h5>{item.title}</h5>
                                            <p className="mb-0">{item.description}</p>
                                        </Card>
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

export default Featured
