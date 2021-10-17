import React from "react";
import { Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback} from 'reactstrap';

function contact(){
    return (
        <div id="contact" className="container">
            <div class="col-md-8">
              <div class="row">
                <div class="section-title">
                  <h2 style={{fontSize: "2.5rem"}}>Get In Touch</h2>
                  <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
                </div>
                <Form className="myForm">
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="name">Your Name</Label>
                                    <Input type="text" name="name" id="name" placeholder="Your Name" required />
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="email">Your Email</Label>
                                    <Input type="email" name="email" id="email" placeholder="Your Email" required />
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>

                        <FormGroup row>
                            <Col>
                                <Label for="subject">Subject</Label>
                                <Input type="text" name="subject" id="subject" placeholder="Subject" required />
                                <FormFeedback></FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col>
                                <Label for="message">Message</Label>
                                <Input type="textarea" name="message" id="message" placeholder="Message"
                                    rows="3" required />
                                <FormFeedback></FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md={{ size: 10 }}>
                                <Button type="submit" color="dark">
                                    Send Message
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
              </div>
            </div>
        </div>
        );
}

export default contact;