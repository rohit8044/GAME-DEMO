// App.jsx

import {  Routes, Route, HashRouter } from "react-router-dom";
import Loginpage from "../Account-info/Loginpage";
import Registerpage from "../Account-info/Registerpage"
import Homepage from "../Account-info/Homepage";


export default function App() {
  return (
    <HashRouter>

      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/login" element={<Loginpage />} />

        <Route path="/register" element={< Registerpage/>} />

      </Routes>

    </HashRouter>
  );
}