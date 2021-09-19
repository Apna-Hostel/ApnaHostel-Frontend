import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Admin from "../Admin/AdminMain";
import Student from "../Student/StudentMain";

class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className="mainSection">
                    <Switch>
                        <Route path="/admin" component={() => <Admin />} />
                        <Route path="/student" component={() => <Student />} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default LandingPage;