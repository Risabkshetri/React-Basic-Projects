import {createContext, useContext} from "react"

export const ThemeContext = createContext({
    ThemeMode: "light",
    // darkTheme: () => {},
    // lightTheme: () => {}
    toggleTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}