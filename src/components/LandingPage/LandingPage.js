import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Admin from "../Admin/AdminMain";
import Student from "../Student/StudentMain";
import Navbar from "./navbar"
import Footer from "./footer"
import Header from "./header"
import Gallery from "./gallery"
import Team from "./team"
import Contact from "./contact"
import LoginForm from "./LoginForm";
import { logoutUser, loginUser } from "../../redux/actions/auth"
import { postNotice, fetchNotices, deleteNotice } from "../../redux/actions/notices";

const mapDispatchToProps = (dispatch) => ({
    loginUser: (creds) => dispatch(loginUser(creds)),
    logoutUser: () => dispatch(logoutUser()),
    postNotice: (notice) => dispatch(postNotice(notice)),
    fetchNotices: () => dispatch(fetchNotices()),
    deleteNotice: (noticeId) => dispatch(deleteNotice(noticeId)),
})

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        notices: state.notices,
    }
}
class LandingPage extends Component {
    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.loginUser(JSON.parse(localStorage.getItem('creds')));
            this.props.fetchNotices();
        }
    }
    render() {
        const AdminRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
                this.props.auth.isAuthenticated && this.props.auth.admin
                    ? <Component {...props} />
                    : <Redirect to={{
                        pathname: '/home',
                        state: { from: props.location }
                    }} />
            )} />
        );

        const StudentRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
                this.props.auth.isAuthenticated && !this.props.auth.admin
                    ? <Component {...props} />
                    : <Redirect to={{
                        pathname: '/home',
                        state: { from: props.location }
                    }} />
            )} />
        );

        return (
            <div>
                <Navbar auth={this.props.auth} loginUser={this.props.loginUser} logoutUser={this.props.logoutUser} />
                <div className="mainSection">
                    <Switch>
                        <Route path="/home" component={() => <Header />} />
                        <AdminRoute path="/admin" component={() => <Admin auth={this.props.auth} postNotice={this.props.postNotice} notices={this.props.notices} deleteNotice={this.props.deleteNotice} fetchNotices={this.props.fetchNotices}/>} />
                        <StudentRoute path="/student" component={() => <Student auth={this.props.auth} />} />
                        <Route path="/gallery" component={() => <Gallery />} />
                        <Route path="/contactus" component={() => <Contact />} />
                        <Route path="/login" component={() => <LoginForm auth={this.props.auth} loginUser={this.props.loginUser} />} />
                        <Route path="/team" component={() => <Team />} />
                        <Redirect to="/home"/>
                    </Switch>
                </div>
                <Footer/>
                
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingPage));