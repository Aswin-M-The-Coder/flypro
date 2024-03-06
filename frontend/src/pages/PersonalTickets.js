import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap';

function PersonalTickets() {
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


    return (
        <div style={{padding:"24px"}}>
            <Row>
                <Col className="text-center">
                    <h4 style={{ fontSize: "4vw" }}><b>Your Tickets</b></h4>
                </Col>
            </Row>

            

            {/* Map over the filtered data array to render multiple cards */}
            {data.map((ticket, index) => (
                <Row key={index} style={{ padding: "20px", zIndex: "-1" }}>
                    <Col sm={{ offset: 1, order: 1, size: 10 }}>
                        <Card body>
                            <CardTitle tag="h5">{ticket.from} -&gt; {ticket.to}</CardTitle>
                            <Row>
                                <Col xs="4">
                                    <CardText><b>Date:</b> {ticket.date}</CardText>
                                </Col>
                                <Col xs="4">
                                    <CardText><b>Time:</b> {ticket.time}</CardText>
                                </Col>
                                <Row>
                                <Col xs="4">
                                <CardText><b>Available Seats:</b> {ticket.tickets}</CardText>   
                                </Col>
                                <Col xs="4">
                                    <CardText><b> ID:</b> {ticket.flight_id}</CardText>
                                </Col>
                                    
                                </Row>
                            </Row>
                            <Button color="primary" style={{ margin: "5px" }}>Download Ticket</Button>
                        </Card>
                    </Col>
                </Row>
            ))}
        </div>
    );
}

export default PersonalTickets;
