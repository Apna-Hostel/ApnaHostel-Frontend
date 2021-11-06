import React, {useState} from "react";
import { Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback} from 'reactstrap';

function Contact(props){
    const [initialState, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        touched: {
            name: false,
            email: false,
            subject: false,
            message: false
        }
    })

    const handleSubmit = (event) => {
        //const history = useHistory();
        const message = initialState.message+"%0AWith Regards%0A"+initialState.name + "%0A"+ initialState.email
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=apnahostel13@gmail.com&su=${initialState.subject}&body=${message}`); event.preventDefault();
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
    const handleBlur = (field) => (evt) => {
        setState({
            ...initialState,
            touched: { ...initialState.touched, [field]: true }
        });
    }

    const validate = (name, email, subject, message) => {
        const errors = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
        if (initialState.touched.name && name.length < 3)
            errors.name = 'Name should be of minimum length of 3 characters';
        else if (initialState.touched.name && name.length > 30)
            errors.name = 'Name should not be greater than 30 characters';
        if (initialState.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Enter a valid email';
        if (initialState.touched.subject && subject.length < 10)
            errors.subject = 'Subject should contain a minimum of 10 characters';
        if (initialState.touched.subject && subject.length > 30)
            errors.subject = 'Subject should contain a maximum of 30 characters';
        if (initialState.touched.subject && message.length < 50)
            errors.message = 'Description should contain a minimum of 50 characters';

        return errors;

    }
    const errors = validate(initialState.name, initialState.email, initialState.subject, initialState.message);

    return (
        <div id="contact" className="container">
            <div class="col-md-8">
              <div class="row">
                <div class="section-title">
                  <h2 style={{fontSize: "2.5rem"}}>Get In Touch</h2>
                  <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
                </div>
                <Form className="myForm" onSubmit={handleSubmit}>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="name">Your Name</Label>
                                    <Input type="text" name="name" id="name" placeholder="Your Name" required 
                                        onChange={handleInputChange} valid={errors.name === ''} invalid={errors.name !== ''}
                                        onBlur={handleBlur('name')}
                                    />
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="email">Your Email</Label>
                                    <Input type="email" name="email" id="email" placeholder="Your Email" required 
                                        onChange={handleInputChange} valid={errors.email === ''} invalid={errors.email !== ''}
                                        onBlur={handleBlur('email')}
                                    />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>

                        <FormGroup row>
                            <Col>
                                <Label for="subject">Subject</Label>
                                <Input type="text" name="subject" id="subject" placeholder="Subject" required 
                                    onChange={handleInputChange} valid={errors.subject === ''} invalid={errors.subject !== ''}
                                    onBlur={handleBlur('subject')}
                                />
                                <FormFeedback>{errors.subject}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row> 
                            <Col>
                                <Label for="message">Message</Label>
                                <Input type="textarea" name="message" id="message" placeholder="Message"
                                    rows="3" required  onChange={handleInputChange} valid={errors.message === ''} invalid={errors.message !== ''}
                                    onBlur={handleBlur('message')}/>
                                <FormFeedback>{errors.message}</FormFeedback>
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

export default Contact;