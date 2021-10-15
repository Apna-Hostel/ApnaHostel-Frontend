import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import LeftNav from "./LeftNav";
import SubmitComplaint from "./SubmitComplaint";
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
                            <Route exact path="/student/complaints" component={() => <SubmitComplaint />} />
                            <Route exact path="/student/bills" component={() => <ViewMessBill />} />
                            <Route exact path="/student/studentsview" component={() => <ViewStudent />} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Student;