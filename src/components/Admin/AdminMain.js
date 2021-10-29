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
            Employees:[],
        }
    }

    componentDidMount() {
        let employees = [];
        this.props.employees.employees.forEach(element => {
            employees.push({
            name: element.employeeName,
            gender: element.gender,
            employeetype: element.employeeType,
            mobile: element.mobileNo,
            date: element.joiningDate.split('T')[0],
            address: element.address,
            actions: <div>
                <Link className="fa fa-pencil edit mr-2" to={`/admin/updateEmployee/${element._id}`}></Link>
                <i className="fa fa-trash delete" onClick={() => {
                if (window.confirm("Are u sure u want to delete ?"))
                    this.props.deleteEmployee(element._id)
                }}></i>
            </div>
            })
        });
        const employeeList = this.state.Employees.concat(employees);

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
            Employees: employeeList
        });
            
        }; 
    render() {
        const employeedetails =({match}) =>{
            return (
                <EmployeeUpdate updateEmployee={this.props.updateEmployee} id={match.params.id} 
                employee={this.props.employees.employees.filter((employee) =>(
                    employee._id===match.params.id))[0]}
                />
            )
        }
        return (
            <div className="feature admin">
                <div className="row">
                    <div className="col-md-3">
                        <LeftNav />
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route path="/admin/dashboard" component={() => <DashBoard auth={this.props.auth} notices={this.props.notices.notices} employees={this.props.employees}/>} />
                            <Route exact path="/admin/manageStudents/addNew" component={() => <AddStudent />} />
                            <Route exact path="/admin/manageStudents/view" component={() => <ViewStudent />} />
                            <Route exact path="/admin/manageStudents/updateStudent" component={() => <UpdateStudent />} />
                            <Route exact path="/admin/manageStudentsPayment/addBill" component={ () => <AddMessBill />} />
                            <Route exact path="/admin/manageStudentsPayment/viewBills" component={() => <ViewMessBill />} />
                            <Route exact path="/admin/manageStudentsPayment/updateMessBill" component={() => <UpdateMessBill />} />
                            <Route exact path="/admin/manageEmployee/addnew" component={() => <AddEmployee postEmployee={this.props.postEmployee} />} />
                            <Route exact path="/admin/manageEmployee/view" component={() => <EmployeeView employees={this.state.Employees} />} />
                            <Route exact path="/admin/manageEmployee/updateEmployee/:id" component={employeedetails} />
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