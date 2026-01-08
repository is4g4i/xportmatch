// store/useReservationStore.ts
import { create } from "zustand";

export type HourSlot = {
    start: string; // ISO
    end: string;   // ISO
};

type ReservationState = {
    slots: HourSlot[];
    toggleSlot: (slot: HourSlot) => void;
};

export const useReservationStore = create<ReservationState>((set) => ({
    slots: [],
    toggleSlot: (slot) =>
        set((state) => {
            const exists = state.slots.some(
                (s) => s.start === slot.start && s.end === slot.end
            );

            return {
                slots: exists
                    ? state.slots.filter(
                        (s) => !(s.start === slot.start && s.end === slot.end)
                    )
                    : [...state.slots, slot],
            };
        }),
}));
