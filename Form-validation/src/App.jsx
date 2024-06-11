// // import React from 'react'
// import { Outlet } from 'react-router'
// import Registration from './Registration'

// function App() {
//   return (
//   <>
//     <Registration />
//     <Outlet />
//      </> 
//   )
// }

// export default App

// import React, { useState, useEffect } from 'react';
import Registration from './Registration'; // Import your Registration form component
import SignUP from './SignUP'; // Import your Sign In form component (renamed from SignUp.js)
import { useEffect, useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegistration, setShowRegistration] = useState(true);

  const checkLoggedIn = () => {
    const storedUser = localStorage.getItem('user');
    return storedUser !== null;
  };

  useEffect(() => {
    setIsLoggedIn(checkLoggedIn());
  }, []);

  const handleFormSwitch = () => {
    setShowRegistration(!showRegistration);
  };

  return (
    <div>
      {isLoggedIn ? (
        // Display sign-in successful message or redirect to a different page
        <div>Welcome, you are logged in!</div>
      ) : showRegistration ? (
        <Registration />
      ) : (
        <SignUP onSwitch={() => handleFormSwitch()} />
      )}
      <button onClick={handleFormSwitch}>
        {showRegistration ? 'Sign In' : 'Register'}
      </button>
    </div>
  );
};

export default App;
