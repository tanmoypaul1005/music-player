/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from "react";
import { useThemeStore } from "@/store/theme-store";
import { useAppStore } from "@/store/app-store";
import Loading from "../ui/loading/Loading";

import '@/styles/globals.scss'

const ThemeProvider = ({
    children
} : {
    children: React.ReactNode
}) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [darkMode, setInitialDarkMode] = useThemeStore(state => [state.darkMode, state.setInitialDarkMode])
    const [currentMusic, setInitialApp] = useAppStore(state => [state.currentMusic, state.setInitialApp])
  
    useEffect(() => {
        if ( !currentMusic ) {
            if ( !localStorage.getItem(process.env.NEXT_PUBLIC_THEME_STORE) ) {
                localStorage.setItem(process.env.NEXT_PUBLIC_THEME_STORE, "false")
            } else {
                // const darkModeItem = localStorage.getItem(process.env.NEXT_PUBLIC_THEME_STORE) === "true" ? true : false
                setInitialDarkMode(true)
            }

            if ( !localStorage.getItem(process.env.NEXT_PUBLIC_APP_STORE) ) {
                localStorage.setItem(process.env.NEXT_PUBLIC_APP_STORE, JSON.stringify({
                    currentMusic: null,
                    isPlaying: false,
                    playList: [],
                    playListId: "",
                    volume: 1,
                    repeatType: "all",
                    shuffleIndex: [],
                    currentMusicTime: 0,
                }))
            } else {
                const appItem : AppLocalStorage = JSON.parse(localStorage.getItem(process.env.NEXT_PUBLIC_APP_STORE))
                setInitialApp(appItem)
            }
        }
        setLoading(false)
    }, [])

    const themeClass = darkMode ? "dark" : "light"

    return (
        <main className={themeClass}>
            {
                loading ? <Loading /> : <>{children}</>
            }
        </main>
    )
}

export default ThemeProvider;