// Register.jsx

import "./Registerpage.css";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

export default function Registerpage() {
  return (
    <div className="main">

      <div className="register-card">

        <div className="bg-shape"></div>

        <div className="top-content">

          <h1>Create Account</h1>

          <p>
            Create an account so you can explore all the
            existing jobs
          </p>

        </div>

        <div className="form-section">

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <input
            type="password"
            placeholder="Confirm Password"
          />

          <button className="signup-btn">
            Sign up
          </button>

          <h3>
            Already have an account
          </h3>

          <h4>
            Or continue with
          </h4>

          <div className="social-icons">

            <div className="icon-box">
              <FaGoogle />
            </div>

            <div className="icon-box">
              <FaFacebookF />
            </div>

            <div className="icon-box">
              <FaApple />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}