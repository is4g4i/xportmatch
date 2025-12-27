import { SelectFormInput } from '@/components/legacy'
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'
import { BsGeoAlt, BsSearch } from 'react-icons/bs'
import { FaCrosshairs } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import bgImg20 from '@/assets/images/xportMatch/fuchibol2.jpg'
import { PROVINCES_CR } from "@/constants/locations";
import { SPORTS_OPTIONS } from "@/constants/sports";
import { UnderlineCRForText } from '@/assets/svgs/svgs'

const Hero = () => {
    return (
        <section
            className="position-relative py-8 py-lg-9"
            style={{ backgroundImage: `url(${bgImg20})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}
        >
            <div className="bg-overlay bg-dark opacity-8" />
            <Container className="z-index-9 position-relative">
                <Row className="py-sm-5">
                    <Col xl={8} className="m-auto text-center">
                        <h6 className="text-white fw-normal mb-3">Tu aplicacion para reserva de canchas en Costa Rica</h6>
                        <h1 className="display-4 text-white mb-0">
                            Bienvenidos a
                            <span className="position-relative z-index-9 d-block">
                                Xport Match
                                <span className="position-absolute top-50 start-50 translate-middle z-index-n1 d-none d-md-block mt-4">
                                    <UnderlineCRForText />
                                </span>
                            </span>
                        </h1>
                    </Col>
                    <Col xl={10} className="mx-auto">
                        <div className="bg-blur bg-white bg-opacity-10 border border-light border-opacity-25 rounded-3 p-4 mt-5">
                            <form className="row g-3 justify-content-center align-items-center">
                                <Col lg={5}>
                                    <Dropdown className="form-input-dropdown position-relative">
                                        <DropdownToggle
                                            as="input"
                                            className="form-control form-control-lg me-1 ps-5 arrow-none"
                                            placeholder="Estoy buscando..."
                                        />
                                        <DropdownMenu className="input-dropdown shadow rounded-0 rounded-bottom w-100">
                                            {SPORTS_OPTIONS.map((sport) => (
                                                <li key={sport.id}>
                                                    <DropdownItem className="items-center py-2 gap-2">
                                                        {sport.icon} {sport.label}
                                                    </DropdownItem>
                                                </li>
                                            ))}
                                        </DropdownMenu>

                                        <span className="position-absolute top-50 start-0 translate-middle ps-5">
                                            <BsSearch className=" fs-5" />
                                        </span>
                                    </Dropdown>
                                </Col>
                                <Col lg={5}>
                                    <div className="form-mix-icon-input form-size-lg">
                                        <SelectFormInput
                                            className="form-select js-choice"
                                            data-search-enabled="true"
                                        >
                                            {[
                                                <option key="default" value={-1}>
                                                    Provincia
                                                </option>,
                                                ...PROVINCES_CR.map((province) => (
                                                    <option key={province} value={province}>
                                                        {province}
                                                    </option>
                                                ))
                                            ]}
                                        </SelectFormInput>
                                        <span className="position-absolute top-50 start-0 translate-middle ps-5">
                                            <BsGeoAlt className="fs-5" />
                                        </span>
                                        <Link to="" className="h6 mb-0 position-absolute top-50 end-0 translate-middle pe-1">
                                            <FaCrosshairs />
                                        </Link>
                                    </div>
                                </Col>
                                <Col lg={2} className="d-grid">
                                    <Link className="btn btn-lg btn-primary mb-0" to="">
                                        Buscar
                                    </Link>
                                </Col>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero
