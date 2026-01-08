import { TinySlider } from '@/components/legacy'
import { useLayoutContext } from '@/states/legacy'
import { Card, CardBody, CardFooter } from 'react-bootstrap'
import { renderToString } from 'react-dom/server'
import { BsArrowLeft, BsArrowRight, BsGeoAlt } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { type TinySliderSettings } from 'tiny-slider'
import { getCourtRoute } from "@/utils/navigateToCourt";
import { useNavigate } from "react-router-dom";
import { type CourtType } from '@/constants/reserve'
import { Currency } from '@/constants/globals'
import FeatureBadge from '@/components/badge'
import 'tiny-slider/dist/tiny-slider.css'

const CourtGridCard = ({ court }: { court: CourtType }) => {
  const navigate = useNavigate();
  const goToCourt = (courtId: number) => {
    navigate(getCourtRoute(courtId));
  };
  const { address, features, images, name, price, sale } = court
  const { dir } = useLayoutContext()

  const gridSliderSettings: TinySliderSettings = {
    nested: 'inner',
    autoplay: false,
    controls: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    controlsText: [renderToString(<BsArrowLeft size={16} />), renderToString(<BsArrowRight size={16} />)],
    arrowKeys: true,
    items: 1,
    autoplayDirection: dir === 'ltr' ? 'forward' : 'backward',
    nav: false,
  }
  return (
    <Card className="shadow p-2 pb-0 h-100 court-grid-card">
      {sale && (
        <div className="position-absolute top-0 start-0 z-index-1 m-4">
          <div className="badge bg-danger text-white">{sale}</div>
        </div>
      )}
      <div className="tiny-slider arrow-round arrow-xs arrow-dark rounded-2 overflow-hidden">
        <TinySlider settings={gridSliderSettings}>
          {images.map((image, idx) => (
            <div key={idx}>
              <img src={image} alt="Card image" />
            </div>
          ))}
        </TinySlider>
      </div>
      <CardBody className="px-3 pb-0">
        <h5 className="card-title">
          <Link to={getCourtRoute(court.id)}>{name}</Link>
        </h5>
        <small className="items-center">
          <BsGeoAlt className="me-2" />
          {address}
        </small>
        <div className="d-flex flex-wrap gap-2 my-3 mb-sm-3">
          {features.map((feature, idx) => (
            <FeatureBadge key={idx} label={feature} />
          ))}
        </div>

      </CardBody>
      <CardFooter className="pt-0 w-100">
        <div className="d-sm-flex justify-content-sm-between align-items-center">
          <div className="d-flex align-items-center">
            Desde {""}
            <h5 className="fw-normal text-success mb-0 ms-1">
              {""}
              {Currency}
              {price}
            </h5>
            <span className="mb-0 me-2">/hora</span>
          </div>
          <div className="mt-2 mt-sm-0">
            <button
              type="button"
              onClick={() => goToCourt(court.id)}
              className="btn btn-sm btn-primary-soft btn-primary-check mb-0 w-100 items-center"
            >
              Reservar
              <BsArrowRight className="ms-2" />
            </button>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default CourtGridCard
