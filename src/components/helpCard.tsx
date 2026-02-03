import { Card } from "react-bootstrap"
import { BsInfoCircle, BsEnvelopeAt } from "react-icons/bs"
import { Link } from "react-router-dom"

const HelpCard = () => {
    return (
        <Card className="card-body bg-light p-4 rounded-3 shadow-sm">

            <h5 className="card-title fw-bold mb-3">
                ¿No estas seguro con tu reserva?
            </h5>

            <ul className="list-group list-group-borderless small">
                <li className="list-group-item py-0">
                    <hr className="my-1" />
                </li>

                {/* Cancelaciones */}
                <li className="list-group-item py-2">
                    <div className="fw-semibold pb-2 d-flex align-items-center">
                        <BsInfoCircle className="text-primary fs-8 me-2" /> Política de cancelación
                    </div>
                    <div className="small">
                        Puedes cancelar sin costo hasta 6 horas antes del horario reservado.
                        Cancelaciones tardías pierden el monto de la reserva.
                    </div>
                </li>

                <li className="list-group-item py-2">
                    <div className="fw-semibold pb-2 d-flex align-items-center">
                        <BsInfoCircle className="text-primary fs-8 me-2" />
                        Seguridad de Pago
                    </div>

                    <div className="small">
                        El pago de tu reserva se procesa mediante un proveedor externo seguro.
                        XportMatch nunca almacena datos de tu tarjeta de crédito.
                    </div>
                </li>



                {/* Cambios de horario
                <li className="list-group-item py-0">
                    <hr className="my-1" />
                </li>

                <li className="list-group-item py-2">
                    <div className="fw-semibold pb-2">
                        <BsInfoCircle className="text-primary fs-5 me-2" />
                        Cambios de horario
                    </div>
                    <div className="small">
                        Puedes modificar tu horario directamente desde tu perfil
                        mientras haya disponibilidad en la cancha.
                    </div>
                </li>
                 */}


                <li className="list-group-item py-0">
                    <hr className="my-1" />
                </li>

                {/* Soporte */}
                <li className="list-group-item py-2">
                    <Link to="/contact" className="text-decoration-none">
                        <BsEnvelopeAt className="text-primary fs-5 me-2" />
                        Escribir Correo a Soporte
                    </Link>
                </li>

                <li className="list-group-item py-0">
                    <hr className="my-1" />
                </li>

            </ul>
        </Card>
    )
}

export default HelpCard
