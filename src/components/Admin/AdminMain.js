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
import Rooms from "./AddRooms";

class Admin extends Component {
    constructor(props){
        super(props);
        this.state = {
            Notices: [],
            Employees: [],
            Students: [],
            MealBills: [],
            Complaints :[],
            Rooms: [],
        };
    }

    componentDidMount() {
        let students = [];
        if (this.props.students.students != null) {
        this.props.students.students.forEach(element => {
            students.push({
            sid: element.sid,
            name: element.studentName,
            mobile: element.mobileNo,
            program: element.branch,
            gMob: element.fatherMobile,
            guardian: element.fatherName,
            pAddress: element.address,
            roomNo: element.roomNo,
            actions: <div>
                <Link className="fa fa-pencil edit mr-2" to={`/admin/manageStudents/updateStudent/${element._id}`}></Link>
                <i className="fa fa-trash delete" onClick={() => {
                if (window.confirm("Are u sure u want to delete ?"))
                    this.props.deleteStudent(element._id)
                }}></i>
            </div>
            })
        });
        }
        const studentlist = this.state.Students.concat(students);

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
                <Link className="fa fa-pencil edit mr-2" to={`/admin/manageEmployee/updateEmployee/${element._id}`}></Link>
                <i className="fa fa-trash delete" onClick={() => {
                if (window.confirm("Are u sure u want to delete ?"))
                    this.props.deleteEmployee(element._id)
                }}></i>
            </div>
            })
        });
        const employeeList = this.state.Employees.concat(employees);

        let rooms = [];
        this.props.rooms.rooms.forEach(element => {
            rooms.push({
                roomNo: element.roomNo,
                capacity: element.capacity,
                actions: <div>
                    <Link className="fa fa-pencil edit mr-2" to={`/admin/rooms/updateRoom/${element._id}`}></Link>
                    <i className="fa fa-trash delete" onClick={() => {
                    if (window.confirm("Are u sure u want to delete ?"))
                        this.props.deleteRoom(element._id)
                    }}></i>
                </div>
            })
        });
        const roomList = this.state.Rooms.concat(rooms);

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

        let mealBills = [];
        if (this.props.mealBills.bills != null) {
        this.props.mealBills.bills.forEach(element => {
            mealBills.push({
            name: element.name,
            sid: element.sid,
            branch: element.branch,
            amount: element.payment,
            date: element.paymentDate.split('T')[0],
            actions: <div>
                <Link className="fa fa-pencil edit mr-2" to={`/admin/manageStudentsPayment/updateMessBill/${element._id}`}></Link>
                <i className="fa fa-trash delete" onClick={() => {
                if (window.confirm("Are u sure u want to delete ?"))
                    this.props.deleteMealbill(element._id)
                }}></i>
            </div>
            })
        });
        }
        const mealBillsList = this.state.MealBills.concat(mealBills);

        let complaints = [];
        this.props.complaints.complaints.forEach(element => {
        complaints.push({
            name: element.studentName.username,
            title: element.title,
            complaint: element.complaint,
            actions: <div>
            <i className="fa fa-trash delete" onClick={() => {
                if (window.confirm("Are u sure u want to delete ?"))
                this.props.deleteComplaint(element._id)
            }}></i>
            </div>
        })
        });
        const complaintsList = this.state.Complaints.concat(complaints);

        this.setState({
            Notices: noticeList,
            Employees: employeeList,
            Students: studentlist,
            MealBills: mealBillsList,
            Complaints: complaintsList,
            Rooms: roomList
        });
            
        }; 
    render() {
        const studentdetails = ({ match }) => {
            return (
              <UpdateStudent
                updateStudent={this.props.updateStudent}
                id={match.params.id}
                student={this.props.students.students.filter((student) => (student._id === match.params.id))[0]}
              />
            )
        }

        const employeedetails =({match}) =>{
            return (
                <EmployeeUpdate updateEmployee={this.props.updateEmployee} id={match.params.id} 
                employee={this.props.employees.employees.filter((employee) =>(
                    employee._id===match.params.id))[0]}
                />
            )
        }

        const messbilldetails = ({ match }) => {
            return (
              <UpdateMessBill
                updateMealbill={this.props.updateMealbill}
                id={match.params.id}
                mealBill={this.props.mealBills.bills.filter((bill) => (bill._id === match.params.id))[0]}
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
                            <Route exact path="/admin/manageStudents/addNew" component={() => <AddStudent postStudent={this.props.postStudent} />} />
                            <Route exact path="/admin/manageStudents/view" component={() => <ViewStudent students={this.state.Students} errMess={this.props.students.errMess} />} />
                            <Route exact path="/admin/manageStudents/updateStudent/:id" component={studentdetails} />
                            <Route exact path="/admin/manageStudentsPayment/addBill" component={ () => <AddMessBill postMealbill={this.props.postMealbill} />} />
                            <Route exact path="/admin/manageStudentsPayment/viewBills" component={() => <ViewMessBill messBills={this.state.MealBills} errMess={this.props.mealBills.errMess} />} />
                            <Route exact path="/admin/manageStudentsPayment/updateMessBill/:id" component={messbilldetails} />
                            <Route exact path="/admin/manageEmployee/addnew" component={() => <AddEmployee postEmployee={this.props.postEmployee} />} />
                            <Route exact path="/admin/manageEmployee/view" component={() => <EmployeeView employees={this.state.Employees} errMess={this.props.errMess} />} />
                            <Route exact path="/admin/manageEmployee/updateEmployee/:id" component={employeedetails} />
                            <Route exact path="/admin/complaints" component={() => <Complaints complaints={this.state.Complaints} errMess={this.props.errMess} />} />
                            <Route exact path="/admin/noticeBoard" component={() => <NoticeBoard notices={this.state.Notices} postNotice={this.props.postNotice} errMess={this.props.notices.errMess} />} />
                            <Route exact path="/admin/rooms" component={() => <Rooms rooms={this.props.rooms} postRoom={this.props.postRoom} errMess={this.props.rooms.errMess} />} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;