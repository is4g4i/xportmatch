
import Help from '@/views/legacy/tours/Detail/components/Help'
import TourItinerary from '@/views/legacy/tours/Detail/components/TourItinerary'
import { Container, Row, Col, TabContent, TabPane, TabContainer, Nav, NavItem, NavLink } from 'react-bootstrap'
import PageContentDetails from './pageContentDetails'
import PageContentCalendar from './pageContentCalendar'
import PriceSummary from '../priceSummary'
import WorkingHours from '../workingHours'
import PricingCard from '../pricingCard'

const PageContentTabs = () => {
    return (
        <TabContainer defaultActiveKey="first">
            <section className="py-0">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Nav className="nav-pills nav-justified nav-responsive bg-primary bg-opacity-10 rounded p-2" id="tour-pills-tab" role="tablist">
                                <NavItem role="presentation">
                                    <NavLink eventKey="first" className="mb-0">
                                        Detalles
                                    </NavLink>
                                </NavItem>
                                <NavItem role="presentation">
                                    <NavLink eventKey="second" className="mb-0">
                                        Horarios
                                    </NavLink>
                                </NavItem>
                                <NavItem role="presentation">
                                    <NavLink eventKey="third" className="mb-0">
                                        Reservar
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="pt-4 pt-md-5">
                <Container>
                    <Row className="g-4 g-md-5">
                        <Col xl={8}>
                            <TabContent className="mb-0" id="tour-pills-tabContent">
                                <TabPane eventKey="first" className="fade show">
                                    <PageContentDetails />
                                </TabPane>
                                <TabPane eventKey="second" className="fade">
                                    <PageContentCalendar />
                                </TabPane>
                                <TabPane eventKey="third" className="fade">
                                    <TourItinerary />
                                </TabPane>
                            </TabContent>
                        </Col>
                        <Col as="aside" xl="4">
                            <Row className="g-4">
                                <Col md={6} xl={12} className="g-4">
                                    <PricingCard />
                                </Col>
                                <Col md={6} xl={12}>
                                    <PriceSummary />
                                </Col>
                                <Col md={6} xl={12}>
                                    <WorkingHours />
                                </Col>
                                <Col md={6} xl={12}>
                                    <Help />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </TabContainer>
    )
}

export default PageContentTabs