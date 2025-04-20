import React, {useState} from 'react'
import { themeContext } from './ThemeContext'

export default function ThemeProvider({children}) {

    const [theme, settheme] = useState(false)

    const toggleTheme = () => {
        settheme(!theme)
    }


  return (
    <themeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </themeContext.Provider>
  )
}
