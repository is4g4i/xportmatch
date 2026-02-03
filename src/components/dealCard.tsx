import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { currency } from '@/states/legacy'
import { BsPlusLg } from 'react-icons/bs'

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
}
export type IconType = (props: IconBaseProps) => JSX.Element;


export type DirectoryDealType = {
    category: {
        name: string
        icon: IconType
    }
    name: string
    price: number
    sale: string
    salePrice: number
    valid: {
        icon: IconType
        label: string
    }[]
}
const DealCard = ({ deal }: { deal: DirectoryDealType }) => {
    const Icon = deal.category.icon
    return (
        <Card className="card-body border mb-4">
            <div className="d-sm-flex justify-content-between mb-2">
                <div className="mb-2 mb-sm-0">
                    <div className="badge text-bg-dark me-1">
                        <Icon size={14} className=" fa-fw text-warning" /> {deal.category.name}
                    </div>
                    <div className="badge text-bg-success">{deal.sale}</div>
                </div>
                <span className="text-success">Free Cancellation</span>
            </div>
            <h5 className="card-title mb-2">
                <Link to="">{deal.name}</Link>
            </h5>
            <div className="d-flex align-items-center flex-wrap">
                <span className="me-2">Valido de:</span>
                <ul className="nav nav-divider h6 fw-light mb-0">
                    {deal.valid.map((item, idx) => {
                        const Icon = item.icon
                        return (
                            <li key={idx} className="nav-item">
                                <Icon className=" me-1 mb-1" />
                                {item.label}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="d-sm-flex justify-content-between mt-4">
                <div className="hstack gap-1">
                    <h5 className="mb-0">
                        {currency}
                        {deal.salePrice}
                    </h5>
                    <span className="text-decoration-line-through">
                        {currency}
                        {deal.price}
                    </span>
                </div>
                <div className="mt-2 mt-sm-0 d-flex align-items-center gap-1">
                    <Button variant="light" size="sm" className="mb-0 me-1" data-bs-toggle="modal" data-bs-target="#detailModal">
                        View Details
                    </Button>
                    <Button variant="primary" size="sm" className="mb-0 gap-1 flex-centered">
                        <BsPlusLg /> Add
                    </Button>
                </div>
            </div>
        </Card>
    )
}

export default DealCard
