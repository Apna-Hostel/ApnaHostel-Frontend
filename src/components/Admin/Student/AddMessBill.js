import React, {Component} from "react";
import {Form, Row, Col, FormGroup, Label, Input, FormFeedback, Button} from 'reactstrap'

class AddMessBill extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Add Mess Bill</h2>
                        <hr className="feature-line" />
                    </div>
                </div>
                <div >
                    <Form className="myForm">
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="name">Full Name</Label>
                                    <Input required type="text" name="name" id="name" placeholder="Name" />
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="id">Student Id</Label>
                                    <Input required type="number" name="id" id="id" placeholder="Student Id" />
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>

                            <Col md={4}>
                                <FormGroup>
                                    <Label for="branch">Branch</Label>
                                    <Input required type="select" name="branch" id="branch" className="form-control" >
                                        <option defaultValue>Select</option>
                                        <option>CSE</option>
                                        <option>ECE</option>
                                        <option>Electrical</option>
                                        <option>Mechanical</option>
                                        <option>Civil</option>
                                        <option>Metallurgy</option>
                                        <option>Aerospace</option>
                                        <option>Production</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="rupees">Payment</Label>
                                    <Input required type="number" name="rupees" id="rupees"  placeholder="Amount" />
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="paymentduedate">Payment Due Date</Label>
                                    <Input required type="date" name="paymentduedate" id="paymentduedate" placeholder="Payment Due Date" />

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

export default AddMessBill;