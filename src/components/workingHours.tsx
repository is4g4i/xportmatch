import { Card, CardBody, CardHeader, Badge } from "react-bootstrap"
import { BsClock } from "react-icons/bs"

const WorkingHours = () => {
    return (
        <Card className="shadow-sm border-0">
            <CardHeader className="bg-transparent border-bottom d-flex align-items-center gap-3">
                <BsClock />
                <h5 className="mb-0">Horarios de atención</h5>
            </CardHeader>

            <CardBody className="pt-3">
                <ul className="list-group list-group-flush mb-0 small">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="fw-medium">Lunes</span>
                        <Badge bg="secondary" pill>
                            Cerrado
                        </Badge>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="fw-medium">Martes</span>
                        <span >9:00 AM - 8:00 PM</span>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="fw-medium">Miércoles</span>
                        <span >9:00 AM - 8:00 PM</span>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="fw-medium">Jueves</span>
                        <span >9:00 AM - 8:00 PM</span>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="fw-medium">Viernes</span>
                        <span >9:00 AM - 8:00 PM</span>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="fw-medium">Sábado</span>
                        <Badge bg="success-subtle" text="success" pill>
                            Abierto todo el día
                        </Badge>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="fw-medium">Domingo</span>
                        <Badge bg="success-subtle" text="success" pill>
                            Abierto todo el día
                        </Badge>
                    </li>
                </ul>
            </CardBody>
        </Card>
    )
}

export default WorkingHours
