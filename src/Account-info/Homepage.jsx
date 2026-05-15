// App.jsx
import {Link } from "react-router-dom";
import "./Homepage.css";
import JobImage from "../assets/job.png";

export default function Homepage() {
  return (
    <div className="Hmain">

      <div className="Hmobile-ui">

        <div className="Hbg-circle"></div>

        <div className="Himage-box">
          <img src={JobImage} alt="" />
        </div>

        <div className="Hcontent">

          <h1>
            Discover Your
            <br />
            Dream Job here
          </h1>

          <p>
            Explore all the existing job roles based on your
            interest and study major
          </p>

        </div>

        <div className="Hbtns">
          
            <Link to="/login">   <button className="Hlogin">Login</button>  </Link>
          
          <button className="Hregister">
           <Link to="/register">   <button className="Hlogin">Register</button>  </Link>
          </button>

        </div>

      </div>

    </div>
  );
}