import { PageMetaData } from '@/components/legacy'
import TopNavBar from './legacy/hotels/Home/components/TopNavBar'
import FeaturedHoliday from './legacy/hotels/Home/components/FeaturedHoliday'
import FeaturedHotels from './legacy/hotels/Home/components/FeaturedHotels'
import Footer from '@/layouts/legacy/AgentLayout/Footer'
import FooterWithLinks from '@/layouts/legacy/HelpLayout/FooterWithLinks'
import NearbyPlaces from './legacy/hotels/Home/components/NearbyPlaces'
import About from './legacy/directories/Home/components/About'
import Gallery from './legacy/heroes/ImageGallery/components/Gallery'
import ActionBox from './legacy/directories/Home/components/ActionBox'

const Home = () => {
    return (
        <>
            <PageMetaData title="Hotel - Home" />
            <TopNavBar />
            <main>
                <Gallery />
                <FeaturedHoliday />
                <FeaturedHotels />
                <ActionBox />
                <About />
                <NearbyPlaces />
            </main>
            <FooterWithLinks />
            <Footer />
        </>
    )
}

export default Home
