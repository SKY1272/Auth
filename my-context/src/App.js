// App.jsx

// App.js
import React, { useState } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const login = () => {
   
    setIsLoggedIn(true);
  };

  
  const logout = () => {
    
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Profile logout={logout} />
      ) : (
        <Login login={login} />
      )}
    </div>
  );
};

export default App;

