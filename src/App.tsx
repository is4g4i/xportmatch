import { useEffect } from "react"
import BackToTop from "@/components/backToTop"
import AppRouter from "@/routes/router"
import { AuthProvider, NotificationProvider } from "@/states/legacy"
import { HelmetProvider } from "react-helmet-async"
import configureFakeBackend from "./helpers/legacy/fake-backend"
import { useLayoutStore } from "@/store/useLayoutStore"

import { LayoutProvider } from "@/states/legacy" // TODO: Remove legacy layout provider

configureFakeBackend()

const App = () => {
  const resolveTheme = useLayoutStore((s) => s.resolveTheme)

  useEffect(() => {
    resolveTheme()
  }, [resolveTheme])

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
