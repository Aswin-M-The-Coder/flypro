import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, CardTitle, CardText, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Available() {
    // Define initial state with dummy data
    const [data, setData] = useState([
        {
            from: "India",
            to: "London",
            date: "2024-04-18",
            time: "18:30",
            tickets: "49",
            flight_id:"HU89F38F389"
        },
        {
            from: "USA",
            to: "Paris",
            date: "2024-04-20",
            time: "15:45",
            tickets: "35",
            flight_id:"HU89F38F389"
        },
        {
            from: "China",
            to: "Dubai",
            date: "2024-04-22",
            time: "12:00",
            tickets: "20",
            flight_id:"HU89F38F389"
        },
        {
            from: "Australia",
            to: "New York",
            date: "2024-04-25",
            time: "10:30",
            tickets: "15",
            flight_id:"HU89F38F389"
        }
    ]);

    // State variables for search input values
    const [searchFrom, setSearchFrom] = useState('');
    const [searchTo, setSearchTo] = useState('');
    const [searchDate, setSearchDate] = useState('');

    // Handle search input changes
    const handleSearchFromChange = (e) => {
        setSearchFrom(e.target.value);
    };

    const handleSearchToChange = (e) => {
        setSearchTo(e.target.value);
    };

    const handleSearchDateChange = (e) => {
        console.log(searchDate)
        setSearchDate(e.target.value);
    };

    // Get the current date in "YYYY-MM-DD" format
    const currentDate = new Date().toISOString().split('T')[0];

    // Filter data based on search inputs
    const filteredData = data.filter((ticket) => {
        return (
            ticket.from.toLowerCase().includes(searchFrom.toLowerCase()) &&
            ticket.to.toLowerCase().includes(searchTo.toLowerCase()) &&
            ticket.date.includes(searchDate)
        );
    });

    return (
        <div style={{ padding:"24px" }}>
    <Row>
        <Col className="text-center">
            <h4 style={{ fontSize: "4vw" }}><b>Available Flights</b></h4>
        </Col>
    </Row>

    {/* Search form */}
    <Row>
        <Col sm={{ offset: 2, order: 1, size: 10 }}>
            <Form>
                <FormGroup row>
                    <Label for="from" sm={1}>From:</Label>
                    <Col sm={2}>
                        <Input type="select" name="from" id="from" value={searchFrom} onChange={handleSearchFromChange}>
                            <option value="">Select From</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="China">China</option>
                            <option value="Australia">Australia</option>
                        </Input>
                    </Col>
                    <Label for="to" sm={1}>To:</Label>
                    <Col sm={2}>
                        <Input type="select" name="to" id="to" value={searchTo} onChange={handleSearchToChange}>
                            <option value="">Select To</option>
                            <option value="London">London</option>
                            <option value="Paris">Paris</option>
                            <option value="Dubai">Dubai</option>
                            <option value="New York">New York</option>
                        </Input>
                    </Col>
                    <Label for="date" sm={1}>Date:</Label>
                    <Col sm={2}>
                        <Input type="date" name="date" id="date" value={searchDate} onChange={handleSearchDateChange} min={currentDate} />
                    </Col>
                </FormGroup>
            </Form>
        </Col>
    </Row>

    {/* Map over the filtered data array to render multiple cards */}
    {filteredData.map((ticket, index) => (
        <Row key={index} style={{ padding: "20px 0" }}>
            <Col sm={{ offset: 1, order: 1, size: 10 }}>
                <Card body>
                    <CardTitle tag="h5">{ticket.from} -&gt; {ticket.to}</CardTitle>
                    <Row style={{ margin: "5px" }}>
                        <Col xs="4">
                            <CardText><b>Date:</b> {ticket.date}</CardText>
                        </Col>
                        <Col xs="4">
                            <CardText><b>Time:</b> {ticket.time}</CardText>
                        </Col>
                        <Col xs="4">
                            <CardText><b>Available Seats:</b> {ticket.tickets}</CardText>
                        </Col>
                        <Col xs="4">
                            <CardText><b>ID:</b> {ticket.flight_id}</CardText>
                        </Col>
                    </Row>
                    <Button color="primary" style={{ margin: "5px" }}>Book Now</Button>
                </Card>
            </Col>
        </Row>
    ))}
</div>

    );
}

export default Available;
