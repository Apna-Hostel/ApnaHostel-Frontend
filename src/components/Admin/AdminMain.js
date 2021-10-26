import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import LeftNav from "./LeftNav";
import AddStudent from "./Student/AddStudent";
import ViewStudent from "./Student/ViewStudent";
import UpdateStudent from "./Student/UpdateStudent";
import AddMessBill from "./Student/AddMessBill";
import ViewMessBill from "./Student/ViewMessBill";
import UpdateMessBill from "./Student/UpdateMessBill";
import AddEmployee from "./Employee/AddEmployee";
import EmployeeView from "./Employee/EmployeeView";
import EmployeeUpdate from "./Employee/EmployeeUpdate";
import Complaints from "./ViewComplaints";
import NoticeBoard from "./NoticeBoard";
import DashBoard from "../DashBoard";

class Admin extends Component {
    constructor(props){
        super(props);
        this.state = {
            Notices: [],
        }
    }

    componentDidMount() {
        let notices = [];
        this.props.notices.notices.forEach(element => {
            notices.push({
                title: element.title,
                description: element.description,
                actions: <div>
                    <i className="fa fa-trash delete" onClick={() => {
                        if (window.confirm("Are u sure u want to delete ?"))
                        this.props.deleteNotice(element._id)
                    }}></i>
                </div>
            })
        });
        const noticeList = this.state.Notices.concat(notices);

        this.setState({
            Notices: noticeList,
        });
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
                            <Route path="/admin/dashboard" component={() => <DashBoard auth={this.props.auth} notices={this.props.notices.notices}/>} />
                            <Route exact path="/admin/manageStudents/addNew" component={() => <AddStudent />} />
                            <Route exact path="/admin/manageStudents/view" component={() => <ViewStudent />} />
                            <Route exact path="/admin/manageStudents/updateStudent" component={() => <UpdateStudent />} />
                            <Route exact path="/admin/manageStudentsPayment/addBill" component={() => <AddMessBill />} />
                            <Route exact path="/admin/manageStudentsPayment/viewBills" component={() => <ViewMessBill />} />
                            <Route exact path="/admin/manageStudentsPayment/updateMessBill" component={() => <UpdateMessBill />} />
                            <Route exact path="/admin/manageEmployee/addnew" component={() => <AddEmployee />} />
                            <Route exact path="/admin/manageEmployee/view" component={() => <EmployeeView />} />
                            <Route exact path="/admin/manageEmployee/updateEmployee" component={() => <EmployeeUpdate />} />
                            <Route exact path="/admin/complaints" component={() => <Complaints />} />
                            <Route exact path="/admin/noticeBoard" component={() => <NoticeBoard notices={this.state.Notices} postNotice={this.props.postNotice} errMess={this.props.notices.errMess} />} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;