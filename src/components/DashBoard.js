import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';


class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: '',
            student: '',
        }
    }

    componentDidMount() {
        this.changeLink();
    }

    changeLink = () => {
        if (this.props.auth.admin) {
            this.setState({
                employee: "/admin/manageEmployee/view",
                student: "/admin/manageStudents/view",
            })
        } 
        if (!this.props.auth.admin) {

            this.setState({
                employee: "/student/employeeview",
                student: "/student/studentview",
            })
        }
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h4 className="feature-heading ">Dashboard</h4>
                        <hr className="feature-line" />
                    </div>
                </div>
                <div className="row">
                    <div className="dashCards col-lg-6 col-sm-12 mt-6" >
                        <Card>
                            <CardHeader className="dashCard">
                                <div className="row">
                                    <span className="col-12 fa fa-users fa-4x"></span>
                                    <h3></h3>
                                </div>
                                <div className="mt-3" >
                                    <div>
                                        <p>Total Employees</p>
                                    </div>
                                </div>

                            </CardHeader>
                            <CardFooter><Link to="manageEmployee/view">Details</Link></CardFooter>
                        </Card>
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-6" >
                        <Card>
                            <CardHeader className="dashCard" >
                                <div className="row">
                                    <span className="col-12 fa fa-users fa-4x"></span>
                                    <h3></h3>
                                </div>
                                <div className="mt-3" >
                                    <div>
                                        <p>Total Students</p>
                                    </div>
                                </div>

                            </CardHeader>
                            <CardFooter><Link to="manageStudents/view">Details</Link></CardFooter>
                        </Card>
                    </div>
                </div>
                <div className="row mt-2 mt-3">
                    <div className="col-12">
                        <Card>
                            <CardHeader mb="0" mt="0"><span><h4>Notices</h4></span></CardHeader>
                            <CardBody>
                                {/* {
                                    this.props.notices.map((element) => {
                                        return (
                                            <Alert color="primary" className="mb-1 mt-1">
                                                <p>{element.description}</p>
                                            </Alert>
                                        )
                                    })
                                } */}
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        )
    }
}

export default DashBoard;