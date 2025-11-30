import React from "react";
import { useState } from "react";
import logo from "../assets/muskConnect_logo.png";
import { Link } from "react-router";

export default function SignUpPage() {
  return (
    <div>
      <img src={logo} alt="MuskConnectLogo" className="w-40 h-45" />
      <div className="m-1">
        <h2>Create an Account</h2>
        <p>Join Langconnect to start your journey</p>
        <p>
          This is the Signup page plas insert the deatils corretly and if you
          are already existing user so go to login.
        </p>
      </div>
    </div>
  );
}
