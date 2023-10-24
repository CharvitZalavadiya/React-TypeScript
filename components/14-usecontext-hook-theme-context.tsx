import React, { createContext } from 'react'
import { theme } from './14-usecontext-hook-theme'

type ThemeContextProviderProps = {
  children: React.ReactNode
}

export const ThemeContext = createContext(theme)

export const UseContextThemeContextProvider = ({
  children
}: ThemeContextProviderProps) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}