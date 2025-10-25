import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay("Good Morning 🌅");
    else if (hour < 18) setTimeOfDay("Good Afternoon ☀️");
    else setTimeOfDay("Good Evening 🌙");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="form-container">
        <h2>No user found!</h2>
        <button onClick={() => navigate("/login")}>Go to Login</button>
      </div>
    );
  }

  return (
    <div className="form-container account-info">
      <h2>{timeOfDay}, {user.name}! 🎉</h2>
      <p style={{ marginTop: "8px", opacity: 0.9 }}>
        Welcome back to your dashboard. Here’s your account summary 👇
      </p>

      <div className="profile-card">
        <div className="avatar">{user.name.charAt(0).toUpperCase()}</div>
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Account ID:</strong> {user.id}</p>
        </div>
      </div>

      <div className="activity-section">
        <h3>📊 Your Activity</h3>
        <ul>
          <li>✔️ Logged in successfully</li>
          <li>🕒 Account active since: {new Date().toLocaleDateString()}</li>
          <li>💬 Recent update: Profile viewed</li>
          <li>⭐ Account type: Standard User</li>
        </ul>
      </div>

      <button onClick={handleLogout} className="logout-btn">
        🚪 Logout
      </button>
    </div>
  );
};

export default Account;
