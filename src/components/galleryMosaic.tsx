import { GlightBox } from '@/components/legacy'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsFullscreen } from 'react-icons/bs'

import { Link } from 'react-router-dom'

import gallery11 from '@/assets/images/gallery/11.jpg'
import gallery12 from '@/assets/images/gallery/12.jpg'
import gallery13 from '@/assets/images/gallery/13.jpg'
import gallery14 from '@/assets/images/gallery/14.jpg'
import gallery15 from '@/assets/images/gallery/15.jpg'
import gallery16 from '@/assets/images/gallery/16.jpg'

const GalleryMosaic = () => {

    return (
        <>
            <section className="card-grid pt-0">
                <Container>
                    <Row className="g-2">
                        <Col md={6}>
                            <GlightBox data-glightbox data-gallery="gallery" image={gallery14}>
                                <Card
                                    className="card-grid-lg card-element-hover card-overlay-hover overflow-hidden"
                                    style={{ backgroundImage: `url(${gallery14})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}
                                >
                                    <div className="hover-element position-absolute w-100 h-100">
                                        <BsFullscreen
                                            size={28}
                                            className=" fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                                        />
                                    </div>
                                </Card>
                            </GlightBox>
                        </Col>
                        <Col md={6}>
                            <Row className="g-2">
                                <Col xs={12}>
                                    <GlightBox data-glightbox data-gallery="gallery" image={gallery13}>
                                        <Card
                                            className="card-grid-sm card-element-hover card-overlay-hover overflow-hidden"
                                            style={{ backgroundImage: `url(${gallery13})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}
                                        >
                                            <div className="hover-element position-absolute w-100 h-100">
                                                <BsFullscreen
                                                    size={28}
                                                    className=" fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                                                />
                                            </div>
                                        </Card>
                                    </GlightBox>
                                </Col>
                                <Col md={6}>
                                    <GlightBox data-glightbox data-gallery="gallery" image={gallery12}>
                                        <Card
                                            className="card-grid-sm card-element-hover card-overlay-hover overflow-hidden"
                                            style={{ backgroundImage: `url(${gallery12})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}
                                        >
                                            <div className="hover-element position-absolute w-100 h-100">
                                                <BsFullscreen
                                                    size={28}
                                                    className="bifs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                                                />
                                            </div>
                                        </Card>
                                    </GlightBox>
                                </Col>
                                <Col md={6}>
                                    <Card
                                        className="card-grid-sm overflow-hidden"
                                        style={{ backgroundImage: `url(${gallery11})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}
                                    >
                                        <div className="bg-overlay bg-dark opacity-7" />
                                        <GlightBox data-glightbox data-gallery="gallery" image={gallery11} className="stretched-link z-index-9" />
                                        <GlightBox data-glightbox data-gallery="gallery" image={gallery15} />
                                        <GlightBox data-glightbox data-gallery="gallery" image={gallery16} />
                                        <div className="card-img-overlay d-flex h-100 w-100">
                                            <h6 className="card-title m-auto fw-light text-decoration-underline">
                                                <Link to="" className="text-white">
                                                    View all
                                                </Link>
                                            </h6>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default GalleryMosaic
