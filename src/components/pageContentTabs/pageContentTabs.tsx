
import { Container, Row, Col, TabContent, TabPane, TabContainer, Nav, NavItem, NavLink } from 'react-bootstrap'
import PageContentDetails from './pageContentDetails'
import PageContentCalendar from './pageContentCalendar'
import PriceSummary from '../priceSummary'
import WorkingHours from '../workingHours'
import PricingCard from '../pricingCard'
import { CourtTab, useCourtTabsStore } from '@/store/useCourtTabStore'
import ComplexCard from '../complexCard'
import fuchibol3 from '@/assets/images/xportMatch/fuchibol2.jpg'
import PageContentBooking from './pageContentBooking'
import HelpCard from '../helpCard'

const PageContentTabs = () => {
    const { activeTab, setActiveTab } = useCourtTabsStore()

    const asideConfig: Record<string, JSX.Element[]> = {
        details: [<PricingCard />, <ComplexCard
            subtitle='Descripcion Mamalona'
            image={fuchibol3}
            title="Complejo Deportivo La Sabana" />],
        schedule: [<PricingCard />, <WorkingHours />],
        booking: [<PriceSummary />, <WorkingHours />, <HelpCard />]
    }

    return (
        <TabContainer
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k as CourtTab)}
        >
            <section className="py-0">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Nav className="nav-pills nav-justified nav-responsive bg-primary bg-opacity-10 rounded p-2" id="tour-pills-tab" role="tablist">
                                <NavItem role="presentation">
                                    <NavLink eventKey="details" className="mb-0">
                                        Detalles
                                    </NavLink>
                                </NavItem>
                                <NavItem role="presentation">
                                    <NavLink eventKey="schedule" className="mb-0">
                                        Horarios
                                    </NavLink>
                                </NavItem>
                                <NavItem role="presentation">
                                    <NavLink eventKey="booking" className="mb-0">
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
                                <TabPane eventKey="details" className="fade show">
                                    <PageContentDetails />
                                </TabPane>
                                <TabPane eventKey="schedule" className="fade">
                                    <PageContentCalendar />
                                </TabPane>
                                <TabPane eventKey="booking" className="fade">
                                    <PageContentBooking />
                                </TabPane>
                            </TabContent>
                        </Col>
                        <Col as="aside" xl="4">
                            <Row className="g-4">
                                {asideConfig[activeTab]?.map((Component, i) => (
                                    <Col key={i} md={6} xl={12}>
                                        {Component}
                                    </Col>
                                ))}
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </section>
        </TabContainer>
    )
}

export default PageContentTabs