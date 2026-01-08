import { Col, Container, Image, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import logoLight from '@/assets/images/logo-light.svg'
import { developedByLink, currentYear } from '@/states/legacy'
import { Pages } from '@/constants/globals'

const Footer = () => {
    return (
        <div className="bg-dark py-7">
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
                        <ul className="list-inline mt-3 mb-0">
                            <li className="list-inline-item mx-2">
                                <Link className="btn btn-white btn-sm shadow px-2 text-facebook flex-centered py-2" to="">
                                    <FaFacebookF />
                                </Link>
                            </li>
                            <li className="list-inline-item mx-2">
                                <Link className="btn btn-white btn-sm shadow px-2 text-instagram flex-centered py-2" to="">
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li className="list-inline-item mx-2">
                                <Link className="btn btn-white btn-sm shadow px-2 text-twitter flex-centered py-2" to="">
                                    <FaTwitter />
                                </Link>
                            </li>
                            <li className="list-inline-item mx-2">
                                <Link className="btn btn-white btn-sm shadow px-2 text-linkedin flex-centered py-2" to="">
                                    <FaLinkedinIn />
                                </Link>
                            </li>
                        </ul>
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
