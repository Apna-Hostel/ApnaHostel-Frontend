import React, { useState, useEffect } from 'react'
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { useHistory, withRouter } from 'react-router-dom';
import { Card, CardBody, CardHeader } from 'reactstrap';

function LoginForm(props) {

        return (
            <div className="login">
                <Card className="col-md-6 offset-md-3 mt-5 mb-5">
                    <CardHeader className="mt-3 self-align-center"><h4 className="mt-2 text-center">Login</h4></CardHeader>

                    {
                        <CardBody>
                            <Form className="myForm">
                                <FormGroup>
                                    <Label htmlFor="username"><h6>Username</h6></Label>
                                    <Input required type="text" id="username" name="username"  />
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password"><h6>Password</h6></Label>
                                    <Input required type="password" id="password" name="password" 
                                    />
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="remember"
                                        />
                                        <p>Remember Me</p>
                                    </Label>
                                </FormGroup>
                                <button type="submit" value="submit" className="btn btn-dark btn-md btn-block mt-2"><span className="fa fa-sign-in-alt fa-lg"></span>Login</button>
                            </Form>
                        </CardBody>}
                </Card>
            </div>
        )
}

export default LoginForm
