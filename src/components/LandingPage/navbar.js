import React from "react";
import {NavItem, Navbar, NavbarBrand} from "reactstrap"
import {Link} from "react-router-dom"

function navbar() {
    return (
            <div>
                <Navbar style={{backgroundColor: "grey"}} expand="md" className="me">
                    <div className="container-fluid">
                        <NavbarBrand> Apna Hostel </NavbarBrand>
                        <ul className="ml-auto nav me">
                              <li className="nav-item">
                                    <Link className="nav-link me" to="/home">
                                          Home
                                    </Link>
                              </li>
                              <li className="nav-item">
                                    <Link className="nav-link me" to="/gallery">
                                          Gallery
                                    </Link>
                              </li>
                              <li className="nav-item">
                                    <Link className="nav-link me" to="/contactus">
                                          Contact Us
                                    </Link>
                              </li>
                              <li className="nav-item">
                                    <Link className="nav-link me" to="/login">
                                          Login
                                    </Link>
                              </li>
                              <li className="nav-item">
                                    <Link className="nav-link me" to="/admin/dashboard">
                                          Go to DashBoard
                                    </Link>
                              </li>
                        </ul>
                    </div>
                </Navbar>
            </div>
  );
}

export default navbar;