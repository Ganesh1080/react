import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:5000/users?email=${form.email}&password=${form.password}`
      );

      if (!res.ok) {
        alert("Server not reachable!");
        return;
      }

      const data = await res.json();

      if (data.length > 0) {
        alert("Login successful!");
        localStorage.setItem("user", JSON.stringify(data[0]));
        navigate("/account");
      } else {
        alert("Invalid email or password!");
      }
    } catch (error) {
      alert("Something went wrong. Check backend!");
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
