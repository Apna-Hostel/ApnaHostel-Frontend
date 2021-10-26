import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import LeftNav from "./LeftNav";
import AddStudent from "./Student/AddStudent";
import ViewStudent from "./Student/ViewStudent";
import UpdateStudent from "./Student/UpdateStudent";
import AddMessBill from "./Student/AddMessBill";
import ViewMessBill from "./Student/ViewMessBill";
import UpdateMessBill from "./Student/UpdateMessBill";
import AddEmployee from "./Employee/AddEmployee";
import EmployeeView from "./Employee/EmployeeView";
import EmployeeUpdate from "./Employee/EmployeeUpdate";
import Complaints from "./ViewComplaints";
import NoticeBoard from "./NoticeBoard";
import DashBoard from "../DashBoard";

class Admin extends Component {
    constructor(props){
        super(props);
        this.state = {
            Employees:[]
        };
    }
        
        componentDidMount() {
    let employees = [];
    if (this.props.employees!= null) {
      this.props.employees.employees.forEach(element => {
        employees.push({
          name: element.employeeName,
          gender: element.gender,
          employeetype: element.employeeType,
          designation: element.designation,
          mobile: element.mobileNo,
          date: element.joiningDate.split('T')[0],
          address: element.hostel.name,
          actions: <div>
            <Link className="fa fa-pencil-alt edit mr-2"></Link>
            <i className="fa fa-trash-alt delete"></i>
          </div>
        })
      });
    }
    const employeeList = this.state.Employees.concat(employees);
    this.setState({
        Employees: employeeList,
    });
}   
    render() {
        return (
            <div className="feature admin">
                <div className="row">
                    <div className="col-md-3">
                        <LeftNav />
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route path="/admin/dashboard" component={() => <DashBoard auth={this.props.auth}/>} />
                            <Route exact path="/admin/manageStudents/addNew" component={() => <AddStudent />} />
                            <Route exact path="/admin/manageStudents/view" component={() => <ViewStudent />} />
                            <Route exact path="/admin/manageStudents/updateStudent" component={() => <UpdateStudent />} />
                            <Route exact path="/admin/manageStudentsPayment/addBill" component={ () => <AddMessBill />} />
                            <Route exact path="/admin/manageStudentsPayment/viewBills" component={() => <ViewMessBill />} />
                            <Route exact path="/admin/manageStudentsPayment/updateMessBill" component={() => <UpdateMessBill />} />
                            <Route exact path="/admin/manageEmployee/addnew" component={() => <AddEmployee postEmployee={this.props.postEmployee} />} />
                            <Route exact path="/admin/manageEmployee/view" component={() => <EmployeeView employees={this.state.Employees} />} />
                            <Route exact path="/admin/manageEmployee/updateEmployee" component={() => <EmployeeUpdate />} />
                            <Route exact path="/admin/complaints" component={() => <Complaints />} />
                            <Route exact path="/admin/noticeBoard" component={() => <NoticeBoard />} />

                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;