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
import Register from "./register";
import { logoutUser, loginUser } from "../../redux/actions/auth"
import { postNotice, fetchNotices, deleteNotice } from "../../redux/actions/notices";
import { postEmployee, fetchEmployees, deleteEmployee, updateEmployee } from "../../redux/actions/employee";
import { deleteStudent, fetchStudents, postStudent, updateStudent} from "../../redux/actions/students"
import { deleteMealbill, fetchMealbill, postMealbill, updateMealbill } from "../../redux/actions/messBills";
import { postComplaint, fetchComplaints, deleteComplaint } from "../../redux/actions/complaint";
import { deleteRoom, fetchRooms, postRoom, updateRoom } from "../../redux/actions/rooms";
import { fetchRequests, postRequest, updateRequest, deleteRequest } from "../../redux/actions/request";
import { postMeal, fetchMeals, updateMeal } from "../../redux/actions/meals";
import { fetchHostels } from "../../redux/actions/hostel";
import Shivalik from "./hostels/shivalik";
import Aravali from "./hostels/aravali";
import Himalaya from "./hostels/himalaya";
import Kurukshetra from "./hostels/kurukshetra";
import Vindhya from "./hostels/vindhya";
import KalpanaChawla from "./hostels/kalpanachawla";

const mapDispatchToProps = (dispatch) => ({
    loginUser: (creds) => dispatch(loginUser(creds)),
    logoutUser: () => dispatch(logoutUser()),
    postNotice: (notice) => dispatch(postNotice(notice)),
    fetchNotices: () => dispatch(fetchNotices()),
    deleteNotice: (noticeId) => dispatch(deleteNotice(noticeId)),
    postEmployee: (employee) => dispatch(postEmployee(employee)),
    fetchEmployees: () => dispatch(fetchEmployees()),
    deleteEmployee: (employeeId) => dispatch(deleteEmployee(employeeId)),
    updateEmployee: (employee) => dispatch(updateEmployee(employee)),
    postStudent: (student) => dispatch(postStudent(student)),
    fetchStudents: () => dispatch(fetchStudents()),
    deleteStudent: (studentId) => dispatch(deleteStudent(studentId)),
    updateStudent: (student) => dispatch(updateStudent(student)),
    postMealbill: (mealBill) => dispatch(postMealbill(mealBill)),
    fetchMealbill: () => dispatch(fetchMealbill()),
    deleteMealbill: (billId) => dispatch(deleteMealbill(billId)),
    updateMealbill: (mealBill) => dispatch(updateMealbill(mealBill)),
    postComplaint: (complaint) => dispatch(postComplaint(complaint)),
    fetchComplaints: () => dispatch(fetchComplaints()),
    deleteComplaint: (complaintId) => dispatch(deleteComplaint(complaintId)),
    postRoom: (room) => dispatch(postRoom(room)),
    fetchRooms: () => dispatch(fetchRooms()),
    deleteRoom: (roomId) => dispatch(deleteRoom(roomId)),
    updateRoom: (room) => dispatch(updateRoom(room)),
    postRequest: (request) => dispatch(postRequest(request)),
    fetchRequests: () => dispatch(fetchRequests()),
    deleteRequest: (requestId) => dispatch(deleteRequest(requestId)),
    updateRequest: (request) => dispatch(updateRequest(request)),
    fetchHostels: () => dispatch(fetchHostels()),
    postMeal: (meal) => dispatch(postMeal(meal)),
    fetchMeals: () => dispatch(fetchMeals()),
    updateMeal: (meal) => dispatch(updateMeal(meal))
})

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        notices: state.notices,
        employees: state.employees,
        students: state.students,
        mealBills: state.mealBills,
        complaints: state.complaints,
        rooms: state.rooms,
        requests: state.requests,
        hostels: state.hostels,
        meals: state.meals,
    }
}
class LandingPage extends Component {
    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.loginUser(JSON.parse(localStorage.getItem('creds')));
            this.props.fetchNotices();
            this.props.fetchEmployees();
            this.props.fetchStudents();
            this.props.fetchMealbill();
            this.props.fetchComplaints();
            this.props.fetchRooms();
            this.props.fetchRequests();
            this.props.fetchMeals();
        }
        this.props.fetchHostels();
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
                        <AdminRoute path="/admin" component={() => <Admin auth={this.props.auth} postNotice={this.props.postNotice} notices={this.props.notices}  deleteNotice={this.props.deleteNotice} fetchNotices={this.props.fetchNotices} 
                            postEmployee={this.props.postEmployee} fetchEmployees={this.props.fetchEmployees} employees={this.props.employees} updateEmployee={this.props.updateEmployee} deleteEmployee={this.props.deleteEmployee}  
                            postStudent={this.props.postStudent} fetchStudents={this.props.fetchStudents} students={this.props.students} updateStudent={this.props.updateStudent} deleteStudent={this.props.deleteStudent} 
                            postMealbill={this.props.postMealbill} fetchMealbill={this.props.fetchMealbill} mealBills={this.props.mealBills} updateMealbill={this.props.updateMealbill} deleteMealbill={this.props.deleteMealbill}
                            deleteComplaint={this.props.deleteComplaint} complaints={this.props.complaints} fetchComplaints={this.props.fetchComplaints}
                            postRoom={this.props.postRoom} rooms={this.props.rooms} fetchRooms={this.props.fetchRooms} updateRoom={this.props.updateRoom} deleteRoom={this.props.deleteRoom}
                            requests={this.props.requests} fetchRequests={this.props.fetchRequests} deleteRequest={this.props.deleteRequest}
                            meals={this.props.meals} updateMeal={this.props.updateMeal} fetchMeals={this.props.fetchMeals}
                            /> } />
                        <StudentRoute path="/student" component={() => <Student auth={this.props.auth} postComplaint={this.props.postComplaint} complaints={this.props.complaints}
                            employees={this.props.employees} notices={this.props.notices} students={this.props.students} mealBills={this.props.mealBills} meals={this.props.meals} />} />
                        <Route exact path="/gallery" component={() => <Gallery />} />
                        <Route exact path="/gallery/shivalik" component={() => <Shivalik />} />
                        <Route exact path="/gallery/aravali" component={() => <Aravali />} />
                        <Route exact path="/gallery/himalaya" component={() => <Himalaya />} />
                        <Route exact path="/gallery/kurukshetra" component={() => <Kurukshetra />} />
                        <Route exact path="/gallery/vindhya" component={() => <Vindhya />} />
                        <Route exact path="/gallery/kalpanachawla" component={() => <KalpanaChawla />} />
                        <Route exact path="/contactus" component={() => <Contact />} />
                        <Route exact path="/login" component={() => <LoginForm auth={this.props.auth} loginUser={this.props.loginUser} />} />
                        <Route exact path="/register" component={() => <Register postRequest={this.props.postRequest} hostels={this.props.hostels} fetchHostels={this.props.fetchHostels} />} />
                        <Route exact path="/team" component={() => <Team />} />
                        <Redirect to="/home"/>
                    </Switch>
                </div>
                <Footer/>
                
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingPage));