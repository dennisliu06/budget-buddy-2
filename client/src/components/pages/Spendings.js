import React from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

import "../../utilities.css";
import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "806211065045-668hg5uq9ge0onne9a3e23vieh1g6i2j.apps.googleusercontent.com";

const SpendingsPage = ({ userId, handleLogin, handleLogout }) => {
  
  
    return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      {userId ? (
        <button
          onClick={() => {
            googleLogout();
            handleLogout();
          }}
        >
          Logout
        </button>
      ) : (
        <GoogleLogin onSuccess={handleLogin} onError={(err) => console.log(err)} />
      )}
      
      


    </GoogleOAuthProvider>
  );
};

export default SpendingsPage;
