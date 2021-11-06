import React, {Component} from "react";
import {Form, Row, Col, FormGroup, Label, Input, FormFeedback, Button} from 'reactstrap'

class AddMessBill extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            id: '',
            rupees: '',
            branch: '',
            paymentduedate: '',
            touched: {
                name: false,
                id: false,
                rupees: false,
                paymentduedate: false,
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
        this.props.postMealbill(this.state);
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate = (name, id, paymentduedate, rupees) => {
        const errors = {
            name: '',
            rupees: '',
            paymentduedate: '',
            id: ''
        }
        if (this.state.touched.name && name.length < 3)
            errors.name = 'Name should be of minimum length of 3 characters';
        else if (this.state.touched.name && name.length > 30)
            errors.name = 'Name should not be greater than 30 characters';

        if (this.state.touched.id && id.length !== 8) {
            errors.id = 'Length of the student id should be equal to 8';
        }
        if (this.state.touched.paymentduedate && paymentduedate.length === 0)
            errors.paymentduedate = 'Specify Date';
        if (this.state.touched.rupees && rupees.length === 0)
            errors.rupees = 'Specify Payment Amount';

        return errors;
    }

    render(){
        const errors = this.validate(this.state.name, this.state.id, this.state.paymentduedate, this.state.rupees);
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Add Mess Bill</h2>
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
                                        onChange={this.handleInputChange} valid={errors.name === ''} invalid={errors.name !== ''} onBlur={this.handleBlur('name')}/>
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="id">Student Id</Label>
                                    <Input required type="number" name="id" id="id" placeholder="Student Id" value={this.state.id}
                                        onChange={this.handleInputChange} valid={errors.id === ''} invalid={errors.id !== ''} onBlur={this.handleBlur('id')}/>
                                    <FormFeedback>{errors.id}</FormFeedback>
                                </FormGroup>
                            </Col>

                            <Col md={4}>
                                <FormGroup>
                                    <Label for="branch">Branch</Label>
                                    <Input required type="select" name="branch" id="branch" className="form-control" value={this.state.branch}
                                        onChange={this.handleInputChange}>
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
                                    <Input required type="number" name="rupees" id="rupees"  placeholder="Amount" value={this.state.rupees}
                                        onChange={this.handleInputChange} valid={errors.rupees === ''} invalid={errors.rupees !== ''} onBlur={this.handleBlur('rupees')}/>
                                    <FormFeedback>{errors.rupees}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="paymentduedate">Payment Due Date</Label>
                                    <Input required type="date" name="paymentduedate" id="paymentduedate" placeholder="Payment Due Date" value={this.state.paymentduedate}
                                        onChange={this.handleInputChange} valid={errors.paymentduedate === ''} invalid={errors.paymentduedate !== ''} onBlur={this.handleBlur('paymentduedate')}/>
                                    <FormFeedback>{errors.paymentduedate}</FormFeedback>
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