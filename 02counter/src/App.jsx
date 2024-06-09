import { useState } from 'react'
import './App.css'


function App() {

  const [counter, setCounter] = useState(15)

  //let counter = 5
  const increament = () => {
    // counter = counter + 1
    // console.log(counter)
    setCounter(counter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
   
  }
  const decrement = () => {
    // counter = counter + 1
    // console.log(counter)
    if(counter > 0)
    setCounter(counter - 1)
  }
  return (
   <>
     <h1>Chai aur react</h1>
     <h2>counter value : {counter}</h2>

     <button
     onClick = {increament}
     >increament</button>
     <button
       onClick={decrement}
     >decreament</button>
     {/* <button
     onClick = {() => setCounter(counter + 1)}
     >increament</button>
     <button
       onClick={() => { if(counter > 0) setCounter(counter - 1)}}
     >decreament</button> */}
   </>
  )
}

export default App
