import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Nav, NavbarToggler, Collapse } from 'reactstrap';

class LeftNav extends Component {
    constructor(props) {
        super(props)
        this.state= {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({isNavOpen: !this.state.isNavOpen});
    }

    render() {
        return (
            <div className="leftNav">
                <Navbar light expand="md" className="me"  style={{paddingLeft: "16px"}}>
                    <NavbarToggler onClick={this.toggleNav}/>
                    <Collapse isOpen={this.state.isNavOpen} navbar >
                        <Nav navbar className="flex-column" >
                            <NavItem>
                                <Link className="nav-link" to="/student/dashboard">
                                    <i class="fa fa-server"></i> Dashboard
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/student/profile">
                                    <i class="fa fa-user"></i> Profile
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/student/bills">
                                    <i class="fa fa-money"></i> Bills
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/student/menu"><i className="fa fa-calendar" aria-hidden="true"></i> Menu</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/student/noticeBoard">
                                    <i className="fa fa-newspaper-o" aria-hidden="true"></i> Notice Board
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/student/complaints">
                                    <i className="fa fa-book" aria-hidden="true"></i> Complaints
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default LeftNav;