import React, { Component } from 'react'
import { Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback } from 'reactstrap';
import NoticeView from './NoticeView';

class NoticeBoard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Notice Board</h2>
                        <hr className="feature-line" />
                    </div>
                </div>
                <div >
                    <Form className="myForm" >
                        <Row form>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="title">Title</Label>
                                    <Input required type="text"
                                        name="title" id="title" placeholder="Title"  />
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="description">Description</Label>
                                    <Input required type="textarea" name="description" id="description" placeholder="Description"
                                     />
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
                <div className="col-12 container-fluid">
                    <NoticeView />
                </div>
            </div>
        )
    }
}

export default NoticeBoard;