import hotel1 from '@/assets/images/category/hotel/4by3/01.jpg'
import hotel2 from '@/assets/images/category/hotel/4by3/02.jpg'
import hotel3 from '@/assets/images/category/hotel/4by3/03.jpg'
import hotel4 from '@/assets/images/category/hotel/4by3/04.jpg'
import hotel5 from '@/assets/images/category/hotel/4by3/05.jpg'
import hotel7 from '@/assets/images/category/hotel/4by3/07.jpg'
import hotel8 from '@/assets/images/category/hotel/4by3/08.jpg'
import hotel9 from '@/assets/images/category/hotel/4by3/09.jpg'
import hotel10 from '@/assets/images/category/hotel/4by3/10.jpg'

export type HotelsType = {
    id: number
    name: string
    sale?: string
    images: string[]
    rating: number
    features: string[]
    price: number
    schemes?: string[]
    address?: string
}

const hotels: HotelsType[] = [
    {
        id: 1,
        name: 'Hotel Baljees Regency',
        sale: '30% Off',
        images: [hotel9, hotel2, hotel3, hotel1],
        rating: 4.5,
        features: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
        price: 750,
        address: '123 New Lenox, Chicago, IL 60606, USA',
    },
    {
        id: 2,
        name: 'Courtyard by Marriott New York',
        images: [hotel10],
        rating: 4,
        features: ['Air Conditioning ', 'Wifi', 'Pool', 'Kitchen'],
        price: 1200,
        address: '123 New Lenox, Chicago, IL 60606, USA',
    },
    {
        id: 3,
        name: 'Club Quarters Hotel',
        images: [hotel8],
        rating: 4.8,
        features: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
        price: 980,
        address: '123 New Lenox, Chicago, IL 60606, USA',

    },
    {
        id: 4,
        name: 'Beverly Hills Marriott',
        images: [hotel7],
        rating: 4.8,
        features: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
        price: 1400,
        address: '123 New Lenox, Chicago, IL 60606, USA',

    },
    {
        id: 5,
        name: 'Courtyard by Marriott New York',
        images: [hotel2],
        rating: 4.5,
        features: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
        address: '123 New Lenox, Chicago, IL 60606, USA',
        price: 680,
    },
    {
        id: 6,
        name: 'Park Plaza Lodge Hotel',
        images: [hotel5],
        rating: 4.4,
        features: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
        address: '123 New Lenox, Chicago, IL 60606, USA',
        price: 740,
    },
    {
        id: 7,
        name: 'Royal Beach Resort',
        images: [hotel4],
        rating: 4,
        features: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
        address: '123 New Lenox, Chicago, IL 60606, USA',
        price: 570,
    },
    {
        id: 8,
        name: 'Pride moon Village Resort & Spa',
        images: [hotel3],
        rating: 3.8,
        features: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
        address: '123 New Lenox, Chicago, IL 60606, USA',
        price: 896,
    },
    {
        id: 9,
        name: 'Carina Beach Resort',
        images: [hotel1],
        rating: 4,
        features: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
        address: '123 New Lenox, Chicago, IL 60606, USA',
        price: 475,
    },
]

export { hotels }