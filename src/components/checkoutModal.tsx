import { Modal, Button, Spinner } from "react-bootstrap"
import { useBookingStore } from "@/store/useBookingStore"
import { useState } from "react"
import ConfirmTicket from "./confirmTicket"
import { Currency } from "@/constants/globals"

type CheckoutModalProps = {
    show: boolean
    onHide: () => void
}

const CheckoutModal = ({ show, onHide }: CheckoutModalProps) => {
    const { date, slots, services, reset } = useBookingStore()

    const [loading, setLoading] = useState(false)
    const [confirmed, setConfirmed] = useState(false)

    const isValid = !!date && slots.length > 0
    const slotsTotal = slots.reduce((acc, s) => acc + s.price, 0)
    const servicesTotal = services.reduce((acc, s) => acc + s.price, 0)
    const total = slotsTotal + servicesTotal

    const handleConfirm = () => {
        if (!isValid) return

        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            setConfirmed(true)
        }, 2000)
    }

    const handleClose = () => {
        reset()
        setConfirmed(false)
        onHide()
    }

    return (
        <Modal show={show} onHide={handleClose} centered size="lg">

            <Modal.Header closeButton>
                {!confirmed && (<Modal.Title>Checkout Reserva</Modal.Title>)}
            </Modal.Header>

            <Modal.Body className="p-4">

                {!confirmed && (
                    <>

                        {/* Fecha */}
                        {date && (
                            <div className="mb-3">
                                <div className="fw-bold small mb-1">Fecha</div>
                                <div className="fs-6">{new Date(date).toLocaleDateString()}</div>
                            </div>
                        )}

                        {/* Horarios */}
                        {slots.length > 0 && (
                            <div className="mb-3">
                                <div className="fw-bold small mb-2">Horas seleccionadas</div>

                                <div className="d-flex flex-column gap-1">
                                    {slots.map((slot, i) => (
                                        <div key={i} className="d-flex justify-content-between small">
                                            <span>{slot.start} – {slot.end}</span>
                                            <span className="fw-semibold">
                                                {Currency}{slot.price.toLocaleString()}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Servicios */}
                        {services.length > 0 && (
                            <div className="mb-3 border-top pt-2">
                                <div className="fw-bold small mb-2">Servicios adicionales</div>

                                <div className="d-flex flex-column gap-1">
                                    {services.map((service) => (
                                        <div key={service.id} className="d-flex justify-content-between small">
                                            <span>{service.name}</span>
                                            <span className="fw-semibold">
                                                {Currency}{service.price.toLocaleString()}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Total */}
                        <div className="border-top pt-3 mt-3 d-flex justify-content-between align-items-center">
                            <span className="fw-bold fs-5">Total</span>
                            <span className="fw-bold fs-5 text-primary">
                                {Currency}{total.toLocaleString()}
                            </span>
                        </div>
                    </>
                )}


                {loading && (
                    <div className="text-center mt-4">
                        <Spinner animation="border" role="status" />
                        <div className="small mt-2 text-muted">
                            Confirmando tu reserva…
                        </div>
                    </div>
                )}

                {confirmed && date && (
                    <div className="mt-4">
                        <ConfirmTicket
                            date={new Date(date)}
                            slots={slots}
                            services={services}
                        />
                    </div>
                )}


            </Modal.Body>


            {!confirmed && (
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>

                    <Button
                        variant="primary"
                        disabled={!isValid || loading}
                        onClick={handleConfirm}
                    >
                        Confirmar Reserva
                    </Button>
                </Modal.Footer>
            )}

        </Modal>
    )
}

export default CheckoutModal
