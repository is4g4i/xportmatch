import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap'
import hotel9 from '@/assets/images/category/hotel/4by3/09.jpg'
import hotel2 from '@/assets/images/category/hotel/4by3/02.jpg'
import hotel3 from '@/assets/images/category/hotel/4by3/03.jpg'
import hotel1 from '@/assets/images/category/hotel/4by3/01.jpg'
import FeatureBadge from '../badge'
import { FaFutbol } from 'react-icons/fa'

const PageContentDetails = () => {

    const court = {
        id: 1,
        name: 'Cancha Fútbol 5 La Sabana',
        sale: '20% Off',
        images: [hotel9, hotel2, hotel3, hotel1],
        rating: 4.6,
        features: ['Iluminación', 'Parqueo', 'Duchas', 'Gradería'],
        price: 25000,
        address: 'La Sabana, San José, Costa Rica',
        schemes: ['Aprobado por la Federación Costarricense de Fútbol']
    }

    return (
        <Card className="bg-transparent p-0">
            <CardHeader className="bg-transparent border-bottom p-0 pb-3">
                <h3 className="mb-0">Detalles de la Cancha</h3>
            </CardHeader>
            <CardBody className="p-0 pt-3">
                <Row className="my-4">
                    <Col>
                        <h5>Descripcion</h5>
                        <p className="mb-4">
                            Cancha de fútbol de alta calidad ubicada en el corazón de la ciudad, equipada con césped artificial de última generación y
                            sistemas de iluminación para partidos nocturnos. Ideal para entrenamientos, partidos amistosos y ligas locales. Ofrecemos
                            instalaciones modernas, vestuarios limpios y un ambiente seguro para jugadores de todas las edades y niveles.
                        </p>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col>
                        <h5>Tipo de Cancha</h5>
                        <div className="mt-3 d-flex flex-wrap gap-2 mb-2 mb-sm-3 align-items-center">
                            <FaFutbol className="me-2" />Fútbol 5
                        </div>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col>
                        <h5>Servicios Adicionales</h5>
                        <div className="mt-3 d-flex flex-wrap gap-2 mb-2 mb-sm-3">
                            {court.features.map((feature, idx) => (
                                <FeatureBadge key={idx} label={feature} />
                            ))}
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default PageContentDetails
