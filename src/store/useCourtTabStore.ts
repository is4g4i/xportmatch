// stores/useTourTabsStore.ts
import { create } from "zustand"

export type CourtTab = "details" | "schedule" | "booking"

type CourtTabsState = {
    activeTab: CourtTab
    setActiveTab: (tab: CourtTab) => void
}

export const useCourtTabsStore = create<CourtTabsState>((set) => ({
    activeTab: "details",
    setActiveTab: (tab) => set({ activeTab: tab })
}))
