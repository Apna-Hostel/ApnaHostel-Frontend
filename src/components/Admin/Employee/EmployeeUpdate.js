import React, { Component } from 'react'
import { Form, Input, Button, Label, Col, Row, FormGroup } from 'reactstrap';

class EmployeeUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: (typeof this.props.employee === 'undefined') ? '' : this.props.employee.employeeName,
            mobile: (typeof this.props.employee === 'undefined') ? '' : this.props.employee.mobileNo,
            gender: (typeof this.props.employee === 'undefined') ? '' : this.props.employee.gender,
            type: (typeof this.props.employee === 'undefined') ? '' : this.props.employee.employeeType,
            address: (typeof this.props.employee === 'undefined') ? '' : this.props.employee.address,
            salary: (typeof this.props.employee === 'undefined') ? '' : this.props.employee.salary,
            joinDate: (typeof this.props.employee === 'undefined') ? '' : this.props.employee.joiningDate.split('T')[0],
            eid: (typeof this.props.employee === 'undefined') ? '' : this.props.employee.eid,
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateEmployee(
            this.state
        );
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {      
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Update Employee </h2>
                        <hr className="feature-line" />
                    </div>
                </div>

                <div >
                    <Form className="myForm" onSubmit={this.handleSubmit}>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="name">Full Name</Label>
                                    <Input required type="text" name="name" id="name" placeholder="Name"
                                    value={this.state.name} onChange={this.handleInputChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="gender">Gender</Label>
                                    <Input required type="select" name="gender" id="gender" className="form-control"
                                    value={this.state.gender} onChange={this.handleInputChange}>
                                        <option defaultValue>Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="type">Employee Type</Label>
                                    <Input required type="text" name="type" id="type"  placeholder="Employee Type"
                                    value={this.state.type} onChange={this.handleInputChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="eid">Employee Id</Label>
                                    <Input required type="text" name="eid" id="eid"
                                     placeholder="Employee Id" value={this.state.eid} onChange={this.handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="joinDate">Joining Date</Label>
                                    <Input required type="date" name="joinDate"  id="joiningdate" placeholder="Joining Date" 
                                        value={this.state.joinDate} onChange={this.handleInputChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="address">Address</Label>
                                    <Input required type="textarea" name="address" id="address"
                                     placeholder="Address" rows="1" value={this.state.address} onChange={this.handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="salary">Salary</Label>
                                    <Input required type="number" name="salary" id="salary"
                                    placeholder="Salary" rows="1" value={this.state.salary} onChange={this.handleInputChange}/>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="mobile">Mobile No.</Label>
                                    <Input required type="text" name="mobile" id="mobile"
                                     placeholder="Mobile No." value={this.state.mobile} onChange={this.handleInputChange} />
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

export default EmployeeUpdate;