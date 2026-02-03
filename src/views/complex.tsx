
import { GlightBox, PageMetaData } from '@/components/legacy'
import aboutImg8 from '@/assets/images/about/08.jpg'
import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import SimpleHero from '@/components/simpleHero'
import bgImg5 from '@/assets/images/bg/05.jpg'
import ComplexIntroHero from '@/components/complexIntroHero'
import { Card, CardBody, CardHeader, Col, Row, Image, Container } from 'react-bootstrap'
import WorkingHours from '@/components/workingHours'

import directory2 from '@/assets/images/category/directory/02.jpg'
import directory3 from '@/assets/images/category/directory/03.jpg'
import directory7 from '@/assets/images/category/directory/07.jpg'
import directory8 from '@/assets/images/category/directory/08.jpg'
import directory9 from '@/assets/images/category/directory/09.jpg'
import directory10 from '@/assets/images/category/directory/10.jpg'
import directory11 from '@/assets/images/category/directory/11.jpg'
import { BsCalendar, BsClock, BsFullscreen } from 'react-icons/bs'
import { FaFutbol } from 'react-icons/fa6'
import DealCard from '@/components/dealCard'
import DirectionCard from '@/components/directionCard'

const galleryImages = [directory11, directory9, directory2, directory3, directory10, directory8, directory7]

export const directoryDeals = [
    {
        category: {
            name: "Fútbol 5",
            icon: FaFutbol,
        },
        name: "Reserva de cancha + balón oficial incluido",
        price: 25000,
        salePrice: 20000,
        sale: "20% off",
        valid: [
            {
                icon: BsCalendar,
                label: "Lun - Vie",
            },
            {
                icon: BsClock,
                label: "4 PM - 10 PM",
            },
        ],
    }
]

const DirectoryDetail = () => {
    return (
        <>
            <PageMetaData title={"Xportmatch | Complejo"} />
            <NavBar />
            <main>
                <SimpleHero backgroundImage={bgImg5} title="Complejo Deportivo" />
                <ComplexIntroHero
                    backgroundImage={aboutImg8}
                    title="Complejo Deportivo La Sabana"
                    description="Complejo deportivo con instalaciones modernas y espacios para múltiples actividades."
                    duration="2 días / 3 noches"
                    price={16000}
                />
                <Container className="my-5">

                </Container>

                <section className="pt-0">
                    <Container>
                        <Row className="g-4 g-lg-5">
                            <Col lg={7} xl={8}>
                                <Card className="bg-transparent mb-4">
                                    <CardHeader className="bg-transparent border-bottom px-0 pt-0">
                                        <h4 className="mb-0">Descripcion del Complejo</h4>
                                    </CardHeader>
                                    <CardBody className="px-0 pb-0">
                                        <p className="mb-3">
                                            Demesne far-hearted suppose venture excited see had has. Dependent on so extremely delivered by. Yet no jokes worse her why.{' '}
                                            <b>Bed one supposing breakfast day fulfilled off depending questions.</b> As it so contrasted oh estimating instrument. Size like body
                                            some one had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise
                                            effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in. We understand that theory is
                                            important to build a solid foundation, we understand that theory alone isn’t going to get the job done so that’s why this is packed with
                                            practical hands-on examples that you can follow step by step.
                                        </p>
                                        <p className="mb-0">
                                            Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh
                                            truth. Large above be to means. Dashwood does provide stronger is.
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="bg-transparent mb-4">
                                    <CardHeader className="bg-transparent border-bottom px-0">
                                        <h4 className="mb-0">Galeria de Imagenes</h4>
                                    </CardHeader>
                                    <CardBody className="px-0 pb-0">
                                        <Row className="g-4">
                                            {galleryImages.map((image, idx) => {
                                                return (
                                                    <Col md={4} key={idx}>
                                                        <GlightBox className="w-100 h-100" image={image}>
                                                            <Card className="card-element-hover card-overlay-hover overflow-hidden">
                                                                <Image src={image} className="card-img" />
                                                                <div className="hover-element w-100 h-100">
                                                                    <BsFullscreen
                                                                        size={28}
                                                                        className=" fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                                                                    />
                                                                </div>
                                                            </Card>
                                                        </GlightBox>
                                                    </Col>
                                                )
                                            })}
                                        </Row>
                                    </CardBody>
                                </Card>

                                {directoryDeals.length > 0 && <Card className="bg-transparent mb-4">
                                    <CardHeader className="bg-transparent px-0">
                                        <h4 className="mb-0">Promociones</h4>
                                    </CardHeader>
                                    <CardBody className="px-0 py-0">
                                        <Row className="g-2">
                                            {directoryDeals.map((deal, idx) => (
                                                <DealCard deal={deal} key={idx} />
                                            ))}
                                        </Row>
                                    </CardBody>
                                </Card>}

                            </Col>
                            <Col lg={5} xl={4}>
                                <DirectionCard />
                                <WorkingHours />
                            </Col>
                        </Row>
                    </Container>
                </section>

            </main>

            <Footer />

        </>
    )
}

export default DirectoryDetail