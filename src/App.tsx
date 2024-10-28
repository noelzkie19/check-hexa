import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import axios from 'axios';

function App() {
  const navigate = useNavigate();
  const AUTH_URL = `${process.env.REACT_APP_CHECK_GATEWAY_URL}/Authenticate`
  useEffect(() => {
    checkAuth();
  }, [navigate]);

  const checkAuth = async () => {
    try {
        // const response = await axios.get(`${AUTH_URL}/check`, {
        //     withCredentials: true, // Include cookies with the request
        // });

        // if (!response.data.isAuthenticated) {
        //     // window.location.href = `${process.env.REACT_APP_EXTERNAL_URL}`;
        //     const callbackUrl = encodeURIComponent("http://localhost:7067/auth/callback");
        //     window.location.href = `https://webqa.mbtcheck.com/CIDA/Account/Login?redirect_uri=${callbackUrl}`;
        // }
        const returnUrl = encodeURIComponent("https://localhost:4200");
        const callbackUrl = encodeURIComponent("https://localhost:7067/api/authenticate/auth/callback");

        // Redirect to the login page with the return URL
        window.location.href = `https://webqa.mbtcheck.com/CIDA/Account/Login?redirect_uri=${callbackUrl}&ReturnUrl=${returnUrl}`;
    } catch (error) {
        console.error('Authentication check failed:', error);
        // Handle specific errors if needed
    }
};

  // Return some valid JSX (you can modify this as needed)
  return (
      <div>
          <h1>Welcome to the App</h1>
          {/* Other components or elements can go here */}
      </div>
  );
}

export default App;
