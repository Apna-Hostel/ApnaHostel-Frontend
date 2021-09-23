import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import AddStudent from "./Student/AddStudent";
import LeftNav from "./LeftNav";
import AddMessBill from "./Student/AddMessBill";

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
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;