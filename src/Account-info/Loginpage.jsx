// Login.jsx

import "./Loginpage.css";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

export default function Loginpage() {
  return (
    <div className="Lmain">

      <div className="Llogin-card">

        <div className="Lbg-shape"></div>

        <div className="Ltop-content">

          <h1>Login here</h1>

          <h2>
            Welcome back you've
            <br />
            been missed!
          </h2>

        </div>

        <div className="Lform-section">

          <input type="email" placeholder="Email" />

          <input type="password" placeholder="Password" />

          <p className="Lforgot">
            Forgot your password?
          </p>

          <button className="Llogin-btn">
            Sign in
          </button>

          <h3>
            Create new account
          </h3>

          <h4>
            Or continue with
          </h4>

          <div className="Lsocial-icons">

            <div className="Licon-box">
              <FaGoogle />
            </div>

            <div className="Licon-box">
              <FaFacebookF />
            </div>

            <div className="Licon-box">
              <FaApple />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}