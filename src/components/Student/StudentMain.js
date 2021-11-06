import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import LeftNav from "./LeftNav";
import StudentProfile from "./Profile";
import SubmitComplaint from "./SubmitComplaint";
import ViewEmployee from "./ViewEmployee";
import ViewMessBill from "./ViewMessBill";
import ViewStudent from "./ViewStudent";

import ViewNotice from "./ViewNotice";
import DashBoard from "../DashBoard";
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
                            <Route exact path="/student/studentview" component={() => <ViewStudent students={this.state.students}/>} />
                            <Route exact path="/student/employeeview" component={() => <ViewEmployee employees={this.props.employees}/>} />
                            <Route exact path="/student/profile" component={() => <StudentProfile students={this.props.students}/>} />
                            <Route exact path="/student/bills" component={() => <ViewMessBill meals={this.props.meals}/>} />
                            <Route exact path="/student/complaints" component={() => <SubmitComplaint postComplaint={this.props.postComplaint} complaints={this.state.complaints} />} />
                            <Route exact path="/student/noticeBoard" component={() => <ViewNotice notices={this.props.notices.notices}/>} />
                            <Route exact path="/student/dashboard" component={() => <DashBoard employees={this.props.employees} students={this.props.students}
                             auth={this.props.auth} notices={this.props.notices.notices}  />} />
                        </Switch>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Student;