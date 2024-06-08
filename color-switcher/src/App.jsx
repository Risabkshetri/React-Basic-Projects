import { useState } from 'react'
import './App.css'

function App() {
  const [color, setCounter] = useState("Black")
  const colorSwitcher = (e) => {
    document.body.style.backgroundColor = e.target.id
    setCounter(e.target.id);
  }


  return (
    <>
    <h1>Color Switcher Project</h1>
     <div id='container'>
      <button onClick={colorSwitcher} id='red'>red</button>
      <button onClick={colorSwitcher} id='green'>green</button>
      <button onClick={colorSwitcher} id='blue'>blue</button>
      <button onClick={colorSwitcher} id='olive'>olive</button>
      <button onClick={colorSwitcher} id='gray'>gray</button>
      <button onClick={colorSwitcher} id='yellow'>yellow</button>
      <button onClick={colorSwitcher} id='pink'>pink</button>
      <button onClick={colorSwitcher} id='purple'>purple</button>
      <button onClick={colorSwitcher} id='lavender'>lavender</button>
      <button onClick={colorSwitcher} id='white'>white</button>
      <button onClick={colorSwitcher} id='black'>black</button>
     </div>
     <h2>Color is {color}</h2>
    </>
  )
}

export default App
