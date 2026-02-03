import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "react-bootstrap"
import { Currency } from "@/constants/globals"
import { useBookingStore } from "@/store/useBookingStore"
import { useEffect, useRef, useState } from "react"

const PriceSummary = () => {
    const { date: rawDate, slots, services } = useBookingStore()

    const date = rawDate ? new Date(rawDate) : null

    const slotsTotal = slots.reduce((acc, s) => acc + s.price, 0)
    const servicesTotal = services.reduce((acc, s) => acc + s.price, 0)
    const total = slotsTotal + servicesTotal

    const hasData = !!date || slots.length > 0 || services.length > 0

    const [isOpen, setIsOpen] = useState(false)
    const bodyRef = useRef<HTMLDivElement>(null)

    const getDelay = (index: number) => ({
        transitionDelay: `${index * 80}ms`
    })

    useEffect(() => {
        setIsOpen(hasData)
    }, [hasData])

    return (
        <Card className="shadow rounded-2">

            <CardHeader className="border-bottom">
                <CardTitle as="h5" className="mb-0">
                    Detalles de Reserva
                </CardTitle>
            </CardHeader>

            <div
                ref={bodyRef}
                style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                    transition: "all .35s ease"
                }}
            >
                <CardBody>
                    <ul className="list-group list-group-flush">

                        {date && (
                            <li
                                className="list-group-item d-flex justify-content-between py-2 summary-item show"
                                style={getDelay(0)}
                            >
                                <span className="fw-light">Fecha seleccionada</span>
                                <span>{date.toLocaleDateString()}</span>
                            </li>
                        )}

                        {slots.length > 0 && (
                            <li
                                className="list-group-item py-2 summary-item show"
                                style={getDelay(date ? 1 : 0)}
                            >
                                <div className="d-flex justify-content-between fw-light">
                                    <span>Horas ({slots.length})</span>
                                    <span>{Currency}{slotsTotal.toLocaleString()}</span>
                                </div>

                                <ul className="list-unstyled mt-2 mb-0">
                                    {slots.map((slot, i) => (
                                        <li key={`${slot.start}-${slot.end}-${i}`} className="d-flex justify-content-between small py-1">
                                            <span>{slot.start} – {slot.end}</span>
                                            <span>{Currency}{slot.price.toLocaleString()}</span>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )}

                        {services.length > 0 && (
                            <li
                                className="list-group-item py-2 summary-item show"
                                style={getDelay((date ? 1 : 0) + (slots.length > 0 ? 1 : 0))}
                            >
                                <div className="d-flex justify-content-between fw-light">
                                    <span>Servicios ({services.length})</span>
                                    <span>{Currency}{servicesTotal.toLocaleString()}</span>
                                </div>

                                <ul className="list-unstyled mt-2 mb-0">
                                    {services.map((service) => (
                                        <li key={service.id} className="d-flex justify-content-between small py-1">
                                            <span>{service.name}</span>
                                            <span>{Currency}{service.price.toLocaleString()}</span>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )}


                    </ul>
                </CardBody>
            </div>

            {isOpen && (
                <CardFooter className="border-top">
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="h5 mb-0">Total</span>
                        <span className="h5 mb-0">
                            {Currency}{total.toLocaleString()}
                        </span>
                    </div>
                </CardFooter>
            )}

        </Card>
    )
}

export default PriceSummary
