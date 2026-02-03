import { create } from "zustand"
import { persist } from "zustand/middleware"
import { changeHTMLAttribute } from "@/utils/legacy/layout"

export type ThemeMode = "light" | "dark" | "auto"
export type Direction = "ltr" | "rtl"

type LayoutState = {
    theme: ThemeMode
    dir: Direction
    setTheme: (theme: ThemeMode) => void
    setDir: (dir: Direction) => void
    resolveTheme: () => void
}

const THEME_KEY = "data-bs-theme"

const getPreferredTheme = (): "light" | "dark" =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"

export const useLayoutStore = create<LayoutState>()(
    persist(
        (set, get) => ({
            theme: "auto",
            dir: "ltr",

            setTheme: (theme) => {
                const html = document.documentElement

                html.classList.add("theme-transition")

                set({ theme })

                const resolved =
                    theme === "auto" ? getPreferredTheme() : theme

                changeHTMLAttribute("data-bs-theme", resolved)

                window.setTimeout(() => {
                    html.classList.remove("theme-transition")
                }, 250)
            },

            setDir: (dir) => set({ dir }),

            resolveTheme: () => {
                const { theme } = get()
                const resolvedTheme =
                    theme === "auto" ? getPreferredTheme() : theme

                changeHTMLAttribute(THEME_KEY, resolvedTheme)
            }
        }),
        {
            name: "layout-settings",
            partialize: (state) => ({
                theme: state.theme,
                dir: state.dir
            })
        }
    )
)
