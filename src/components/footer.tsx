import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logoLight from '@/assets/images/logo-light.svg'
import { developedByLink, currentYear } from '@/states/legacy'
import { Pages } from '@/constants/globals'
import SocialLinks from './socialLinks'

const Footer = () => {
    return (
        <div className="bg-dark py-7 mt-6">
            <Container>
                <Row className="mx-auto">
                    <Col lg={6} className="mx-auto text-center">
                        <Image className="mx-auto h-60px" src={logoLight} alt="logo" />
                        <p className="mt-3 text-white">
                            Tu aplicacion para reserva de canchas en Costa Rica
                        </p>
                        <ul className="nav justify-content-between text-primary-hover mt-3 mt-md-0">
                            {Pages.map((page, idx) => {
                                return (
                                    <li key={idx} className="nav-item">
                                        <Link className="nav-link p-2 text-white" to={page.url}>
                                            {page.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                        <SocialLinks
                            variant="light"
                            platforms={[
                                { key: "facebook", url: "https://facebook.com/xportmatch" },
                                { key: "instagram", url: "https://instagram.com/xportmatch" },
                                { key: "twitter", url: "https://twitter.com/xportmatch" },
                                { key: "linkedin", url: "https://linkedin.com/company/xportmatch" }
                            ]}
                        />
                        <div className="text-body-secondary text-primary-hover mt-3">
                            {' '}
                            Copyrights ©{currentYear} XportMatch. Desarrollado por{' '}
                            <a href={developedByLink} target="_blank" className="text-body-secondary">
                                XportMatch Team
                            </a>, Todos los derechos reservados.
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
