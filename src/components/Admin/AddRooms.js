import React, { Component } from 'react'
import { Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback } from 'reactstrap';
import ViewRooms from './ViewRooms';

class Rooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomNo: '',
            capacity: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.postRoom(this.state);
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Add Rooms</h2>
                        <hr className="feature-line" />
                    </div>
                </div>
                <div >
                    <Form className="myForm" onSubmit={this.handleSubmit}>
                        <Row form>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="roomNo">Room No.</Label>
                                    <Input required type="text"
                                        name="roomNo" id="roomNo" placeholder="Room No." value={this.state.roomNo} onChange={this.handleInputChange}
                                    />
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="capacity">Capacity</Label>
                                    <Input required type="text" name="capacity" id="capacity" placeholder="Capacity"
                                        value={this.state.capacity} onChange={this.handleInputChange}
                                    />
                                    <FormFeedback></FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup row>
                            <Col md={{ size: 10 }}>
                                <Button type="submit" color="primary">
                                    Add
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
                <div className="col-12 container-fluid">
                    <ViewRooms rooms={this.props.rooms} errMess={this.props.errMess} />
                </div>
            </div>
        )
    }
}

export default Rooms;