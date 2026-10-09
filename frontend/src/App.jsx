import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? (
        <Home onLogout={() => setLoggedIn(false)} />
      ) : (
        <div className="auth-layout">
          <Login onLogin={() => setLoggedIn(true)} />
          <Register />
        </div>
      )}
    </>
  );
}

export default App;