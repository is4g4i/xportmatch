import { Col, Container, Row } from 'react-bootstrap'
import CourtGridCard from '@/components/courtGridCard'
import CourtListGridFilter from './courtListGridFilter'
import { type CourtType } from '@/constants/reserve'

type CourtsGridProps = {
    courts: CourtType[]
}
const CourtsGrid = ({ courts }: CourtsGridProps) => {
    return (
        <section className="pt-0">
            <CourtListGridFilter />
            <Container>
                <Row className="g-4">
                    {courts.map((court) => (
                        <Col key={court.id} md={6} xl={4}>
                            <CourtGridCard key={court.id} court={court} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default CourtsGrid
