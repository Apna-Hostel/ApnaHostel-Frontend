import React, { Component } from "react";

class StudentProfile extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading">Profile</h2>
                        <hr className="feature-line" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h2>
                                    {}'s Profile
                                </h2>
                            </div>
                            <div className="card-body">
                                <div className="row d-flex justify-content-start">

                                    <h5 className="card-title col-sm-3 ">Name</h5>
                                    <h5 className="card-title col-sm-3">{}</h5>


                                    <h5 className="card-title col-sm-3">Father's Name</h5>
                                    <h5 className="card-title col-sm-3">{}</h5>

                                </div>

                                <div className="row d-flex justify-content-start">

                                    <h5 className="card-title col-sm-3 ">Student ID</h5>
                                    <h5 className="card-title col-sm-3">{}</h5>


                                    <h5 className="card-title col-sm-3 ">Nationality</h5>
                                    <h5 className="card-title col-sm-3">{}</h5>


                                </div>

                                <div className="row d-flex justify-content-start">

                                    <h5 className="card-title col-sm-3 ">Date of Birth</h5>
                                    <h5 className="card-title col-sm-3">{}</h5>


                                    <h5 className="card-title col-sm-3">Branch</h5>
                                    <h5 className="card-title col-sm-3">{}</h5>

                                </div>

                                <div className="row d-flex justify-content-start">

                                    <h5 className="card-title col-sm-3">Email</h5>
                                    <h5 className="card-title col-sm-3">{}</h5>


                                    <h5 className="card-title col-sm-3">Address</h5>
                                    <h5 className="card-title col-sm-3">{}</h5>

                                </div>
                                <div className="row d-flex justify-content-start">

                                    <h5 className="card-title col-sm-3">Mobile No.</h5>
                                    <h5 className="card-title col-sm-3">{}</h5>

                                    <h5 className="card-title col-sm-3">Room No.</h5>
                                    <h5 className="card-title col-sm-3">{}</h5>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentProfile;