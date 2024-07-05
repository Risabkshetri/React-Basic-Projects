
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  // const lightTheme = () => {
  //   setThemeMode("light")
  // }

  // const darkTheme = () => {
  //   setThemeMode("dark")
  // }

  const toggleTheme = () => {
    themeMode === "light" ? setThemeMode("dark") : setThemeMode("light")
  }

  // actual change in theme

  useEffect(() => {
    const html = document.querySelector('html')
    html.classList.remove("dark", "light")
    html.classList.add(themeMode)


  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode,toggleTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App