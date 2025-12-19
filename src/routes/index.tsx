import Home from '@/views/home'
import { lazy } from 'react'
import { type RouteProps } from 'react-router-dom'

export type RoutesProps = {
  path: RouteProps['path']
  name: string
  element: RouteProps['element']
  exact?: boolean
}

const HotelsHome = lazy(() => import('@/views/legacy/hotels/Home'))
const HotelsChain = lazy(() => import('@/views/legacy/hotels/Chain'))
const HotelsResort = lazy(() => import('@/views/legacy/hotels/Resort'))
const HotelsGrid = lazy(() => import('@/views/legacy/hotels/Grid'))
const HotelsList = lazy(() => import('@/views/legacy/hotels/List'))
const HotelDetails = lazy(() => import('@/views/legacy/hotels/HotelDetails'))
const RoomDetails = lazy(() => import('@/views/legacy/hotels/RoomDetails'))
const HotelBooking = lazy(() => import('@/views/legacy/hotels/Booking'))

const FlightHome = lazy(() => import('@/views/legacy/flights/Home'))
const FlightList = lazy(() => import('@/views/legacy/flights/List'))
const FlightDetail = lazy(() => import('@/views/legacy/flights/Detail'))
const FlightBooking = lazy(() => import('@/views/legacy/flights/Booking'))

const TourHome = lazy(() => import('@/views/legacy/tours/Home'))
const TourGrid = lazy(() => import('@/views/legacy/tours/Grid'))
const TourDetail = lazy(() => import('@/views/legacy/tours/Detail'))
const TourBooking = lazy(() => import('@/views/legacy/tours/Booking'))

const DirectoryHome = lazy(() => import('@/views/legacy/directories/Home'))
const DirectoryDetail = lazy(() => import('@/views/legacy/directories/Detail'))

const CabHome = lazy(() => import('@/views/legacy/cabs/Home'))
const CabList = lazy(() => import('@/views/legacy/cabs/List'))
const CabDetail = lazy(() => import('@/views/legacy/cabs/Detail'))
const CabBooking = lazy(() => import('@/views/legacy/cabs/Booking'))

const JoinUS = lazy(() => import('@/views/legacy/listings/JoinUs'))
const ListingsAdd = lazy(() => import('@/views/legacy/listings/AddListing'))
const ListingsMinimal = lazy(() => import('@/views/legacy/listings/AddMinimal'))
const ListingAdded = lazy(() => import('@/views/legacy/listings/Added'))

const HeroInlineForm = lazy(() => import('@/views/legacy/heroes/InlineForm'))
const HeroMultipleSearch = lazy(() => import('@/views/legacy/heroes/MultipleSearch'))
const HeroImageGallery = lazy(() => import('@/views/legacy/heroes/ImageGallery'))
const HeroSplit = lazy(() => import('@/views/legacy/heroes/Split'))

const AboutPage = lazy(() => import('@/views/legacy/about-us/About'))
const OurTeamPage = lazy(() => import('@/views/legacy/about-us/OurTeam'))

const Contact = lazy(() => import('@/views/legacy/contact-us/Contact'))
const Contact2 = lazy(() => import('@/views/legacy/contact-us/Contact2'))

const Blog = lazy(() => import('@/views/legacy/blogs/Blog'))
const BlogDetail = lazy(() => import('@/views/legacy/blogs/BlogDetail'))

const BookingConfirm = lazy(() => import('@/views/legacy/listing-pages/BookingConfirm'))
const CompareListing = lazy(() => import('@/views/legacy/listing-pages/CompareListing'))
const OfferDetail = lazy(() => import('@/views/legacy/listing-pages/OfferDetail'))

const SignIn = lazy(() => import('@/views/legacy/auth/SignIn'))
const SignUp = lazy(() => import('@/views/legacy/auth/SignUp'))
const ForgotPassword = lazy(() => import('@/views/legacy/auth/ForgotPassword'))
const TwoFactorAuth = lazy(() => import('@/views/legacy/auth/TwoFactorAuth'))

