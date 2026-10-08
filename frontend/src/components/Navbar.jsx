function Navbar({ onLogout }) {
  return (
    <nav className="navbar">
      <h2>TaskFlow</h2>

      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;