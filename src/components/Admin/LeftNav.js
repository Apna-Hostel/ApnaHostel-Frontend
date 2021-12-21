import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Nav, NavbarToggler, Collapse, UncontrolledCollapse } from 'reactstrap';

function Carrot({ open }) {
    if (open === true) {
      return (
        <i className="fa fa-caret-up float-right" aria-hidden="true"></i>
      )
    }
    else {
      return (
        <i className="fa fa-caret-down float-right"></i>
  
      );
    }
  }

class LeftNav extends Component {
    constructor(props) {
        super(props)
        this.state= {
            isNavOpen: false,
            ismanageStudentOpen: false,
            ismanageStudentPaymentOpen: false,
            ismanageEmployeeOpen: false,
            ismanagemealopen: false,
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleManageStudent = this.toggleManageStudent.bind(this);
        this.togglemanageEmployee = this.togglemanageEmployee.bind(this);
        this.toggleManageMeal = this.toggleManageMeal.bind(this);

        this.togglemanageStudentPayment = this.toggleManageStudentPayment.bind(this);
    }

    toggleNav() {
        this.setState({isNavOpen: !this.state.isNavOpen});
    }

    toggleManageStudent() {
        this.setState({ ismanageStudentOpen: !this.state.ismanageStudentOpen});
    }

    toggleManageStudentPayment() {
        this.setState({ismanageStudentPaymentOpen: !this.state.ismanageStudentPaymentOpen});
    }

    togglemanageEmployee() {
        this.setState({ismanageEmployeeOpen: !this.state.ismanageEmployeeOpen});
    }

    toggleManageMeal() {
        this.setState({ ismealmanageopen: !this.state.ismanagemealopen });
    }

    render() {
        return (
            <div className="leftNav">
                <Navbar light expand="md" className="me"  style={{paddingLeft: "16px"}}>
                    <NavbarToggler onClick={this.toggleNav}/>
                    <Collapse isOpen={this.state.isNavOpen} navbar >
                        <Nav navbar className="flex-column" >
                            <NavItem>
                                <Link className="nav-link" to="/admin/dashboard">
                                    <i class="fa fa-server"></i> Dashboard
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" id="toggler" onClick={this.toggleManageStudent} to="/admin/manageStudents">
                                    <i className="fa fa-child" aria-hidden="true"></i> Manage Students  <Carrot open={this.state.ismanageStudentOpen} />
                                </Link> 
                            </NavItem>
                            <div>
                                <UncontrolledCollapse toggler="#toggler">
                                    <NavItem>
                                        <Link className="nav-link offset-2" to="/admin/manageStudents/addNew">
                                            <i className="fa fa-plus" aria-hidden="true"></i> Add New
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className="nav-link offset-2" to="/admin/manageStudents/view">
                                            <i className="fa fa-eye" aria-hidden="true"></i> View
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className="nav-link offset-2" id="toggler2" onClick={this.togglemanageStudentPayment} to="/admin/manageStudents/payment">
                                            <i className="fa fa-money" aria-hidden="true"></i> Payment <Carrot open={this.state.ismanageStudentPaymentOpen} />
                                        </Link>
                                    </NavItem>
                                    <div>
                                        <UncontrolledCollapse toggler="#toggler2">
                                            <NavItem>
                                                <Link className="nav-link offset-4" to="/admin/manageStudentsPayment/addBill"> 
                                                    <i className="fa fa-plus" aria-hidden="true"></i> Add Bills
                                                </Link>
                                            </NavItem>
                                            <NavItem>
                                                <Link className="nav-link offset-4" to="/admin/manageStudentsPayment/viewBills"> 
                                                    <i className="fa fa-eye" aria-hidden="true"></i> View
                                                </Link>
                                            </NavItem>
                                        </UncontrolledCollapse>
                                    </div>
                                </UncontrolledCollapse>
                            </div>
                            <NavItem>
                                <Link className="nav-link" id="toggler3" onClick={this.togglemanageEmployee} to="/admin/manageEmployee"> <i className="fa fa-users" aria-hidden="true"></i> Manage Employees <Carrot open={this.state.ismanageEmployeeOpen} /></Link>
                            </NavItem>

                            <div>
                                <UncontrolledCollapse toggler="#toggler3">
                                    <NavItem>
                                        <Link className="nav-link offset-2" to="/admin/manageEmployee/addnew"><i className="fa fa-plus" aria-hidden="true"></i> Add New</Link>
                                    </NavItem>

                                    <NavItem>
                                        <Link className="nav-link offset-2" to="/admin/manageEmployee/view"><i className="fa fa-eye" aria-hidden="true"></i> View</Link>
                                    </NavItem>
                                    
                                </UncontrolledCollapse>
                            </div>
                            <NavItem>
                                <Link id="toggler4" onClick={this.toggleManageMeal} className="nav-link" to="/admin/MealManage"> <i className="fa fa-calendar" aria-hidden="true"></i> Manage Meals
                                    <Carrot open={this.state.ismanagemealopen} /></Link>
                            </NavItem>
                            <div>
                                <UncontrolledCollapse toggler="#toggler4">
                                <NavItem>
                                    <Link className="nav-link offset-2" to="/admin/manageMeal/add"><i className="fa fa-pencil" aria-hidden="true"></i> Update</Link>
                                </NavItem>

                                <NavItem>
                                    <Link className="nav-link offset-2" to="/admin/manageMeal/view"><i className="fa fa-eye" aria-hidden="true"></i> View</Link>
                                </NavItem>
                                </UncontrolledCollapse>
                            </div>
                            <NavItem>
                                <Link className="nav-link" to="/admin/rooms">
                                    <i className="fa fa-hotel" aria-hidden="true"></i> Manage Rooms
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/admin/manageRequests/view">
                                    <i className="fa fa-thumbs-up" aria-hidden="true"></i> Manage Requests
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/admin/noticeBoard">
                                    <i className="fa fa-newspaper-o" aria-hidden="true"></i> Notice Board
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/admin/complaints">
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