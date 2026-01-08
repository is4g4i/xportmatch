import { Button, Col, Container, Row } from 'react-bootstrap'
import { IconType } from 'react-icons'
import { UnderlineCRForText } from '@/assets/svgs/svgs'
import { useNavigate } from 'react-router-dom'

interface BannerCtaProps {
    backgroundImage: string
    badgeText?: string
    badgeIcon?: IconType
    badgeVariant?: string
    title: string
    highlightWord?: string
    description: string
    buttonText: string
    navigateTo: string
}

const BannerCta = ({
    backgroundImage,
    badgeText,
    badgeIcon: BadgeIcon,
    badgeVariant = 'white',
    title,
    highlightWord,
    description,
    buttonText,
    navigateTo
}: BannerCtaProps) => {
    const navigate = useNavigate()

    return (
        <section
            className="my-md-5 position-relative"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center left',
                backgroundSize: 'cover',
            }}
        >
            <div className="bg-overlay bg-dark opacity-4" />

            <Container className='position-relative z-2'>
                <Row className="py-lg-7">
                    <Col lg={6} className="ms-auto">
                        {badgeText && (
                            <h5 className={`badge text-bg-${badgeVariant} mb-3`}>
                                {BadgeIcon && <BadgeIcon size={14} className="text-warning me-2" />}
                                {badgeText}
                            </h5>
                        )}

                        <h2 className="mb-4 text-white">
                            {highlightWord ? (
                                <>
                                    {title.split(highlightWord)[0]}
                                    <span className="position-relative z-index-9">
                                        {highlightWord}
                                        <span className="position-absolute top-50 start-50 translate-middle z-index-n1 d-none d-md-block mt-3">
                                            <UnderlineCRForText />
                                        </span>
                                    </span>
                                    {title.split(highlightWord)[1]}
                                </>
                            ) : (
                                title
                            )}
                        </h2>

                        <p className="text-white mb-4">{description}</p>

                        <Button variant="primary" onClick={() => navigate(navigateTo)}>
                            {buttonText}
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BannerCta
