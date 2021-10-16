import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import LeftNav from "./LeftNav";
import NoticeView from "./NoticeView";
import DashBoard from "../DashBoard";
class Student extends Component {
    render() {
        return (
            <div className="feature admin">
                <div className="row">
                    <div className="col-md-3">
                        <LeftNav />
                    </div>
                    <div>
                        <Switch>
                            <Route exact path="/student/noticeBoard" component={() => <NoticeView />} />
                            <Route exact path="/student/dashboard" component={() => <DashBoard />} />
                        </Switch>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Student;