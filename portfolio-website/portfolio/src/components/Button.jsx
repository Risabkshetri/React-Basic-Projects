import React from 'react';
import Button from './Button';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App p-4">
      <Button onClick={handleClick} className="mr-2">
        Click Me
      </Button>
      <Button disabled>
        Disabled Button
      </Button>
    </div>
  );
}

export default App;
