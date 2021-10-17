import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Admin from "../Admin/AdminMain";
import Student from "../Student/StudentMain";
import Navbar from "./navbar"
import Footer from "./footer"
import Header from "./header"
import Gallery from "./gallery"
import Team from "./team"
import Contact from "./contact"
import LoginForm from "./LoginForm";

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="mainSection">
                    <Switch>
                        <Route path="/admin" component={() => <Admin />} />
                        <Route path="/student" component={() => <Student />} />
                        <Route path="/home" component={() => <Header />} />
                        <Route path="/gallery" component={() => <Gallery />} />
                        <Route path="/contactus" component={() => <Contact />} />
                        <Route path="/team" component={() => <Team />} />
                        <Route path="/login" component={() => <LoginForm />} />
                        <Redirect to="/home"/>
                    </Switch>
                </div>
                <Footer/>
                
            </div>
        )
    }
}

export default LandingPage;