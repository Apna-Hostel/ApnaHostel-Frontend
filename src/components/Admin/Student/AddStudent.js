import React, { Component } from "react";
import { Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback } from 'reactstrap';

class AddStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            id: '',
            mobile: '',
            dob: '',
            gender: '',
            email: '',
            branch: '',
            nationality: '',
            address: '',
            father: '',
            mother: '',
            Fnum: '',
            roomNo: '',
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
        this.props.postStudent(this.state);
    }


    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Add New Student</h2>
                        <hr className="feature-line" />
                    </div>
                </div>
                <div>
                    <h3>Student Details</h3>
                </div>
                <div >
                    <Form className="myForm" onSubmit={this.handleSubmit}>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="name">Full Name</Label>
                                    <Input required type="text" name="name" id="name" placeholder="Name" value={this.state.name} 
                                        onChange={this.handleInputChange} />
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="id">Student Id(As Login Id)</Label>
                                    <Input required type="text" name="id" id="id" placeholder="Student Id" value={this.state.id} 
                                        onChange={this.handleInputChange}/>
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="mobile">Mobile No.</Label>
                                    <Input required type="text" name="mobile" id="mobile" placeholder="Mobile No." value={this.state.mobile} 
                                        onChange={this.handleInputChange}/>
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="dob">Date of Birth</Label>
                                    <Input required type="date" name="dob" id="dob" placeholder="Date Of Birth" value={this.state.dob} 
                                        onChange={this.handleInputChange}/>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="gender">Gender</Label>
                                    <Input required type="select" name="gender" id="gender" value={this.state.gender} 
                                        onChange={this.handleInputChange} className="form-control">
                                        <option defaultValue>Select</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input required type="email" name="email" id="email" placeholder="Email" value={this.state.email} 
                                        onChange={this.handleInputChange}/>
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="branch">Branch</Label>
                                    <Input required type="select" name="branch" id="branch" className="form-control" value={this.state.branch} 
                                        onChange={this.handleInputChange}>
                                        <option defaultValue>Select</option>
                                        <option value="CSE">CSE</option>
                                        <option value="ECE">ECE</option>
                                        <option value="Electrical">Electrical</option>
                                        <option value="Mechanical">Mechanical</option>
                                        <option value="Civil">Civil</option>
                                        <option value="Mettalurgy">Metallurgy</option>
                                        <option value="Aerospace">Aerospace</option>
                                        <option value="Production">Production</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="nationality">Nationality</Label>
                                    <Input required type="text" name="nationality" id="nationality" placeholder="Nationality" value={this.state.nationality} 
                                        onChange={this.handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="address">Address</Label>
                                    <Input required type="textarea" name="address" id="address" placeholder="Address" rows="1" value={this.state.address} 
                                        onChange={this.handleInputChange}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="roomNo">Room No.</Label>
                                    <Input required type="text" name="roomNo" id="roomNo" placeholder="Room No." value={this.state.roomNo} 
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
                                    <Label for="father">Father's Name</Label>
                                    <Input required type="text" name="father" id="fathername" placeholder="Father's Name" value={this.state.father} 
                                        onChange={this.handleInputChange}/>
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="mother">Mother's Name</Label>
                                    <Input required type="text" name="mother" id="mothername" placeholder="Mother's Name" value={this.state.mother} 
                                        onChange={this.handleInputChange}/>
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="Fnum">Father's Mobile No.</Label>
                                    <Input required type="text" name="Fnum" id="fathermobile" placeholder="Father Mobile No." value={this.state.Fnum} 
                                        onChange={this.handleInputChange}/>
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup row>
                            <Col md={{ size: 10 }}>
                                <Button type="submit" color="primary">
                                    Save
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}

export default AddStudent;