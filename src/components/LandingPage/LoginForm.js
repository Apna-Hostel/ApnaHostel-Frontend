import React, { useState, useEffect } from 'react'
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { useHistory, withRouter } from 'react-router-dom';
import { Card, CardBody, CardHeader } from 'reactstrap';

function LoginForm(props) {

    const [initialState, setState] = useState({
        username: '',
        password: '',
        id: '',
    })

    const history = useHistory();
    useEffect(() => {
        if (props.auth.isAuthenticated && props.auth.admin) history.push('/admin/dashboard');
        else if (props.auth.isAuthenticated && !props.auth.admin) history.push('/student/dashboard');
    })
    
    const handleLogin = (event) => {
        event.preventDefault();
        props.loginUser({ username: initialState.username, password: initialState.password });
    }

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setState({
            ...initialState,
            [name]: value
        });
    }

    return (
        <div className="login">
            <Card className="col-md-6 offset-md-3 mt-5 mb-5">
                <CardHeader className="mt-3 self-align-center"><h4 className="mt-2 text-center">Login</h4></CardHeader>

                {
                    <CardBody>
                        <Form className="myForm" onSubmit={handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username"><h6>Username</h6></Label>
                                <Input required type="text" id="username" name="username" value={initialState.username} onChange={handleInputChange} />
                                <FormFeedback></FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password"><h6>Password</h6></Label>
                                <Input required type="password" id="password" name="password" value={initialState.password} onChange={handleInputChange} />
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
                    {props.auth.errMessage && <div><p>{props.auth.errMessage} Please Try Again</p></div>}
            </Card>
        </div>
    )
}

export default withRouter(LoginForm);
