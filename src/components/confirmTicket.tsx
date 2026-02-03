import { Card, CardBody, Image } from "react-bootstrap"
import { BsCalendar } from "react-icons/bs"
import gallery4 from "@/assets/images/gallery/04.jpg"
import { Currency } from "@/constants/globals"

type Slot = {
    start: string
    end: string
    price: number
}

type Service = {
    name: string
    price: number
}

type ConfirmTicketProps = {
    date: Date
    slots: Slot[]
    services: Service[]
}

const ConfirmTicket = ({ date, slots, services }: ConfirmTicketProps) => {
    const slotsTotal = slots.reduce((acc, s) => acc + s.price, 0)
    const servicesTotal = services.reduce((acc, s) => acc + s.price, 0)
    const total = slotsTotal + servicesTotal

    return (
        <Card id="booking-confirm-ticket" className="shadow rounded-3 overflow-hidden">

            {/* Header Image */}
            <Image src={gallery4} className="w-100" style={{ maxHeight: "180px", objectFit: "cover" }} />

            <CardBody className="p-4 text-center">

                {/* Title */}
                <h3 className="fw-bold text-success mb-1">🎉 Reserva Confirmada</h3>
                <p className="mb-3">Tu cancha ha sido reservada correctamente</p>

                {/* FECHA */}
                {date && (
                    <div className="border-top pt-3 mt-3 d-flex justify-content-between small">
                        <span><BsCalendar className="me-2" />Fecha</span>
                        <span>{date.toLocaleDateString()}</span>
                    </div>
                )}

                {/* HORARIOS */}
                {slots.length > 0 && (
                    <div className="border-top pt-3 mt-3 text-start">
                        <div className="fw-bold small mb-2">Horarios</div>

                        {slots.map((slot, i) => (
                            <div key={i} className="d-flex justify-content-between small">
                                <span>{slot.start} – {slot.end}</span>
                                <span>{Currency}{slot.price.toLocaleString()}</span>
                            </div>
                        ))}

                        <div className="d-flex justify-content-between fw-semibold small mt-1">
                            <span>Subtotal Horas</span>
                            <span>{Currency}{slotsTotal.toLocaleString()}</span>
                        </div>
                    </div>
                )}

                {/* SERVICIOS */}
                {services.length > 0 && (
                    <div className="border-top pt-3 mt-3 text-start">
                        <div className="fw-bold small mb-2">Servicios</div>

                        {services.map((service) => (
                            <div key={service.name} className="d-flex justify-content-between small">
                                <span>{service.name}</span>
                                <span>{Currency}{service.price.toLocaleString()}</span>
                            </div>
                        ))}

                        <div className="d-flex justify-content-between fw-semibold small mt-1">
                            <span>Subtotal Servicios</span>
                            <span>{Currency}{servicesTotal.toLocaleString()}</span>
                        </div>
                    </div>
                )}


                {/* TOTAL SIEMPRE ABAJO */}
                <div className="border-top pt-3 mt-3 d-flex justify-content-between fw-bold fs-5">
                    <span>Total</span>
                    <span className="text-primary">{Currency}{total.toLocaleString()}</span>
                </div>
                <hr className="my-3" />

                <div className="d-flex justify-content-end gap-2">
                </div>
            </CardBody>
        </Card>
    )
}

export default ConfirmTicket
