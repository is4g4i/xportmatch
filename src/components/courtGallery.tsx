import { Col, Container, Row } from 'react-bootstrap'
import { BsEyeFill, BsGeoAlt } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { getCourtRoute } from '@/utils/navigateToCourt'
import ShareDropdown from './shareDropdown'
import GalleryMosaic from './galleryMosaic'

interface CourtGalleryProps {
    id: string;
}

const CourtGallery = ({ id }: CourtGalleryProps) => {

    return (
        <>
            <section className="py-0 pt-sm-2 mb-4">
                <Container className="position-relative">
                    <Row>
                        <Col md={12} className="d-flex justify-content-between align-items-center">
                            <h1 className="fs-2 mb-0">Cancha Deportiva</h1>
                            <ShareDropdown url={`${window.location.origin}${getCourtRoute(id)}`} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="d-flex align-items-center">
                            <p className="fw-bold mb-0 items-center flex-wrap d-flex w-100 gap-2">
                                <span>
                                    <BsGeoAlt className=" me-2" />
                                    San Pedro, San José, Costa Rica
                                </span>
                                <Link
                                    to="/complex"
                                    className="ms-3 text-decoration-underline items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#mapmodal"
                                >
                                    <BsEyeFill className="me-1" />
                                    Ver ubicacion en el complejo.
                                </Link>
                            </p>
                        </Col>

                    </Row>
                </Container>
            </section>

            <GalleryMosaic />
        </>
    )
}

export default CourtGallery