const HelpCenter = lazy(() => import('@/views/legacy/help/Center'))
const HelpDetail = lazy(() => import('@/views/legacy/help/Detail'))
const HelpPrivacyPolicy = lazy(() => import('@/views/legacy/help/PrivacyPolicy'))
const HelpService = lazy(() => import('@/views/legacy/help/TermsOfService'))

const UserProfile = lazy(() => import('@/views/legacy/user/Profile'))
const UserTravelers = lazy(() => import('@/views/legacy/user/Travelers'))
const UserBooking = lazy(() => import('@/views/legacy/user/Bookings'))
const UserPaymentDetail = lazy(() => import('@/views/legacy/user/PaymentDetails'))
const UserWishlist = lazy(() => import('@/views/legacy/user/Wishlist'))
const UserSettings = lazy(() => import('@/views/legacy/user/Settings'))
const UserDeleteProfile = lazy(() => import('@/views/legacy/user/DeleteProfile'))

const AgentDashboard = lazy(() => import('@/views/legacy/agent/Dashboard'))
const AgentListings = lazy(() => import('@/views/legacy/agent/Listings'))
const AgentBookings = lazy(() => import('@/views/legacy/agent/Bookings'))
const AgentActivities = lazy(() => import('@/views/legacy/agent/Activities'))
const AgentEarnings = lazy(() => import('@/views/legacy/agent/Earnings'))
const AgentReviews = lazy(() => import('@/views/legacy/agent/Reviews'))
const AgentSettings = lazy(() => import('@/views/legacy/agent/Settings'))

const AdminDashboard = lazy(() => import('@/views/legacy/admin/Dashboard'))
const AdminBookingsList = lazy(() => import('@/views/legacy/admin/bookings/List'))
const AdminBookingsDetail = lazy(() => import('@/views/legacy/admin/bookings/Detail'))
const AdminGuestsList = lazy(() => import('@/views/legacy/admin/guests/List'))
const AdminGuestsDetail = lazy(() => import('@/views/legacy/admin/guests/Detail'))
const AdminAgentsList = lazy(() => import('@/views/legacy/admin/agents/List'))
const AdminAgentsDetail = lazy(() => import('@/views/legacy/admin/agents/Detail'))
const AdminReviews = lazy(() => import('@/views/legacy/admin/Reviews'))
const AdminEarnings = lazy(() => import('@/views/legacy/admin/Earnings'))
const AdminSettings = lazy(() => import('@/views/legacy/admin/Settings'))

const Pricing = lazy(() => import('@/views/legacy/Pricing'))
const FAQs = lazy(() => import('@/views/legacy/FAQs'))
const NotFoundPage = lazy(() => import('@/views/legacy/NotFound'))
const ComingSoon = lazy(() => import('@/views/legacy/ComingSoon'))

const hotelRoutes: RoutesProps[] = [
  {
    path: '/',
    name: 'root',
    element: <Home />,
  },
  {
    path: '/hotels/home',
    name: 'hotels.index',
    element: <HotelsHome />,
  },
  {
    path: '/hotels/chain',
    name: 'hotels.chain',
    element: <HotelsChain />,
  },
  {
    path: '/hotels/resort',
    name: 'hotels.resort',
    element: <HotelsResort />,
  },
  {
    path: '/hotels/grid',
    name: 'hotels.grid',
    element: <HotelsGrid />,
  },
  {
    path: '/hotels/list',
    name: 'hotels.list',
    element: <HotelsList />,
  },
  {
    path: '/hotels/detail',
    name: 'hotels.details',
    element: <HotelDetails />,
  },
  {
    path: '/hotels/room-detail',
    name: 'hotels.room.details',
    element: <RoomDetails />,
  },
  {
    path: '/hotels/booking',
    name: 'hotels.booking',
    element: <HotelBooking />,
  },
]

const flightsRoutes: RoutesProps[] = [
  {
    path: '/flights/home',
    name: 'flights.home',
    element: <FlightHome />,
  },
  {
    path: '/flights/list',
    name: 'flights.list',
    element: <FlightList />,
  },
  {
    path: '/flights/detail',
    name: 'flights.detail',
    element: <FlightDetail />,
  },
  {
    path: '/flights/booking',
    name: 'flights.booking',
    element: <FlightBooking />,
  },
]

