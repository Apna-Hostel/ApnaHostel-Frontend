import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import LeftNav from "./LeftNav";
import SubmitComplaint from "./SubmitComplaint";

class Student extends Component {
    render() {
        return (
            <div className="feature admin">
                <div className="row">
                    <div className="col-md-3">
                        <LeftNav />
                    </div>
                    <div className="col-md-9">
                        <Route exact path="/student/complaints" component={() => <SubmitComplaint />} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Student;