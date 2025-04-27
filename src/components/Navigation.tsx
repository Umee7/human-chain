import { Link, useLocation } from "react-router-dom";
import logoMain from "../assets/logo_main.png";
import "./Navigation.css";

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          <img
            src={logoMain}
            alt="AI Safety Dashboard"
            className="logo-image"
          />
        </Link>
        <div className="nav-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Dashboard
          </Link>
          <Link
            to="/about"
            className={`nav-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};
