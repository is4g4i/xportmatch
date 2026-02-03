import { Card, CardBody } from 'react-bootstrap'
import { BsEnvelope, BsGeoAlt } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import SocialLinks from './socialLinks'

const DirectionCard = () => {
    return (
        <Card className="shadow mb-4">
            <div className="card-header border-bottom">
                <h5 className="mb-0">Direccion</h5>
            </div>
            <CardBody>
                <iframe
                    className="w-100 grayscale rounded"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
                    height={200}
                    style={{ border: 0 }}
                    aria-hidden="false"
                    tabIndex={0}
                />
                <ul className="list-group list-group-borderless my-3">
                    <li className="list-group-item">
                        <Link to="" className="h6 fw-normal mb-0 items-center">
                            <BsGeoAlt className=" fa-fw me-2" />
                            5855 W Century Blvd, Los Angeles
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="" className="h6 fw-normal mb-0 items-center">
                            <BsEnvelope className=" fa-fw me-2" />
                            example@gmail.com
                        </Link>
                    </li>
                </ul>
                <div className="list-inline mb-0 mt-3">
                    <span className="list-inline-item">Siguenos en: </span>
                    <SocialLinks
                        variant="solid"
                        platforms={[
                            { key: "facebook", url: "https://facebook.com/xportmatch" },
                            { key: "instagram", url: "https://instagram.com/xportmatch" },
                            { key: "twitter", url: "https://twitter.com/xportmatch" },
                            { key: "linkedin", url: "https://linkedin.com/company/xportmatch" }
                        ]}
                    />
                </div>
            </CardBody>
        </Card>
    )
}

export default DirectionCard
