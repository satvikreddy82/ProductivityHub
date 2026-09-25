function Navbar({ title }) {
  return (
    <nav className="navbar">
      <div className="brand">
        <div>
          <h1>{title}</h1>
          <span>Productivity Hub</span>
        </div>
      </div>

      <div className="nav-links">
       <div className="nav-links">
  <button onClick={() => document.getElementById("dashboard").scrollIntoView({ behavior: "smooth" })}>
    Dashboard
  </button>

  <button onClick={() => document.getElementById("tasks").scrollIntoView({ behavior: "smooth" })}>
    Tasks
  </button>

  <button onClick={() => document.getElementById("notes").scrollIntoView({ behavior: "smooth" })}>
    Notes
  </button>
</div>
      </div>
    </nav>
  );
}

export default Navbar;