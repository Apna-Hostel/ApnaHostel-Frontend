import React from "react";
import './css/bootstrap.css'
import './css/bootstrap.min.css'
import './css/style.css'
import {NavItem} from "reactstrap"
import {Link} from "react-router-dom"

function navbar() {
    return (<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Apna Hostel</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <NavItem>
            <Link className="nav-link" to="/header">
                  Home
                  <span class="sr-only">(current)</span>
            </Link>
      </NavItem>
      <NavItem>
            <Link className="nav-link" to="/gallery">
                  Gallery
            </Link>
      </NavItem>
      <NavItem>
            <Link className="nav-link" to="/team">
                  Team
            </Link>
      </NavItem>
      <NavItem>
            <Link className="nav-link" to="/contact">
                  Contact Us
            </Link>
      </NavItem>
    </div>
  </div>
</nav>
  </div>  );
}

export default navbar;