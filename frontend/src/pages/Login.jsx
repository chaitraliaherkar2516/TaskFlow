import { useState } from "react";
import API from "../services/api";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    try {
      await API.post("login/", {
        username: username,
        password: password,
      });

      alert("Login successful!");
      onLogin();
    } catch (error) {
      console.error("Login error:", error);

      if (error.response) {
        alert(error.response.data.error || "Login failed");
      } else {
        alert("Unable to connect to server");
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>🔐 TaskFlow Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        <p>Manage your daily tasks easily.</p>
      </div>
    </div>
  );
}

export default Login;