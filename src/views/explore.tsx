import PageMetaData from "@/components/legacy/PageMetaData"
import Footer from '@/components/footer'
import bgImg5 from '@/assets/images/bg/05.jpg'
import NavBar from "@/components/navbar"
import SimpleHero from "@/components/simpleHero"
import CourtsGrid from "@/components/courtsGrid"
import CourtsList from "@/components/courtsList"
import { hotels } from '@/constants/explore'
import { useCourtViewStore } from '@/store/useCourtViewStore'

export type ViewMode = 'grid' | 'list'

const Explore = () => {
    const viewMode = useCourtViewStore((state) => state.viewMode)

    return (
        <>
            <PageMetaData title="Xportmatch | Canchas" />
            <NavBar />

            <main>
                <SimpleHero title="Explorar Canchas" backgroundImage={bgImg5} />

                <div className="d-none d-xl-block">
                    {viewMode === 'grid' && <CourtsGrid hotels={hotels} />}
                    {viewMode === 'list' && <CourtsList hotels={hotels} />}
                </div>

                {/* LIST — solo mobile */}
                <div className="d-xl-none">
                    <CourtsList hotels={hotels} />
                </div>
            </main>

            <Footer />
        </>
    )
}


export default Explore
