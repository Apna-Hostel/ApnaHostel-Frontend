import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import LeftNav from "./LeftNav";
import StudentProfile from "./Profile";
import SubmitComplaint from "./SubmitComplaint";
import ViewEmployee from "./ViewEmployee";
import ViewMessBill from "./ViewMessBill";
import ViewStudent from "./ViewStudent";

class Student extends Component {
    render() {
        return (
            <div className="feature admin">
                <div className="row">
                    <div className="col-md-3">
                        <LeftNav />
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route exact path="/student/studentview" component={() => <ViewStudent />} />
                            <Route exact path="/student/employeeview" component={() => <ViewEmployee />} />
                            <Route exact path="/student/profile" component={() => <StudentProfile />} />
                            <Route exact path="/student/bills" component={() => <ViewMessBill />} />
                            <Route exact path="/student/complaints" component={() => <SubmitComplaint />} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Student;