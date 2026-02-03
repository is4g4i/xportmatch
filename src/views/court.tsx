
import { Navigate, useParams } from 'react-router-dom'

import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import SimpleHero from '@/components/simpleHero'
import bgImg5 from '@/assets/images/bg/05.jpg'
import PageContentTabs from '@/components/pageContentTabs/pageContentTabs'
import CourtGallery from '@/components/courtGallery'
import PageMetaData from '@/components/pageMetaData'

const Court = () => {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <Navigate to="/404" />;
    }

    return (
        <>
            <PageMetaData title={"Xportmatch | Cancha"} />
            <NavBar />
            <main>
                <SimpleHero backgroundImage={bgImg5} />
                <CourtGallery/>
                <PageContentTabs />
                {/* <AboutHotel /> */}
            </main>

            <Footer />
        </>
    )
}

export default Court
