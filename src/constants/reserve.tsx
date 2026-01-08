import hotel1 from '@/assets/images/category/hotel/4by3/01.jpg'
import hotel2 from '@/assets/images/category/hotel/4by3/02.jpg'
import hotel3 from '@/assets/images/category/hotel/4by3/03.jpg'
import hotel4 from '@/assets/images/category/hotel/4by3/04.jpg'
import hotel5 from '@/assets/images/category/hotel/4by3/05.jpg'
import hotel7 from '@/assets/images/category/hotel/4by3/07.jpg'
import hotel8 from '@/assets/images/category/hotel/4by3/08.jpg'
import hotel9 from '@/assets/images/category/hotel/4by3/09.jpg'
import hotel10 from '@/assets/images/category/hotel/4by3/10.jpg'

export type CourtType = {
    id: number
    name: string
    sale?: string
    images: string[]
    rating: number
    features: string[]
    price: number
    schemes?: string[]
    address: string
}

const courts: CourtType[] = [
    {
        id: 1,
        name: 'Cancha Fútbol 5 La Sabana',
        sale: '20% Off',
        images: [hotel9, hotel2, hotel3, hotel1],
        rating: 4.6,
        features: ['Iluminación', 'Parqueo', 'Duchas', 'Gradería'],
        price: 25000,
        address: 'La Sabana, San José, Costa Rica',
        schemes: ['Aprobado por la Federación Costarricense de Fútbol']
    },
    {
        id: 2,
        name: 'Complejo Deportivo Escazú',
        images: [hotel10, hotel2, hotel3,],
        rating: 4.4,
        features: ['Iluminación', 'Parqueo', 'Vestidores'],
        price: 30000,
        address: 'Escazú, San José, Costa Rica'
    },
    {
        id: 3,
        name: 'Canchas Futboleras Heredia',
        images: [hotel8],
        rating: 4.8,
        features: ['Iluminación', 'Cafetería', 'Parqueo', 'Duchas'],
        price: 28000,
        address: 'Heredia Centro, Costa Rica'
    },
    {
        id: 4,
        name: 'Centro Deportivo Alajuela',
        images: [hotel7, hotel4],
        rating: 4.7,
        features: ['Iluminación', 'Parqueo', 'Gradería', 'Baños'],
        price: 27000,
        address: 'Alajuela Centro, Costa Rica'
    },
    {
        id: 5,
        name: 'Canchas El Tirol',
        images: [hotel2],
        rating: 4.5,
        features: ['Iluminación', 'Parqueo', 'Bar', 'Duchas'],
        price: 26000,
        address: 'San Rafael de Heredia, Costa Rica'
    },
    {
        id: 6,
        name: 'Complejo Deportivo Cartago',
        images: [hotel5],
        rating: 4.3,
        features: ['Iluminación', 'Parqueo', 'Vestidores'],
        price: 24000,
        address: 'Cartago Centro, Costa Rica'
    },
    {
        id: 7,
        name: 'Canchas Playa Jacó',
        images: [hotel4],
        rating: 4.1,
        features: ['Iluminación', 'Parqueo', 'Bar', 'Vista al mar'],
        price: 32000,
        address: 'Jacó, Puntarenas, Costa Rica'
    },
    {
        id: 8,
        name: 'Complejo Deportivo San Carlos',
        images: [hotel3],
        rating: 3.8,
        features: ['Iluminación', 'Parqueo', 'Baños'],
        price: 22000,
        address: 'Ciudad Quesada, San Carlos, Costa Rica',
        schemes: ['Aprobado por la Federación Costarricense de Fútbol']
    },
    {
        id: 9,
        name: 'Canchas Urbanas Rohrmoser',
        images: [hotel1],
        rating: 4.2,
        features: ['Iluminación', 'Parqueo', 'Gradería'],
        price: 29000,
        address: 'Rohrmoser, San José, Costa Rica'
    }
]

export { courts }
