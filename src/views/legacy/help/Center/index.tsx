import { PageMetaData } from '@/components/legacy'
import ActionBoxes from './components/ActionBoxes'
import FAQs from './components/FAQs'
import Hero from './components/Hero'
import PopularArticleSlider from './components/PopularArticleSlider'

const HelpCenter = () => {
  return (
    <>
      <PageMetaData title="Help Center" />

      <Hero />

      <FAQs />

      <ActionBoxes />

      <PopularArticleSlider />
    </>
  )
}

export default HelpCenter
