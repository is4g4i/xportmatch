import ItemCard from './itemCard'
import { Container, Row } from 'react-bootstrap'
import { itemCards } from '@/constants/home'

const itemCardRow = () => {
    return (
        <section className="pt-0 pt-md-5">
            <Container>
                <Row className="mb-4">
                    <div className="col-12 text-center">
                        <h2 className="mb-0">Nuestras Mejores Canchas</h2>
                    </div>
                </Row>
                <Row className="g-4">
                    <ItemCard itemCards={itemCards} />
                </Row>
            </Container>
        </section>
    )
}

export default itemCardRow
