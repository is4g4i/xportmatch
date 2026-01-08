
import { Currency } from '@/constants/globals';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PricingCard = () => {

    const price = 16000;

    return (
        <Card className="card-body border bg-transparent d-flex g-4">
            <div className="d-grid gap-2">
                <Link to="/tours/booking" className="btn btn-primary">
                    Book Now
                </Link>
            </div>
            <div className="d-flex align-items-center mb-2">
                Desde {""}
                <h5 className="fw-normal text-success mb-0 ms-1">
                    {""}
                    {Currency}
                    {price}
                </h5>
                <span className="mb-0 me-2">/hora</span>
            </div>
        </Card>
    )
}

export default PricingCard
