import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black");

  const colors = [
    'red', 'green', 'blue', 'olive', 'gray', 
    'yellow', 'pink', 'purple', 'lavender', 'white', 'black'
  ];

  const colorSwitcher = (newColor) => {
    setColor(newColor);
  };

  // const textStyle = {
  //   color: color === 'black' ? 'white' : 'black',
  // };

  return (
    <>
      <h1>Color Switcher Project</h1>
      <div id='container'>
        {colors.map((clr) => (
          <button 
            key={clr} 
            onClick={() => colorSwitcher(clr)} 
            style={{ backgroundColor: clr, color: clr === 'black' ? 'white' : 'black' }}
            
          >
            {clr}
          </button>
        ))}
      </div>
      <h2>Color is {color}</h2>
      <style>
        {`body { background-color: ${color}; }`}
      </style>
    </>
  );
}

export default App;
