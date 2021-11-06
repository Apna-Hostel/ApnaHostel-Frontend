import { render } from '@testing-library/react';
import React, { Component } from 'react'
import { Form, Input, Button, Label, Col, Row, FormGroup} from 'reactstrap';


class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: '',
            mobile: '',
            gender: '',
            type: '',
            address: '',
            salary: '',
            joinDate: '',
            eid: '',
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.postEmployee(this.state);

    }
    
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
render(){
return (
    <div>
        <div className="row">
            <div className="col-12 container-fluid">
                <h2 className="feature-heading ">Add New Employee</h2>
                <hr className="feature-line" />
            </div>
        </div>
        <div >
            <Form className="myForm" onSubmit={this.handleSubmit}>
                <Row form>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="name">Full Name</Label>
                            <Input required type="text" name="name" id="name" placeholder="Name" value={this.state.name}
                            onChange={this.handleInputChange}
                                />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="gender">Gender</Label>
                            <Input required type="select" name="gender" id="gender" value={this.state.gender}  className="form-control" onChange={this.handleInputChange}>
                                <option defaultValue>Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="type">Employee Type</Label>
                            <Input required type="text" name="type" id="type" 
                            value={this.state.type} placeholder="Employee Type" onChange={this.handleInputChange}/>
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
                            <Input required type="date" name="joinDate" id="joiningdate" 
                            placeholder="Joining Date" value={this.state.joinDate}
                            onChange={this.handleInputChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input required type="textarea" name="address" id="address"
                                placeholder="Address" value={this.state.address}
                                onChange={this.handleInputChange}
                                 rows="1" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="salary">Salary</Label>
                            <Input required type="number" name="salary" id="salary"
                                 placeholder="Salary" rows="1" value={this.state.salary} onChange={this.handleInputChange} />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="mobile">Mobile No.</Label>
                            <Input required type="text" name="mobile" id="mobile"
                                placeholder="Mobile No." value={this.state.mobile} onChange={this.handleInputChange}/>
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

export default AddEmployee;