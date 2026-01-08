import { Col, Container, Row, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'react-bootstrap'
import useToggle from '@/hooks/useToggle'
import CourtListRowFilter from '@/components/courtListRowFilter'
import CourtRowCard from '@/components/courtRowCard'
import CourtViewModeToggle from '@/components/courtViewToggle'
import { type CourtType } from '@/constants/reserve'
import { BsSliders } from 'react-icons/bs'
import { useCourtFilterSidebarStore } from '@/store/useCourtFilterSidebarStore'
import { useEffect } from 'react'
import { useIsMobile } from '@/hooks/useIsMobile'

type CourtsListProps = {
    courts: CourtType[]
}

const CourtsList = ({ courts }: CourtsListProps) => {
    const { isOpen, toggle } = useToggle()
    const toggleDesktop = useCourtFilterSidebarStore((s) => s.toggle)
    const isOpenDesktop = useCourtFilterSidebarStore((s) => s.isOpen)
    const isMobile = useIsMobile()
    const showFilters = useCourtFilterSidebarStore((s) => s.open)

    useEffect(() => {
        if (isMobile) {
            showFilters()
        }
    }, [isMobile, showFilters])

    return (
        <section className="pt-0">
            <Container>
                <Row className='d-none d-xl-block'>
                    <Col xs={12}>
                        <div className="d-flex justify-content-between mb-4">
                            <label
                                onClick={toggleDesktop}
                                className="btn btn-primary-soft btn-primary-check mb-0 items-center"
                                htmlFor="btn-check-soft"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFilter"
                                aria-controls="collapseFilter"
                            >
                                <BsSliders className=" fa-fe me-2" />
                                Mostrar Filtros
                            </label>
                            <CourtViewModeToggle />
                        </div>
                    </Col>
                </Row>
                <Row>
                    {/* Filters */}
                    <Col xl={4} xxl={3} className={`court-filters-col d-xl-block ${isOpenDesktop ? 'is-open' : 'is-closed'}`}>
                        <div className="d-none d-xl-block">
                            <CourtListRowFilter />
                            <div className="d-flex justify-content-between p-2 p-xl-0 mt-xl-4">
                                <button className="btn btn-link p-0 mb-0">Clear all</button>
                                <button className="btn btn-primary mb-0">Filter Result</button>
                            </div>
                        </div>
                        <div className='d-xl-none d-flex justify-content-between align-items-center mb-4'>
                            <label
                                onClick={toggle}
                                className="btn btn-primary-soft btn-primary-check mb-0 items-center"
                                htmlFor="btn-check-soft"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFilter"
                                aria-controls="collapseFilter"
                            >
                                <BsSliders className=" fa-fe me-2" />
                                Mostrar Filtros
                            </label>
                            <div className="d-none d-xl-block">
                                <CourtViewModeToggle />
                            </div>
                        </div>

                        <Offcanvas placement="end" show={isOpen} onHide={toggle} className="offcanvas-xl">
                            <OffcanvasHeader closeButton>
                                <h5 className="offcanvas-title">Advance Filters</h5>
                            </OffcanvasHeader>
                            <OffcanvasBody className="p-3 p-xl-0">
                                <CourtListRowFilter />
                            </OffcanvasBody>
                            <div className="d-flex justify-content-between p-2 p-xl-0 mt-xl-4">
                                <button className="btn btn-link p-0 mb-0">Clear all</button>
                                <button className="btn btn-primary mb-0">Filter Result</button>
                            </div>
                        </Offcanvas>
                    </Col>

                    {/* List */}
                    <Col
                        xl={isOpenDesktop ? 8 : 12}
                        xxl={isOpenDesktop ? 9 : 12}
                    >

                        <div className="vstack gap-4">
                            {courts.map((court, idx) => (
                                <CourtRowCard key={idx} court={court} />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CourtsList
