import { useState } from "react";
import API from "../services/api";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    try {
      await API.post("register/", {
        username: username,
        password: password,
      });

      alert("Registration successful!");

      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Registration error:", error);

      if (error.response) {
        alert(error.response.data.error || "Registration failed");
      } else {
        alert("Unable to connect to server");
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>📝 Create Account</h2>

        <form onSubmit={handleRegister}>
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
           <input
  type="password"
  placeholder="Confirm your password"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
/>

          <button type="submit">Register</button>
        </form>

        <p>Create your TaskFlow account.</p>
      </div>
    </div>
  );
}

export default Register;