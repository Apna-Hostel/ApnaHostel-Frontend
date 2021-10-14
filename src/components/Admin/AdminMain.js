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

class Admin extends Component {
    constructor(props){
        super(props);
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
                            <Route exact path="/admin/manageStudents/addNew" component={() => <AddStudent />} />
                            <Route exact path="/admin/manageStudents/view" component={() => <ViewStudent />} />
                            <Route exact path="/admin/manageStudents/updateStudent" component={() => <UpdateStudent />} />
                            <Route exact path="/admin/manageStudentsPayment/addBill" component={() => <AddMessBill />} />
                            <Route exact path="/admin/manageStudentsPayment/viewBills" component={() => <ViewMessBill />} />
                            <Route exact path="/admin/manageStudentsPayment/updateMessBill" component={() => <UpdateMessBill />} />
                            <Route exact path="/admin/manageEmployee/addnew" component={() => <AddEmployee />} />
                            <Route exact path="/admin/manageEmployee/view" component={() => <EmployeeView />} />
                            <Route exact path="/admin/manageEmployee/updateEmployee" component={() => <EmployeeUpdate />} />
                            <Route exact path="/admin/complaints" component={() => <Complaints />} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;