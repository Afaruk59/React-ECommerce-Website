import React from "react";
import "../../css/Auth.css";
import Login from "./Login";
import Register from "./Register";

function Auth() {
  return (
    <section className="account-page">
      <div className="container">
        <div className="account-wrapper">
          <Login />
          <Register />
        </div>
      </div>
    </section>
  );
}

export default Auth;