const toursRoutes: RoutesProps[] = [
  {
    path: '/tours/home',
    name: 'tours.home',
    element: <TourHome />,
  },
  {
    path: '/tours/grid',
    name: 'tours.grid',
    element: <TourGrid />,
  },
  {
    path: '/tours/detail',
    name: 'tours.detail',
    element: <TourDetail />,
  },
  {
    path: '/tours/booking',
    name: 'tours.booking',
    element: <TourBooking />,
  },
]
const cabsRoutes: RoutesProps[] = [
  {
    path: '/cabs/home',
    name: 'cabs.home',
    element: <CabHome />,
  },
  {
    path: '/cabs/list',
    name: 'cabs.list',
    element: <CabList />,
  },
  {
    path: '/cabs/detail',
    name: 'cabs.detail',
    element: <CabDetail />,
  },
  {
    path: '/cabs/booking',
    name: 'cabs.booking',
    element: <CabBooking />,
  },
]

const directoriesRoutes: RoutesProps[] = [
  {
    path: '/directories/home',
    name: 'directories.home',
    element: <DirectoryHome />,
  },
  {
    path: '/directories/detail',
    name: 'directories.detail',
    element: <DirectoryDetail />,
  },
]

const listingRoutes: RoutesProps[] = [
  {
    path: '/listings/add',
    name: 'listings.add',
    element: <ListingsAdd />,
  },
  {
    path: '/listings/join-us',
    name: 'listings.join-us',
    element: <JoinUS />,
  },
  {
    path: '/listings/add-minimal',
    name: 'listings.add-minimal',
    element: <ListingsMinimal />,
  },
  {
    path: '/listings/added',
    name: 'listings.added',
    element: <ListingAdded />,
  },
]

const heroRoutes: RoutesProps[] = [
  {
    path: '/heroes/inline-form',
    name: 'heros.inline-form',
    element: <HeroInlineForm />,
  },
  {
    path: '/heroes/multiple-search',
    name: 'heros.multiple-search',
    element: <HeroMultipleSearch />,
  },
  {
    path: '/heroes/image-gallery',
    name: 'heros.image-gallery',
    element: <HeroImageGallery />,
  },
  {
    path: '/heroes/split',
    name: 'heros.split',
    element: <HeroSplit />,
  },
]
const listingPagesRoutes: RoutesProps[] = [
  {
    path: '/booking-confirmed',
    name: 'booking-confirmed',
    element: <BookingConfirm />,
  },
  {
    path: '/compare-listing',
    name: 'compare-listing',
    element: <CompareListing />,
  },
  {
    path: '/offer-detail',
    name: 'offer-detail',
    element: <OfferDetail />,
  },
]

const aboutUsRoutes: RoutesProps[] = [
  {
    path: '/pages/about',
    name: 'about',
    element: <AboutPage />,
  },
  {
    path: '/pages/our-team',
    name: 'our-team',
    element: <OurTeamPage />,
  },
]

const contactUsRoutes: RoutesProps[] = [
  {
    path: '/pages/contact',
    name: 'contact',
    element: <Contact />,
  },
  {
    path: '/pages/contact-2',
    name: 'contact2',
    element: <Contact2 />,
  },
]

const blogsRoutes: RoutesProps[] = [
  {
    path: '/blogs/blog',
    name: 'blogs.blog',
    element: <Blog />,
  },
  {
    path: '/blogs/detail',
    name: 'blogs.detail',
    element: <BlogDetail />,
  },
]

export const authRoutes: RoutesProps[] = [
  {
    path: '/auth/sign-in',
    name: 'auth.sign-in',
    element: <SignIn />,
  },
  {
    path: '/auth/sign-up',
    name: 'auth.sign-up',
    element: <SignUp />,
  },
  {
    path: '/auth/forgot-password',
    name: 'auth.forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/auth/two-factor-auth',
    name: 'auth.two-factor-auth',
    element: <TwoFactorAuth />,
  },
]

export const helpRoutes: RoutesProps[] = [
  {
    path: '/help/center',
    name: 'pages.help.center',
    element: <HelpCenter />,
  },
  {
    path: '/help/detail',
    name: 'pages.help.detail',
    element: <HelpDetail />,
  },
  {
    path: '/help/privacy-policy',
    name: 'pages.help.privacy-policy',
    element: <HelpPrivacyPolicy />,
  },
  {
    path: '/help/service',
    name: 'pages.help.service',
    element: <HelpService />,
  },
]

