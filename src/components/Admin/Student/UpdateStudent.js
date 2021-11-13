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
            year: (typeof this.props.student === 'undefined') ? '' : this.props.student.year,
            touched: {
                sid: false,
                fullname: false,
                mobile: false,
                program: false,
                father: false,
                mother: false,
                fnum: false,
                address: false,
                email: false,
                dob: false
            }
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

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate = (
        sid,
        fullname,
        mobile,
        program,
        mother,
        father,
        fnum,
        email,
        address,
        dob
    ) => {
        const errors = {
            sid: '',
            fullname: '',
            mobile: '',
            program: '',
            mother: '',
            father: '',
            fnum: '',
            email: '',
            address: '',
            dob: ''
        }

        if (this.state.touched.sid && sid.length !== 8)
            errors.sid = 'Sid should be of 8 characters';
        if (this.state.touched.fullname && fullname.length < 3)
            errors.fullname = 'Name should be greater than 3 characters';
        if (this.state.touched.program && program.length < 3)
            errors.program = 'Program should be of minimum length of 3 characters';
        if (this.state.touched.mother && (mother.length > 30 || mother.length < 3))
            errors.mother = 'Name should not be greater than 30 characters and smaller than 3 characters';
        if (this.state.touched.father && (father.length > 30 || father.length < 3))
            errors.father = 'Name should not be greater than 30 characters and smaller than 3 characters';
        if (this.state.touched.address && (address.length < 5 || address.length > 50))
            errors.address = 'Address length should lie between 5 and 50 characters'
        if (this.state.touched.dob && dob.length === 0)
            errors.dob = 'Specify Date of Birth';
        const reg = /^\d{10}$/;
        if (this.state.touched.mobile && !reg.test(mobile))
            errors.mobile = 'Enter a valid Mobile Number';
        if (this.state.touched.fnum && !reg.test(fnum))
            errors.fnum = 'Enter a valid Mobile Number';
        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Enter a valid email';

        return errors;
    }
    
    render(){
        const errors = this.validate(
            this.state.sid,
            this.state.fullname,
            this.state.mobile,
            this.state.program,
            this.state.mother,
            this.state.father,
            this.state.fnum,
            this.state.email,
            this.state.address,
            this.state.dob);

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
                                    onChange={this.handleInputChange} valid={errors.fullname === ''} invalid={errors.fullname !== ''} onBlur={this.handleBlur('fullname')}/>
                                    <FormFeedback>{errors.fullname}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label htmlFor="sid">Student Id(As Login Id)</Label>
                                    <Input required type="text" name="sid" id="sid" placeholder="Student Id" value={this.state.sid}
                                    onChange={this.handleInputChange} valid={errors.sid === ''} invalid={errors.sid !== ''} onBlur={this.handleBlur('sid')}/>
                                    <FormFeedback>{errors.sid}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="mobile">Mobile No.</Label>
                                    <Input required type="text" name="mobile" id="mobile" placeholder="Mobile No."value={this.state.mobile}
                                    onChange={this.handleInputChange} valid={errors.mobile === ''} invalid={errors.mobile !== ''} onBlur={this.handleBlur('mobile')}/>
                                    <FormFeedback>{errors.mobile}</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="dob">Date of Birth</Label>
                                    <Input required type="date" name="dob" id="dob" placeholder="Date Of Birth" value={this.state.dob}
                                        onChange={this.handleInputChange} valid={errors.dob === ''} invalid={errors.dob !== ''} onBlur={this.handleBlur('dob')}/>
                                        <FormFeedback>{errors.dob}</FormFeedback>
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
                                    onChange={this.handleInputChange} valid={errors.email === ''} invalid={errors.email !== ''} onBlur={this.handleBlur('email')}/>
                                    <FormFeedback>{errors.email}</FormFeedback>
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
                                    <Label for="year">Year</Label>
                                    <Input required type="select" name="year" id="year" className="form-control" value={this.state.year} 
                                        onChange={this.handleInputChange}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label htmlFor="roomNo">Room No.</Label>
                                    <Input required type="select" name="roomNo" id="roomNo" className="form-control" value={this.state.roomNo}
                                    onChange={this.handleInputChange}>
                                    {this.props.rooms.rooms.filter(e => (e.available !=="0")).map(element => (
                                            <option value={[element.roomNo, element._id, element.available-1]}>{element.roomNo}</option>
                                    ))}
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
                                    <Label htmlFor="father">Father's Name</Label>
                                    <Input required type="text" name="father" id="fathername" placeholder="Father's Name" value={this.state.father}
                                    onChange={this.handleInputChange} valid={errors.father === ''} invalid={errors.father !== ''} onBlur={this.handleBlur('father')}/>
                                    <FormFeedback>{errors.father}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="mother">Mother's Name</Label>
                                    <Input required type="text" name="mother" id="mothername" placeholder="Mother's Name" value={this.state.mother}
                                    onChange={this.handleInputChange} valid={errors.mother === ''} invalid={errors.mother !== ''} onBlur={this.handleBlur('mother')}/>
                                    <FormFeedback>{errors.mother}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label htmlFor="Fnum">Father's Mobile No.</Label>
                                    <Input required type="text" name="Fnum" id="fathermobile" placeholder="Father Mobile No." value={this.state.fnum}
                                    onChange={this.handleInputChange} valid={errors.fnum === ''} invalid={errors.fnum !== ''} onBlur={this.handleBlur('fnum')}/>
                                    <FormFeedback>{errors.fnum}</FormFeedback>
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