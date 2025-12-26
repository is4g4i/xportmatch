import { ReactNode } from "react"
import { CheckShieldSvg, MoneyBackSvg, NoBookingFeeSvg, SecurePaySvg } from "@/assets/svgs/svgs"
import { BsFillStopwatchFill, BsLightningFill, BsShieldFillCheck } from 'react-icons/bs'
import { FaFilter, FaWheelchair } from 'react-icons/fa6'
import { type IconType } from 'react-icons'
import fuchibol from '@/assets/images/xportMatch/fuchibol.jpg'

export type AboutType = {
    title: string
    image: ReactNode
    description: string
}

export type ItemCardType = {
    name: string
    price: number
    type: string
    rating: number
    complex: string
    image: string
}

type FeatureType = {
    icon: IconType
    variant: string
    title: string
    description: string
}

const aboutFeatures: AboutType[] = [
    {
        title: 'Transacciones Seguras',
        description: 'Usamos un método de pago 100% seguro para todas tus reservas.',
        image: (
            <CheckShieldSvg />
        ),
    },
    {
        title: 'Sin cargos ocultos',
        description: 'No hay cargos ocultos ni comisiones extras en tu reserva.',
        image: (
            <NoBookingFeeSvg />
        ),
    },
    {
        title: 'Seguridad de Pago',
        description: 'Nosotros nos aseguramos de que tus datos estén siempre protegidos.',
        image: (
            <SecurePaySvg />
        ),
    },
    {
        title: 'Garantia de reembolso',
        description: 'Metodo seguro de reembolso en caso de cancelación de la reserva.',
        image: (
            <MoneyBackSvg />
        ),
    },
]

const itemCards: ItemCardType[] = [
    {
        name: 'La Bombonera',
        type: 'Futbol 5',
        price: 15000,
        complex: "Complejo La Bombonera",
        rating: 4.3,
        image: fuchibol,
    },
    {
        name: 'Stadium Tour',
        type: 'Futbol 5',
        price: 15000,
        complex: "Complejo La Bombonera",
        rating: 4.5,
        image: fuchibol,
    },
    {
        name: 'Sahara Expedition',
        type: 'Futbol 5',
        price: 15000,
        complex: "Complejo La Bombonera",
        rating: 4.2,
        image: fuchibol,
    },
    {
        name: 'Phi Phi Islands',
        type: 'Futbol 5',
        price: 15000,
        complex: "Complejo La Bombonera",
        rating: 4.6,
        image: fuchibol,
    },
]

const xportMatchFeatures: FeatureType[] = [
    {
        title: 'Reservas Directas',
        description: 'Explora canchas disponibles y reserva al instante sin intermediarios.',
        variant: 'bg-primary text-primary',
        icon: BsLightningFill,
    },
    {
        title: 'Confirmacion Inmediata',
        description: 'Obtén confirmación al instante para asegurar el horario de tu mejenga.',
        variant: 'bg-danger text-danger',
        icon: BsFillStopwatchFill,
    },
    {
        title: 'Reservas Seguras',
        description: 'Extremity now strangers contained breakfast him discourse additions Sincerity.',
        variant: 'bg-orange text-orange',
        icon: BsShieldFillCheck,
    },
    {
        title: 'Busqueda Avanzada',
        description: 'Filtra canchas por ubicacion, complejos o servicios adicionales.',
        variant: 'bg-info text-info',
        icon: FaFilter,
    },
]

export { aboutFeatures, itemCards, xportMatchFeatures }
