import { TinySlider } from '@/components/legacy'
import { useLayoutContext } from '@/states/legacy'
import { Fragment } from 'react'
import { Card, CardBody, Col, Image, Row } from 'react-bootstrap'
import { renderToString } from 'react-dom/server'
import { BsArrowLeft, BsArrowRight, BsGeoAlt, BsPatchCheckFill } from 'react-icons/bs'
import { type TinySliderSettings } from 'tiny-slider'
import 'tiny-slider/dist/tiny-slider.css'
import { Link, useNavigate } from 'react-router-dom'
import { CourtType } from '@/constants/reserve'
import FeatureBadge from './badge'
import { getCourtRoute } from '@/utils/navigateToCourt'
import ShareDropdown from './shareDropdown'
import { Currency } from '@/constants/globals'
import ActionButton from './actionButton'
import { getShareableUrl } from '@/utils/getCurrentUrl'

const CourtRowCard = ({ court }: { court: CourtType }) => {
    const { address, features, images, name, price, sale, schemes } = court

    const { dir } = useLayoutContext()

    const listSliderSettings: TinySliderSettings = {
        nested: 'inner',
        autoplay: false,
        controls: true,
        autoplayButton: false,
        autoplayButtonOutput: false,
        controlsText: [renderToString(<BsArrowLeft size={16} />), renderToString(<BsArrowRight size={16} />)],
        arrowKeys: true,
        items: 1,
        autoplayDirection: dir === 'ltr' ? 'forward' : 'backward',
        nav: false,
    }
    const navigate = useNavigate();
    const goToCourt = (courtId: number) => {
        navigate(getCourtRoute(courtId));
    };
    return (
        <Card className="shadow p-2 court-row-card">
            <Row className="g-0">
                <Col md={5} className="position-relative">
                    {sale && (
                        <div className="position-absolute top-0 start-0 z-index-1 m-2">
                            <div className="badge text-bg-danger">{sale}</div>
                        </div>
                    )}

                    <div className="tiny-slider arrow-round arrow-xs arrow-dark overflow-hidden rounded-2">
                        <TinySlider settings={listSliderSettings}>
                            {images.map((image, idx) => (
                                <div key={idx} className="court-row-media">
                                    <Image src={image} alt="Card image" />
                                </div>
                            ))}
                        </TinySlider>
                    </div>

                </Col>
                <Col md={7}>
                    <CardBody className="py-md-2 d-flex flex-column h-100 position-relative">
                        <div className="d-flex justify-content-end align-items-center">
                            <ul className="list-inline mb-0 z-index-2 d-flex justify-content-end">
                                <ShareDropdown url={getShareableUrl()} />
                            </ul>
                        </div>
                        <h5 className="card-title">
                            <Link to={getCourtRoute(court.id)}>{name}</Link>
                        </h5>
                        <small className="items-center">
                            <BsGeoAlt className="me-2" />
                            {address}
                        </small>

                        <div className="mt-3 d-flex flex-wrap gap-2 mb-2 mb-sm-3">
                            {features.map((feature, idx) => (
                                <FeatureBadge key={idx} label={feature} />
                            ))}
                        </div>

                        <ul className="list-group list-group-borderless small mb-0 mt-2">
                            {schemes ? (
                                <Fragment>
                                    {schemes.map((scheme, idx) => {
                                        return (
                                            <li key={idx} className="list-group-item d-flex text-success p-0 items-center">
                                                <BsPatchCheckFill className="me-2" />
                                                {scheme}
                                            </li>
                                        )
                                    })}
                                </Fragment>
                            ) : (
                                <li className="list-group-item d-flex text-danger p-0 items-center">
                                    <BsPatchCheckFill className="me-2" />
                                    Non Refundable
                                </li>
                            )}
                        </ul>
                        <div className="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
                            <div className="d-flex align-items-center">
                                Desde {""}
                                <h5 className="fw-normal text-success mb-0 ms-1">
                                    {""}
                                    {Currency}
                                    {price}
                                </h5>
                                <span className="mb-0 me-2">/hora</span>
                            </div>
                            <div className="mt-3 mt-sm-0">
                                <ActionButton
                                    onClick={() => goToCourt(court.id)}
                                    variant="primary-soft"
                                    size="sm"
                                    fullWidth
                                    icon={<BsArrowRight />}
                                >
                                    Reservar
                                </ActionButton>
                            </div>
                        </div>
                    </CardBody>
                </Col>
            </Row>
        </Card>
    )
}

export default CourtRowCard
