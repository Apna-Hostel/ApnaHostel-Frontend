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
import Complaints from "../Admin/ViewComplaints";
class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
          Students: [],
          Employees: [],
          Notices: [],
          MessBills: [],
          Complaints: []
        }
      }
      componentDidMount() {
        let students = [];
        this.props.students.students.forEach(element => {
          students.push({
            sid: element.sid,
            name: element.studentName,
            mobile: element.mobileNo,
            program: element.branch,
            gMob: element.fatherMobile,
            guardian: element.fatherName,
            pAddress: element.address,
    
          })
        });
        const studentlist = this.state.Students.concat(students);
    
        let employees = [];
        this.props.employees.employees.forEach(element => {
          employees.push({
            name: element.employeeName,
            gender: element.gender,
            employeetype: element.employeeType,
            designation: element.designation,
            mobile: element.mobileNo,
            date:element.joiningDate.split('T')[0].split("-")[2] + "-" + element.joiningDate.split('T')[0].split("-")[1] + "-" + element.joiningDate.split('T')[0].split("-")[0],
            address: element.hostel.name
          })
        });
        const employeeList = this.state.Students.concat(employees);
    
        let notices = [];
        this.props.notices.notices.forEach(element => {
          notices.push({
            title: element.title,
            description: element.description,
    
          })
        });
        const noticeList = this.state.Notices.concat(notices);
    
        let mealBills = [];
        this.props.mealBills.bills.forEach(element => {
          if (element.sid === this.props.auth.user.username) {
            mealBills.push({
              name: element.name,
              sid: element.sid,
              branch: element.branch,
              amount: element.payment,
              date: element.paymentDate.split('T')[0].split("-")[2] + "-" + element.paymentDate.split('T')[0].split("-")[1] + "-" + element.paymentDate.split('T')[0].split("-")[0],
            })
          }
        });
        const mealBillsList = this.state.MessBills.concat(mealBills);
    
        let complaints = [];
        this.props.complaints.complaints.forEach(element => {
          complaints.push({
            name: element.studentName.username,
            title: element.title,
            complaint: element.complaint
          })
        });
        console.log(complaints);
        const complaintsList = this.state.Complaints.concat(complaints);
    
        this.setState({
          Students: studentlist,
          Employees: employeeList,
          Notices: noticeList,
          MessBills: mealBillsList,
          Complaints: complaintsList
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
                            <Route exact path="/student/studentview" component={() => <ViewStudent students={this.state.Students} errMess={this.props.errMess} />} />
                            <Route exact path="/student/employeeview" component={() => <ViewEmployee employees={this.state.Employees} errMess={this.props.errMess} />} />
                            <Route exact path="/student/profile" component={() => <StudentProfile students={this.props.students} auth={this.props.auth} />} />
                            <Route exact path="/student/bills" component={() => <ViewMessBill messBills={this.state.MessBills} errMess={this.props.errMess} />} />
                            <Route exact path="/student/complaints" component={() => <SubmitComplaint postComplaint={this.props.postComplaint} complaints={this.state.Complaints} auth={this.props.auth} />} />
                            <Route exact path="/student/noticeBoard" component={() => <ViewNotice notices={this.props.notices.notices} errMess={this.props.errMess} />} />
                            <Route path="/student/dashboard" component={() => <DashBoard employees={this.props.employees} students={this.props.students}
                             auth={this.props.auth} notices={this.props.notices.notices}  />} />
                            <Redirect to="/student/dashboard" />
                        </Switch>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Student;