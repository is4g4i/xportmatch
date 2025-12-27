import { Button, Col, Container, Row } from 'react-bootstrap'
import { BsStarFill } from 'react-icons/bs'

import fuchibol4 from '@/assets/images/xportMatch/fuchibol4.png'
import { UnderlineCRForText } from '@/assets/svgs/svgs'

const BannerCta = () => {
    return (
        <section className="my-md-5" style={{ backgroundImage: `url(${fuchibol4})`, backgroundPosition: 'center left', backgroundSize: 'cover'}}>
            <Container>
                <Row className="py-lg-7">
                    <Col lg={6} className="ms-auto">
                        <h5 className="badge text-bg-white mb-3">
                            <BsStarFill size={14} className=" text-warning me-2" />
                            Recomendado
                        </h5>
                        <h2 className="mb-4 text-white">
                          Comienza a buscar la cancha para tus{' '}
                            <span className="position-relative z-index-9">
                                mejengas
                                <span className="position-absolute top-50 start-50 translate-middle z-index-n1 d-none d-md-block mt-3">
                                    <UnderlineCRForText />
                                </span>
                            </span>
                        </h2>
                        <p className="text-white mb-4">
                            Descubre nuestras canchas recomendadas y reserva la tuya hoy mismo para disfrutar de un partido inolvidable con amigos y familiares.
                        </p>
                        <Button variant="primary" className="mb-0">
                            Explorar
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BannerCta
