import PageMetaData from '@/components/pageMetaData'
import About from '@/components/about'
import Hero from '@/components/heroHome'
import BannerCta from '@/components/banner'
import Footer from '@/components/footer'
import Featured from '@/components/featured'
import NavBar from '@/components/navbar'
// import ItemCardRow from '@/components/itemCardRow'

import fuchibol4 from '@/assets/images/xportMatch/fuchibol4.png'
import { BsStarFill } from 'react-icons/bs'

const Home = () => {
    return (
        <>
            <PageMetaData title="Xportmatch | Inicio" />
            <NavBar />
            <main>
                <Hero />
                <About />
                <BannerCta
                    backgroundImage={fuchibol4}
                    badgeText="Recomendado"
                    badgeIcon={BsStarFill}
                    title="Comienza a buscar la cancha para tus mejengas"
                    highlightWord="mejengas"
                    description="Descubre nuestras canchas recomendadas y reserva la tuya hoy mismo para disfrutar de un partido inolvidable con amigos y familiares."
                    buttonText="Reservar"
                    navigateTo="/reserve"
                />
                <Featured />
                {/* <ItemCardRow /> */}
            </main>
            <Footer />
        </>
    )
}
export default Home