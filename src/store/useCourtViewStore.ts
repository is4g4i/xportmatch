import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CourtViewMode = 'grid' | 'list'

type CourtViewState = {
    viewMode: CourtViewMode
    setViewMode: (mode: CourtViewMode) => void
}

export const useCourtViewStore = create(
    persist<CourtViewState>(
        (set) => ({
            viewMode: 'grid',
            setViewMode: (mode) => set({ viewMode: mode }),
        }),
        {
            name: 'court-view-mode'
        }
    )
)
