import { BackToTop } from '@/components/legacy'
import AppRouter from '@/routes/router'
import { AuthProvider, LayoutProvider, NotificationProvider } from '@/states/legacy'
import { HelmetProvider } from 'react-helmet-async'
import configureFakeBackend from './helpers/legacy/fake-backend'

configureFakeBackend()

const App = () => {
  return (
    <HelmetProvider>
      <NotificationProvider>
        <LayoutProvider>
          <AuthProvider>
            <AppRouter />
            <BackToTop />
          </AuthProvider>
        </LayoutProvider>
      </NotificationProvider>
    </HelmetProvider>
  )
}

export default App
