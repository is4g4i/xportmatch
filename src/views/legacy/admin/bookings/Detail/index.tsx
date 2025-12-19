import { PageMetaData } from '@/components/legacy'
import HotelBookings from './components/HotelBookings'
import HotelDetails from './components/HotelDetails'

const BookingDetails = () => {
  return (
    <>
      <PageMetaData title="Booking Detail" />

      <HotelDetails />

      <HotelBookings />
    </>
  )
}

export default BookingDetails
