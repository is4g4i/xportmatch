import { Currency } from "@/constants/globals"
import { Card, Badge } from "react-bootstrap"
import ActionButton from "./actionButton"
import { useCourtTabsStore } from "@/store/useCourtTabStore"
import { BsArrowRight, BsPeopleFill, BsClock } from "react-icons/bs"

const PricingCard = () => {
    const setActiveTab = useCourtTabsStore((s) => s.setActiveTab)
    const price = 16000

    return (
        <Card className="border-0 shadow-sm bg-mode">
            <Card.Body className="d-flex flex-column gap-3">
                {/* Contexto */}
                <div>
                    <Badge bg="success-subtle" text="success" className="mb-2">
                        Disponible hoy
                    </Badge>
                    <h5 className="mb-1">Reserva tu mejenga</h5>
                </div>


                {/* Beneficios rápidos */}
                <div className="d-flex flex-wrap gap-3 small ">
                    <span className="d-flex align-items-center gap-1">
                        <BsPeopleFill /> Hasta 10 jugadores
                    </span>
                    <span className="d-flex align-items-center gap-1">
                        <BsClock /> 60 minutos
                    </span>
                </div>

                {/* Precio */}
                <div className="d-flex align-items-end gap-2">
                    <span className="small">Desde</span>
                    <h3 className="text-success mb-0">
                        {Currency}
                        {price}
                    </h3>
                    <span className=" mb-1">/hora</span>
                </div>


                {/* CTA */}
                <ActionButton
                    onClick={() => setActiveTab("booking")}
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={<BsArrowRight />}
                >
                    Reservar ahora
                </ActionButton>
            </Card.Body>
        </Card>
    )
}

export default PricingCard
