import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import SkateboardingDog from "../img/skater.gif";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Welcome to VibeChat.</h2>
      <img src={SkateboardingDog} alt="Skating doggo" width= "500px" height= "400px"/>
      <p>Sign in with Google to chat with your bros</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;
