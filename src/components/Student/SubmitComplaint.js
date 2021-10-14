import React, { Component } from 'react';
import { Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback } from 'reactstrap';
import ViewComplaints from './ViewComplaint';

class SubmitComplaint extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            touched: {
                title: false,
                description: false
            }
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Submit Complaint</h2>
                        <hr className="feature-line" />
                    </div>
                </div>
                <div>
                    <Form className="myForm" onSubmit={this.handleSubmit}>
                        <Row form>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="title">Title</Label>
                                    <Input required type="text"
                                        name="title" id="title" placeholder="Title" />
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="description">Description</Label>
                                    <Input required type="textarea" name="description" id="description" placeholder="Description" rows="1"/>
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup row>
                            <Col md={{ size: 10 }}>
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
                <div>
                    <ViewComplaints />
                </div>
            </div>
        )
    }
}

export default SubmitComplaint;