import React, { Component } from "react";
import {NavItem, Navbar, NavbarBrand} from "reactstrap"
import {Link} from "react-router-dom"

class navbar extends Component {
      constructor(props){
            super(props);
            this.state = {
                  username: '',
                  password: '',
                  id: '',
            };
            this.handleLogout = this.handleLogout.bind(this);
      }

      handleLogout() {
            this.props.logoutUser();
      }

      handleInputChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
            [name]: value
      });
      }

      handleSubmit = (event) => {
            event.preventDefault();
      }

      render() {
            const isLoggedIn = this.props.auth.isAuthenticated;
            let button;
            if(isLoggedIn) {
                  button = <LogoutButton onClick={this.handleLogout} />;
            } else {
                  button = <LoginButton />;
            }
            return (
                  <div>
                        <Navbar style={{backgroundColor: "#f19b84"}} expand="md" className="me">
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
                                          {button}
                                    </li>
                                    <li className="nav-item">
                                          <Link className="nav-link me" to="/register">
                                                Register
                                          </Link>
                                    </li>
                                    <li className="nav-item">
                                          <Link className="nav-link me" to="/login">
                                                Go to DashBoard
                                          </Link>
                                    </li>
                              </ul>
                              </div>
                        </Navbar>
                  </div>
            );
      }
}

function LoginButton(props) {
      return (<Link className="nav-link me" to="/login"><span className="fa fa-sign-in-alt fa-lg"></span> Login</Link>);
  }
  
  function LogoutButton(props) {
      return (<Link to="/home" className="nav-link me" onClick={props.onClick}><span className="fa fa-sign-out-alt fa-lg"></span> Logout</Link>);
  }  

export default navbar;