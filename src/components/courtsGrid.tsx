import { Col, Container, Row } from 'react-bootstrap'
import CourtGridCard from '@/components/courtGridCard'
import CourtListGridFilter from './courtListGridFilter'
import { type HotelsType } from '@/constants/explore'

type CourtExploreGridProps = {
    hotels: HotelsType[]
}
const CourtsGrid = ({ hotels }: CourtExploreGridProps) => {
    return (
        <section className="pt-0">
            <CourtListGridFilter />
            <Container>
                <Row className="g-4">
                    {hotels.map((hotel) => (
                        <Col key={hotel.id} md={6} xl={4}>
                            <CourtGridCard
                                id={hotel.id}
                                name={hotel.name}
                                price={hotel.price}
                                features={hotel.features}
                                images={hotel.images}
                                rating={hotel.rating}
                                sale={hotel.sale}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default CourtsGrid
