import { NavLink } from "react-router-dom";
import "../styles.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <p>📍</p>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pokemones">Pokemones</NavLink>
      </div>
    </nav>
  );
}
