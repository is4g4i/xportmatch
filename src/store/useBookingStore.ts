import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export type SelectedTimeSlot = {
    start: string
    end: string
    price: number
}

export type SelectedService = {
    id: number
    name: string
    price: number
}

type BookingState = {
    courtId: string | null
    date: Date | null
    slots: SelectedTimeSlot[]
    services: SelectedService[]

    setCourtId: (id: string) => void
    setDate: (date: Date) => void
    toggleSlot: (slot: SelectedTimeSlot) => void
    toggleService: (service: SelectedService) => void
    reset: () => void
    touched: boolean
    setTouched: () => void

}

export const useBookingStore = create<BookingState>()(
    persist(
        (set) => ({
            courtId: null,
            date: new Date(),
            slots: [],
            services: [],
            touched: false,

            setCourtId: (id) => set({ courtId: id }),
            setDate: (date) => set({ date, touched: true }),
            toggleSlot: (slot) =>
                set((state) => ({
                    touched: true,
                    slots: state.slots.some((s) => s.start === slot.start)
                        ? state.slots.filter((s) => s.start !== slot.start)
                        : [...state.slots, slot]
                })),

            toggleService: (service) =>
                set((state) => ({
                    touched: true,
                    services: state.services.some((s) => s.id === service.id)
                        ? state.services.filter((s) => s.id !== service.id)
                        : [...state.services, service]
                })),
            reset: () =>
                set({
                    date: null,
                    slots: [],
                    services: [],
                    touched: false
                }),


            setTouched: () => set({ touched: true }),


        }),
        {
            name: "booking-store",

            storage: createJSONStorage(() => localStorage, {
                reviver: (key, value) => {
                    if (key === "date" && value) {
                        return new Date(value as string)
                    }
                    return value
                }
            })
        }
    )
)

