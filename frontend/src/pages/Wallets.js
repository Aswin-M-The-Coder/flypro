import React, { useState } from 'react'
import { Button, Card, CardText, CardTitle, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'

const Wallet = () => {
    const [modal, setModal] = useState(false);
    const [money, setMoney] = useState(0);
    const [inputMoney, setInputMoney] = useState('');

    const toggle = () => setModal(!modal);

    // Function to handle adding money
    const handleAddMoney = () => {
        const moneyToAdd = parseFloat(inputMoney);
        if (!isNaN(moneyToAdd)) {
            setMoney(money + moneyToAdd);
            setModal(false); // Close the modal after adding money
        }
    };

    return (
        <div style={{padding:"24px"}}>
            <Row>
                <Col sm="5" style={{ margin: "12px" }}>
                    <Card body color='info'>
                        <CardTitle tag="h5">
                            Balance: 
                            <Card body><CardTitle>${money.toFixed(2)}</CardTitle></Card>
                        </CardTitle>
                        <CardText>
                            <Button color="secondary" onClick={toggle}>
                                Add
                            </Button>
                            <Modal isOpen={modal} toggle={toggle}>
                                <ModalHeader toggle={toggle}>Add Money</ModalHeader>
                                <ModalBody>
                                    <Input
                                        type='number'
                                        placeholder='123'
                                        value={inputMoney}
                                        onChange={(e) => setInputMoney(e.target.value)}
                                    />
                                    <p>{ <Row className="d-flex justify-content-center mb-3" style={{ color: "red" }}>It is not a real money</Row>}</p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={handleAddMoney}>
                                        Add money
                                    </Button>
                                </ModalFooter>
                            </Modal>
                        </CardText>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Wallet
