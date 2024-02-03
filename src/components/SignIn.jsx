import React from "react";
// import firebase from "firebase";
// import { auth } from "../firebase.js";

function SignIn() {
  // function signInWithGoogle(){
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   auth.signInWithPopup(provider)
  // }

  return (
    <div>
      <button className="login-button" 
      // onClick={signInWithGoogle}
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default SignIn;
