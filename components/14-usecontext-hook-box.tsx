import { useContext } from 'react'
import { ThemeContext } from './14-usecontext-hook-theme-context'

export const UseContextBox = () => {
  const theme = useContext(ThemeContext)
  return (
    <div
      style={{
        backgroundColor: theme.primary.main,
        color: theme.primary.text
      }}>
      Theme context
    </div>
  )
}