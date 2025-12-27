import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CourtFilterSidebarState = {
    isOpen: boolean
    open: () => void
    close: () => void
    toggle: () => void
}

export const useCourtFilterSidebarStore = create(
    persist<CourtFilterSidebarState>(
        (set) => ({
            isOpen: true,
            open: () => set({ isOpen: true }),
            close: () => set({ isOpen: false }),
            toggle: () => set((state) => ({ isOpen: !state.isOpen })),
        }),
        {
            name: 'court-filter-sidebar',
        }
    )
)
 