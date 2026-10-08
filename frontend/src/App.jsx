import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  if (!loggedIn) {
    return (
      <div>
        {showRegister ? (
          <>
            <Register />

            <div style={{ textAlign: "center" }}>
              <button onClick={() => setShowRegister(false)}>
                Back to Login
              </button>
            </div>
          </>
        ) : (
          <>
            <Login onLogin={() => setLoggedIn(true)} />

            <div style={{ textAlign: "center" }}>
              <button onClick={() => setShowRegister(true)}>
                Create New Account
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  return <Home onLogout={() => setLoggedIn(false)} />;
}

export default App;