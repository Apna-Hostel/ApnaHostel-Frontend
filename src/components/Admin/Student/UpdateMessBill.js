import React, { Component } from 'react'
import { Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback } from 'reactstrap';

class UpdateMessBill extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Update Mess Bill</h2>
                        <hr className="feature-line" />
                    </div>
                </div>
                <div>
                    <h3>Student Details</h3>
                </div>
                <div >
                    <Form className="myForm">
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="name">Full Name</Label>
                                    <Input required type="text" name="name" sid="name" placeholder="Name" />
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="sid">Student Id</Label>
                                    <Input required type="number" name="sid" sid="sid" placeholder="Student Id" />
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>

                            <Col md={3}>
                                <FormGroup>
                                    <Label for="branch">Branch</Label>
                                    <Input required type="select" name="branch" sid="branch" className="form-control">
                                        <option defaultValue>Select</option>
                                        <option>CSE</option>
                                        <option>ECE</option>
                                        <option>Electrical</option>
                                        <option>Mechanical</option>
                                        <option>Civil</option>
                                        <option>Mettalurgy</option>
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
                                    <Input required type="number" name="rupees" sid="rupees" placeholder="Amount"/>
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="paymentduedate">Payment Due Date</Label>
                                    <Input required type="date" name="paymentduedate" sid="paymentduedate" placeholder="Payment Due Date"/>
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

export default UpdateMessBill;