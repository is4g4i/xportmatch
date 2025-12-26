type CurrencyType = | '$' | '₡'

export type NotificationType = {
    title: string
    content?: string
    time: string
}

export const currency: CurrencyType = '₡'

export const pages: { label: string, link: string }[] = [
    { label: 'Inicio', link: '/' },
    { label: 'Canchas', link: '/canchas' },
    { label: 'Nosotros', link: '/nosotros' },
    { label: 'Contacto', link: '/contacto' },
]

export const notificationData: NotificationType[] = [
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