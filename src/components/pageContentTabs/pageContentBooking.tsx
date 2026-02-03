import {
    Card,
    Col,
    Container,
    Form,
    Row,
    CardHeader
} from "react-bootstrap"
import {
    FaFutbol,
    FaCalendarAlt,
    FaClock,
    FaTrashAlt
} from "react-icons/fa"
import DatePicker from "react-flatpickr"
import "flatpickr/dist/themes/material_green.css"

import ActionButton from "../actionButton"
import { useBookingStore } from "@/store/useBookingStore"
import { useEffect, useState } from "react"
import CheckoutModal from "../checkoutModal"

/* =========================
   TYPES
========================= */

type TimeSlot = {
    start: string
    end: string
    price: number
}

type ExtraService = {
    id: number
    name: string
    price: number
    icon: "ball" | "locker" | "referee"
}

/* =========================
   MOCK DATA (SPANISH ONLY)
========================= */

const timeSlotsMock: TimeSlot[] = [
    { start: "4:00", end: "5:00", price: 25000 },
    { start: "5:00", end: "6:00", price: 25000 },
    { start: "6:00", end: "7:00", price: 28000 },
    { start: "7:00", end: "8:00", price: 28000 },
    { start: "8:00", end: "9:00", price: 30000 }
]

const extraServicesMock: ExtraService[] = [
    { id: 1, name: "Árbitro", price: 5000, icon: "referee" },
    { id: 2, name: "Balón", price: 3000, icon: "ball" },
    { id: 3, name: "Camerinos", price: 4000, icon: "locker" }
]

/* =========================
   COMPONENT
========================= */

const PageContentBooking = () => {
    const {
        date,
        slots,
        services,
        setDate,
        toggleSlot,
        toggleService,
        courtId,
        setCourtId,
        reset,
        touched
    } = useBookingStore()

    const [attemptedSubmit, setAttemptedSubmit] = useState(false)
    const [showCheckout, setShowCheckout] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        setAttemptedSubmit(true)
        if (!date || slots.length === 0) return

        console.log("BOOKING_PAYLOAD", {
            date,
            slots,
            services
        })
    }

    useEffect(() => {
        const currentCourtId = window.location.pathname.split("/")[2]

        if (!courtId) {
            setCourtId(currentCourtId)
        }

        if (courtId && courtId !== currentCourtId) {
            reset()
            setCourtId(currentCourtId)
        }
    }, [courtId, setCourtId, reset])

    useEffect(() => {
        if (attemptedSubmit && date && slots.length > 0) {
            setAttemptedSubmit(false)
        }
    }, [date, slots.length])


    return (
        <Container>
            <Row className="g-4">
                <Col lg={12}>
                    <Card className="border-0 shadow-sm rounded-4">
                        <CardHeader className="bg-transparent border-bottom p-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className="mb-0">Formulario de Reserva</h3>

                                {touched && (
                                    <ActionButton
                                        variant="ghost"
                                        size="sm"
                                        onClick={reset}
                                        className="mb-0"
                                    >
                                        <FaTrashAlt className="me-2" /> Limpiar Formulario
                                    </ActionButton>
                                )}
                            </div>

                        </CardHeader>

                        <Card.Body className="p-4">
                            <Form onSubmit={handleSubmit}>
                                <Row className="g-4">
                                    {/* DATE */}
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="fw-bold">
                                                <FaCalendarAlt className="me-2 text-primary" />
                                                Fecha
                                            </Form.Label>

                                            <DatePicker
                                                className="form-control rounded-3"
                                                value={date ?? undefined}
                                                options={{
                                                    dateFormat: "d M Y",
                                                    minDate: "today"
                                                }}
                                                onChange={(d) =>
                                                    d.length && setDate(d[0])
                                                }
                                            />
                                        </Form.Group>
                                    </Col>

                                    {/* TIME SLOTS */}
                                    <Col xs={12}>
                                        <Form.Label className="fw-bold">
                                            <FaClock className="me-2 text-primary" />
                                            Horas Disponibles
                                        </Form.Label>

                                        <div className="d-flex flex-wrap gap-2">
                                            {timeSlotsMock.map((slot) => {
                                                const isSelected = slots.some(
                                                    (s) =>
                                                        s.start === slot.start
                                                )

                                                return (
                                                    <ActionButton
                                                        key={slot.start}
                                                        variant={
                                                            isSelected
                                                                ? "primary"
                                                                : "outline-primary"
                                                        }
                                                        className="rounded-pill px-3"
                                                        onClick={() =>
                                                            toggleSlot({
                                                                start: slot.start,
                                                                end: slot.end,
                                                                price: slot.price
                                                            })
                                                        }
                                                    >
                                                        {slot.start}–{slot.end} (₡
                                                        {slot.price.toLocaleString()}
                                                        )
                                                    </ActionButton>
                                                )
                                            })}
                                        </div>
                                    </Col>

                                    {/* EXTRA SERVICES */}
                                    {extraServicesMock && <Col xs={12}>
                                        <Form.Label className="fw-bold">
                                            <FaFutbol className="me-2 text-primary" />
                                            Servicios Adicionales
                                        </Form.Label>

                                        <Row className="g-3">
                                            {extraServicesMock.map((service) => {
                                                const isSelected =
                                                    services.some(
                                                        (s) =>
                                                            s.id === service.id
                                                    )

                                                return (
                                                    <Col md={6} key={service.id}>
                                                        <Card
                                                            onClick={() =>
                                                                toggleService({
                                                                    id: service.id,
                                                                    name: service.name,
                                                                    price: service.price
                                                                })
                                                            }
                                                            className={`border-0 shadow-sm rounded-3 p-2 ${isSelected
                                                                ? "bg-primary bg-opacity-10"
                                                                : ""
                                                                }`}
                                                            style={{
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            <Card.Body className="d-flex align-items-center">
                                                                <Form.Check
                                                                    className="me-3"
                                                                    checked={isSelected}
                                                                    readOnly
                                                                />

                                                                <div className="flex-grow-1">
                                                                    <div className="fw-bold">
                                                                        {service.name}
                                                                    </div>
                                                                    <div className="text-primary">
                                                                        ₡
                                                                        {service.price.toLocaleString()}
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                )
                                            })}
                                        </Row>
                                    </Col>}
                                </Row>

                                {/* ACTIONS */}
                                <div className="d-flex flex-column gap-2 mt-4">
                                    {attemptedSubmit && (!date || slots.length === 0) && (

                                        <div
                                            className={`d-flex align-items-center gap-2 small ${attemptedSubmit && "text-danger"}`}
                                        >
                                            <FaCalendarAlt />
                                            {!date && <span>Selecciona una fecha.</span>}
                                            {date && slots.length === 0 && <span>Selecciona al menos un horario.</span>}
                                        </div>
                                    )}
                                    <div className="d-flex justify-content-end">

                                        <ActionButton
                                            variant="primary"
                                            disabled={!date || slots.length === 0}
                                            size="lg"
                                            onClick={() => setShowCheckout(true)}
                                        >
                                            <FaFutbol className="me-2" />

                                            Confirmar Reserva
                                        </ActionButton>

                                        <CheckoutModal
                                            show={showCheckout}
                                            onHide={() => setShowCheckout(false)}
                                        />
                                    </div>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default PageContentBooking
