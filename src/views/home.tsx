import PageMetaData from '@/components/pageMetaData'
import About from '@/components/about'
import Hero from '@/components/heroHome'
import BannerCta from '@/components/banner'
import Footer from '@/components/footer'
import Featured from '@/components/featured'
import NavBar from '@/components/navbar'
// import ItemCardRow from '@/components/itemCardRow'

const Home = () => {
    return (
        <>
            <PageMetaData title="Xportmatch | Inicio" />
            <NavBar />
            <main>
                <Hero />
                <About />   
                <BannerCta />
                <Featured />
                {/* <ItemCardRow /> */}
            </main>
            <Footer />
        </>
    )
}
export default Home