import { type HTMLAttributeAnchorTarget } from 'react'
import { type IconType } from 'react-icons'
type CurrencyType = '$' | '₡'

export type NotificationType = {
    title: string
    content?: string
    time: string
}

export type MenuItemType = {
    key: string
    label: string
    isTitle?: boolean
    url: string
    target?: HTMLAttributeAnchorTarget
    children?: MenuItemType[]
    parentKey?: string
    icon?: IconType
}

export const Currency: CurrencyType = '₡'

export const NotificationData: NotificationType[] = [
    {
        title: 'New! Booking flights from New York ✈️',
        content: 'Find the flexible ticket on flights around the world. Start searching today',
        time: '05 Feb 2024',
    },
    {
        title: 'Sunshine saving are here 🌞 save 30% or more on a stay',
        time: '24 Aug 2024',
    },
]

export const Pages: MenuItemType[] = [
    {
        key: 'booking',
        label: 'Reservar',
        url: '/reserve'
    },
    {
        key: 'about',
        label: 'Nosotros',
        url: '/about'
    },
    {
        key: 'contact',
        label: 'Contacto',
        url: '/contact'
    }
]