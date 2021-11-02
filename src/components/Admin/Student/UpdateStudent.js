import React, {Component} from "react";
import { Col, Form, FormFeedback, FormGroup, Input, Label, Row, Button } from "reactstrap";

class UpdateStudent extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            sid: (typeof this.props.student === 'undefined') ? '' : this.props.student.sid,
            fullname: (typeof this.props.student === 'undefined') ? '' : this.props.student.studentName,
            mobile: (typeof this.props.student === 'undefined') ? '' : this.props.student.mobileNo,
            program: (typeof this.props.student === 'undefined') ? '' : this.props.student.branch,
            father: (typeof this.props.student === 'undefined') ? '' : this.props.student.fatherName,
            mother: (typeof this.props.student === 'undefined') ? '' : this.props.student.motherName,
            fnum: (typeof this.props.student === 'undefined') ? '' : this.props.student.fatherMobile,
            address: (typeof this.props.student === 'undefined') ? '' : this.props.student.address,
            email: (typeof this.props.student === 'undefined') ? '' : this.props.student.email,
            roomNo: (typeof this.props.student === 'undefined') ? '' : this.props.student.roomNo,
            dob: (typeof this.props.student === 'undefined') ? '' : this.props.student.dob.split('T')[0],
            gender: (typeof this.props.student === 'undefined') ? '' : this.props.student.gender,
            nationality: (typeof this.props.student === 'undefined') ? '' : this.props.student.nationality,
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateStudent(
            this.state
        );
    }
    
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading">Update Student Details</h2>
                        <hr className="feature-line" />
                    </div>
                </div>
                <div>
                    <h3>Student Details</h3>
                </div>
                <div>
                    <Form className="myForm" onSubmit={this.handleSubmit}>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input required type="text" name="name" id="name" placeholder="Name" value={this.state.fullname}
                                    onChange={this.handleInputChange}/>
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label htmlFor="id">Student Id(As Login Id)</Label>
                                    <Input required type="text" name="id" id="id" placeholder="Student Id" value={this.state.sid}
                                    onChange={this.handleInputChange}/>
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="mobile">Mobile No.</Label>
                                    <Input required type="text" name="mobile" id="mobile" placeholder="Mobile No."value={this.state.mobile}
                                    onChange={this.handleInputChange} />
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="dob">Date of Birth</Label>
                                    <Input required type="date" name="dob" id="dob" placeholder="Date Of Birth" value={this.state.dob}
                                    onChange={this.handleInputChange}/>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label htmlFor="gender">Gender</Label>
                                    <Input required type="select" name="gender" id="gender" value={this.state.gender}
                                    onChange={this.handleInputChange}>
                                        <option defaultValue>Select</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="email">Email</Label>
                                    <Input required type="email" name="email" id="email" placeholder="Email" value={this.state.email}
                                    onChange={this.handleInputChange}/>
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="branch">Branch</Label>
                                    <Input required type="select" name="branch" id="branch" className="form-control" value={this.state.program}
                                    onChange={this.handleInputChange}>
                                        <option defaultValue>Select</option>
                                        <option value="CSE">CSE</option>
                                        <option value="ECE">ECE</option>
                                        <option value="Electrical">Electrical</option>
                                        <option value="Mechanical">Mechanical</option>
                                        <option value="Civil">Civil</option>
                                        <option value="Mettalurgy">Mettalurgy</option>
                                        <option value="Aerospace">Aerospace</option>
                                        <option value="Production">Production</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label htmlFor="nationality">Nationality</Label>
                                    <Input required type="text" name="nationality" id="nationality" placeholder="Nationality" value={this.state.nationality}
                                    onChange={this.handleInputChange}/>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="address">Address</Label>
                                    <Input required type="textarea" name="address" id="address" placeholder="Address" rows="1" value={this.state.address}
                                    onChange={this.handleInputChange}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="address">Room No.</Label>
                                    <Input required type="text" name="room" id="room" placeholder="Room No." value={this.state.roomNo}
                                    onChange={this.handleInputChange}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <div>
                            <h3>Parent's Details</h3>
                        </div>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="father">Father's Name</Label>
                                    <Input required type="text" name="father" id="fathername" placeholder="Father's Name" value={this.state.father}
                                    onChange={this.handleInputChange}/>
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="mother">Mother's Name</Label>
                                    <Input required type="text" name="mother" id="mothername" placeholder="Mother's Name" value={this.state.mother}
                                    onChange={this.handleInputChange}/>
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label htmlFor="Fnum">Father's Mobile No.</Label>
                                    <Input required type="text" name="Fnum" id="fathermobile" placeholder="Father Mobile No." value={this.state.fnum}
                                    onChange={this.handleInputChange}/>
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup row>
                            <Col md={{ size: 10 }}>
                                <Button type="submit" color="primary">
                                    Update
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}

export default UpdateStudent;