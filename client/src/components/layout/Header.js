import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/actions/auth";
const Navbar = ({ isAuthenticated, logout }) => {
  const primary = (
    <h1>
      <Link to="/">
        <i className="fas fa-code"></i> Alaa Blog
      </Link>
    </h1>
  );

  return isAuthenticated ? (
    <nav className="navbar bg-dark">
      {primary}
      <ul>
        <li>
          <Link to="/dashboard">
            <i className="fas fa-user"></i>
            {"  "}
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/" onClick={logout}>
            <i className="fas fa-sign-out-alt"></i>
            {"  "}
            Log Out
          </Link>
        </li>
      </ul>
    </nav>
  ) : (
    <nav className="navbar bg-dark">
      {primary}
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
const mapActionsToProps = {
  logout,
};
export default connect(mapStateToProps, mapActionsToProps)(Navbar);
