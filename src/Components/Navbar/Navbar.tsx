import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">VagifPage</span>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/pages/about" className="nav-link">About</NavLink></li>
            <li className="nav-item"><NavLink to="/pages/contacts" className="nav-link">Contacts</NavLink></li>
            <li className="nav-item"><NavLink to="/pages/javascript" className="nav-link">JavaScript</NavLink></li>
            <li className="nav-item"><NavLink to="/pages/java" className="nav-link">Java</NavLink></li>
            <li className="nav-item"><NavLink to="/pages/python" className="nav-link">Python</NavLink></li>
            <li className="nav-item"><NavLink to="/pages/admin" className="nav-link">Admin</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;