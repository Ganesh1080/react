import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Account from "./components/Account";

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/account">Account</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
};

export default App;
