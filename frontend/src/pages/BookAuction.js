import React, { useState } from 'react';
import { Button, Card, CardText, CardTitle, Col, Form, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';

const BookAuction = () => {
    const ticket = {
        from: "Australia",
        to: "New York",
        date: "2024-04-25",
        time: "10:30",
        tickets: "15",
        flight_id: "m24cru849"
    };

    const [modal, setModal] = useState(false);
    const [bidPrice, setBidPrice] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const toggle = () => setModal(!modal);
    const price = 123;

    const handleBidSubmit = () => {
        const newBidPrice = parseFloat(bidPrice);
        const minPrice = price * 1.01; // Minimum price is 1% higher than current price
        const maxPrice = price * 1.1; // Maximum price is 10% higher than current price

        if (newBidPrice >= minPrice && newBidPrice <= maxPrice) {
            // Bid price meets the conditions, perform bid action
            // For now, just close the modal
            setModal(false);
            setErrorMessage('');
        } else {
            // Bid price does not meet the conditions, show error message in a separate modal
            setErrorMessage('Your bid must be at least 1% higher than the current price and not more than 10% higher.');
        }
    };

    const isMobileDevice = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    return (
        <div style={{ padding: "24px" }}>
            <Row>
                <Col sm="12">
                    <Card body className="mb-3">
                        <CardTitle tag="h5">{ticket.from} -&gt; {ticket.to}</CardTitle>
                        <Row>
                            <Col xs="3">
                                <CardText><b>Date:</b> {ticket.date}</CardText>
                            </Col>
                            <Col xs="3">
                                <CardText><b>Time:</b> {ticket.time}</CardText>
                            </Col>
                            <Col xs="3">
                                <CardText><b>Available Seats:</b>{ticket.tickets}</CardText>
                            </Col>
                            <Col xs="3">
                                <CardText><b>ID:</b> {ticket.flight_id}</CardText>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Card inverse className="text-center">
                <CardText style={{ color: 'black' }}>
                    Join the bidding now! Participate in our auction event until April 24, 2024. Don't miss out on the chance to win the ticket.
                </CardText>
                <CardText style={{ color: 'black' }}>
                    <b>Current Price:</b> {price}
                </CardText>
                <CardText style={{ color: 'black' }}>
                    <b>Auction Person ID:</b> 9193
                </CardText>
                <div className="d-flex justify-content-center mb-3">
                    <Button color="primary" onClick={toggle}>
                        Bid Now
                    </Button>
                </div>
                <Modal isOpen={modal} toggle={toggle} fullscreen={isMobileDevice()}>
                    <ModalHeader >Set Bid Price</ModalHeader>
                    <ModalBody>
                        <Row className="d-flex justify-content-center mb-3">Current Price: {price}</Row>
                        <Row className="d-flex justify-content-center mb-3">Your Id: 20fj94jfjf</Row>
                        <Form>
                            <FormGroup row>
                                <Col sm={{ offset: 3, order: 1, size: 6 }}>
                                    <Input id="bidPrice" name="price" placeholder="Bidding price" type="number" value={bidPrice} onChange={(e) => setBidPrice(e.target.value)} />
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={handleBidSubmit}>Make a Bid</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Close Now</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={!!errorMessage} toggle={() => setErrorMessage('')}>
                    <ModalHeader>Bid Not Made</ModalHeader>
                    <ModalBody>
                        <p>{ <Row className="d-flex justify-content-center mb-3" style={{ color: "red" }}>{errorMessage}</Row>}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => setErrorMessage('')}>Ok</Button>
                    </ModalFooter>
                </Modal>
                <CardText style={{ color: 'black' }}>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
            </Card>
        </div>
    );
};

export default BookAuction;
