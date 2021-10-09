import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import AddStudent from "./Student/AddStudent";
import LeftNav from "./LeftNav";
import AddMessBill from "./Student/AddMessBill";
import UpdateStudent from "./Student/UpdateStudent";
import UpdateMessBill from "./Student/UpdateMessBill";

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
                            {/* <Route exact path="/admin/manageStudents/view" component={() => <ViewStudent />} /> */}
                            <Route exact path="/admin/manageStudents/updateStudent" component={() => <UpdateStudent />} />
                            <Route exact path="/admin/manageStudentsPayment/addBill" component={() => <AddMessBill />} />
                            <Route exact path="/admin/manageStudentsPayment/updateMessBill" component={() => <UpdateMessBill />} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;