export const userRoutes: RoutesProps[] = [
  {
    path: '/user/profile',
    name: 'account.user.profile',
    element: <UserProfile />,
  },
  {
    path: '/user/bookings',
    name: 'account.user.booking',
    element: <UserBooking />,
  },
  {
    path: '/user/travelers',
    name: 'account.user.travellers',
    element: <UserTravelers />,
  },
  {
    path: '/user/payment-details',
    name: 'account.user.payment-detail',
    element: <UserPaymentDetail />,
  },
  {
    path: '/user/wishlist',
    name: 'account.user.wishlist',
    element: <UserWishlist />,
  },
  {
    path: '/user/settings',
    name: 'account.user.settings',
    element: <UserSettings />,
  },
  {
    path: '/user/delete-profile',
    name: 'account.user.delete-profile',
    element: <UserDeleteProfile />,
  },
]

export const agentRoutes: RoutesProps[] = [
  {
    path: '/agent/dashboard',
    name: 'agent.dashboard',
    element: <AgentDashboard />,
  },
  {
    path: '/agent/listings',
    name: 'agent.listings',
    element: <AgentListings />,
  },
  {
    path: '/agent/bookings',
    name: 'agent.bookings',
    element: <AgentBookings />,
  },
  {
    path: '/agent/activities',
    name: 'agent.activities',
    element: <AgentActivities />,
  },
  {
    path: '/agent/earnings',
    name: 'agent.earnings',
    element: <AgentEarnings />,
  },
  {
    path: '/agent/reviews',
    name: 'agent.reviews',
    element: <AgentReviews />,
  },
  {
    path: '/agent/settings',
    name: 'agent.settings',
    element: <AgentSettings />,
  },
]

export const adminRoutes: RoutesProps[] = [
  {
    path: '/admin/dashboard',
    name: 'admin.dashboard',
    element: <AdminDashboard />,
  },
  {
    path: '/admin/bookings/list',
    name: 'admin.bookings.list',
    element: <AdminBookingsList />,
  },
  {
    path: '/admin/bookings/detail',
    name: 'admin.bookings.detail',
    element: <AdminBookingsDetail />,
  },
  {
    path: '/admin/guests/list',
    name: 'admin.guests.list',
    element: <AdminGuestsList />,
  },
  {
    path: '/admin/guests/detail',
    name: 'admin.guests.detail',
    element: <AdminGuestsDetail />,
  },
  {
    path: '/admin/agents/list',
    name: 'admin.agents.list',
    element: <AdminAgentsList />,
  },
  {
    path: '/admin/agents/detail',
    name: 'admin.agents.detail',
    element: <AdminAgentsDetail />,
  },
  {
    path: '/admin/reviews',
    name: 'admin.reviews',
    element: <AdminReviews />,
  },
  {
    path: '/admin/earnings',
    name: 'admin.earnings',
    element: <AdminEarnings />,
  },
  {
    path: '/admin/settings',
    name: 'admin.settings',
    element: <AdminSettings />,
  },
]

const otherRoutes: RoutesProps[] = [
  {
    path: '/pricing',
    name: 'pricing',
    element: <Pricing />,
  },
  {
    path: '/faqs',
    name: 'faqs',
    element: <FAQs />,
  },
  {
    path: '/not-found',
    name: 'not-found',
    element: <NotFoundPage />,
  },
  {
    path: '*',
    name: 'match-all',
    element: <NotFoundPage />,
  },
  {
    path: '/coming-soon',
    name: 'coming-soon',
    element: <ComingSoon />,
  },
]

export const appRoutes = [
  ...hotelRoutes,
  ...listingRoutes,
  ...flightsRoutes,
  ...toursRoutes,
  ...cabsRoutes,
  ...directoriesRoutes,
  ...heroRoutes,
  ...listingPagesRoutes,
  ...aboutUsRoutes,
  ...contactUsRoutes,
  ...blogsRoutes,
  ...otherRoutes,
]
