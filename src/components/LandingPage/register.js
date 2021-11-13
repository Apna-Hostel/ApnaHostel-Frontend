import React, { Component } from "react";
import { Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback } from 'reactstrap';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            sid: '',
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
            year: '',
            hostel: '',
            touched: {
                name: false,
                sid: false,
                mobile: false,
                email: false,
                father: false,
                mother: false,
                Fnum: false,
                dob: false,
                gender: false,
                year: false,
                hostel: false
            },
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
        this.props.postRequest(this.state);
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate = (name, sid, mobile, email, father, mother, Fnum, dob, gender, year, hostel) => {
        const errors = {
            name: '',
            sid: '',
            mobile: '',
            email: '',
            father: '',
            mother: '',
            Fnum: '',
            dob: '',
            gender: '',
            year: '',
            hostel: ''
        }
        if (this.state.touched.name && name.length < 3)
            errors.name = 'Name should be of minimum length of 3 characters';
        else if (this.state.touched.name && name.length > 30)
            errors.name = 'Name should not be greater than 30 characters';

        if (this.state.touched.mother && mother.length < 3)
            errors.mother = 'Name should be of minimum length of 3 characters';
        else if (this.state.touched.mother && mother.length > 30)
            errors.mother = 'Name should not be greater than 30 characters';

        if (this.state.touched.father && father.length < 3)
            errors.father = 'Name should be of minimum length of 3 characters';
        else if (this.state.touched.father && father.length > 30)
            errors.father = 'Name should not be greater than 30 characters';
        if (this.state.touched.dob && dob.length === 0)
            errors.dob = 'Specify Date of Birth';
        if (this.state.touched.sid && sid.length !== 8) {
            errors.sid = 'Length of the student id should be equal to 8';
        }
        if (this.state.touched.gender && gender.length === 0)
            errors.gender = 'Specify Gender';
        if (this.state.touched.year && year.length === 0)
            errors.year = 'Specify Year';
        if (this.state.touched.hostel && hostel.length === 0)
            errors.hostel = 'Specify Hostel';
        

        const reg = /^\d{10}$/;
        if (this.state.touched.mobile && !reg.test(mobile))
            errors.mobile = 'Enter a valid Mobile Number';
        if (this.state.touched.Fnum && !reg.test(Fnum))
            errors.Fnum = 'Enter a valid Mobile Number';
        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Enter a valid email';

        return errors;
    }


    render(){
        const errors = this.validate(this.state.name, this.state.sid, this.state.mobile,
            this.state.email, this.state.father, this.state.mother, this.state.Fnum, this.state.dob, this.state.gender, this.state.year, this.state.hostel);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Request for hostel</h2>
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
                                        onChange={this.handleInputChange} valid={errors.name === ''} invalid={errors.name !== ''} onBlur={this.handleBlur('name')}/>
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="sid">Student Id(As Login Id)</Label>
                                    <Input required type="text" name="sid" id="sid" placeholder="Student Id" value={this.state.sid} 
                                        onChange={this.handleInputChange} valid={errors.sid === ''} invalid={errors.sid !== ''} onBlur={this.handleBlur('sid')}/>
                                    <FormFeedback>{errors.sid}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="mobile">Mobile No.</Label>
                                    <Input required type="text" name="mobile" id="mobile" placeholder="Mobile No." value={this.state.mobile} 
                                        onChange={this.handleInputChange} valid={errors.mobile === ''} invalid={errors.mobile !== ''} onBlur={this.handleBlur('mobile')}/>
                                    <FormFeedback>{errors.mobile}</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="dob">Date of Birth</Label>
                                    <Input required type="date" name="dob" id="dob" placeholder="Date Of Birth" value={this.state.dob} 
                                        onChange={this.handleInputChange} valid={errors.dob === ''} invalid={errors.dob !== ''} onBlur={this.handleBlur('dob')}/>
                                        <FormFeedback>{errors.dob}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="gender">Gender</Label>
                                    <Input required type="select" name="gender" id="gender" value={this.state.gender} 
                                        onChange={this.handleInputChange} className="form-control" valid={errors.gender === ''} invalid={errors.gender !== ''} onBlur={this.handleBlur('gender')}>
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
                                        onChange={this.handleInputChange} valid={errors.email === ''} invalid={errors.email !== ''} onBlur={this.handleBlur('email')}/>
                                    <FormFeedback>{errors.email}</FormFeedback>
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
                                <Label for="hostel">Hostel</Label>
                                    <Input required type="select" name="hostel" id="hostel" className="form-control" value={this.state.hostel} 
                                        onChange={this.handleInputChange} valid={errors.hostel === ''} invalid={errors.hostel !== ''} onBlur={this.handleBlur('hostel')}>
                                        <option defaultValue>Select</option>
                                    {this.props.hostels.hostels.map(element => (
                                        <option value={element._id}>{element.name} hostel</option>
                                    ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="year">Year</Label>
                                    <Input required type="select" name="year" id="year" value={this.state.year} 
                                        onChange={this.handleInputChange} className="form-control" valid={errors.year === ''} invalid={errors.year !== ''} onBlur={this.handleBlur('year')}>
                                        <option defaultValue>Select</option>
                                        <option vlaue="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </Input>
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
                                        onChange={this.handleInputChange} valid={errors.father === ''} invalid={errors.father !== ''} onBlur={this.handleBlur('father')}/>
                                    <FormFeedback>{errors.father}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="mother">Mother's Name</Label>
                                    <Input required type="text" name="mother" id="mothername" placeholder="Mother's Name" value={this.state.mother} 
                                        onChange={this.handleInputChange} valid={errors.mother === ''} invalid={errors.mother !== ''} onBlur={this.handleBlur('mother')}/>
                                    <FormFeedback>{errors.mother}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="Fnum">Father's Mobile No.</Label>
                                    <Input required type="text" name="Fnum" id="fathermobile" placeholder="Father Mobile No." value={this.state.Fnum} 
                                        onChange={this.handleInputChange} valid={errors.Fnum === ''} invalid={errors.Fnum !== ''} onBlur={this.handleBlur('Fnum')}/>
                                    <FormFeedback>{errors.Fnum}</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup row>
                            <Col md={{ size: 10 }}>
                                <Button type="submit" color="primary">
                                    Request
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Register;