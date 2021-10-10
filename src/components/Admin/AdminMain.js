import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import AddStudent from "./Student/AddStudent";
import LeftNav from "./LeftNav";
import AddMessBill from "./Student/AddMessBill";
import AddEmployee from "./Employee/AddEmployee";
import EmployeeView from "./Employee/EmployeeView";
// import EmployeeUpdate from "./Employee/EmployeeUpdate";

class Admin extends Component {
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
                            <Route exact path="/admin/manageStudentsPayment/addBill" component={() => <AddMessBill />} />
                            <Route exact path="/admin/manageEmployee/addnew" component={() => <AddEmployee />} />
                            <Route exact path="/admin/manageEmployee/view" component={() => <EmployeeView />} />
                            {/* <Route exact path="/admin/manageEmployee/updateEmployee" component={() => <EmployeeUpdate />} /> */}
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;