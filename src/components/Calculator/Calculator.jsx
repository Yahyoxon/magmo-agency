import React from 'react'
import { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './calculator.scss'


const Calculator = () => {
    const [orderType, setOrderType] = useState('')
    let total = 0;

    function useCheckInputs(isBool, defaultChecked, price) {
        const [isChecked, setIsChecked] = useState(isBool || defaultChecked);
        if (isChecked === true) {
            total += price
        }
        return {
            onChange: (e) => setIsChecked(e.target.checked),
            checked: isChecked,
        };

    }
    console.log(orderType === 'landing')

    const input1 = useCheckInputs(false, orderType === 'landing' ? true : false, 250);
    const input2 = useCheckInputs(false, orderType === 'landing' ? true : false, 400);
    const input3 = useCheckInputs(false, false, 500);
    
    console.log(useCheckInputs(false, orderType === 'landing' ? true : false, 250));

    return (
        <>
            <Container>
                <br />
                <Row>
                    <Col lg="3" md="4" sm="6" xs="6">
                        <Button onClick={() => setOrderType("landing")}>Landing Page</Button>
                    </Col>
                    <Col lg="3" md="4" sm="6" xs="6">
                        <Button onClick={() => setOrderType('vizitka')}>Vizitka sayt</Button>
                    </Col>
                    <Col lg="3" md="4" sm="6" xs="6">
                        <Button>Korporativ sayt</Button>
                    </Col><Col lg="3" md="4" sm="6" xs="6">
                        <Button>Online Magazin</Button>
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <div className="form-checkbox">
                            <label className="switch" >
                                <input type="checkbox" {...input1} />;
                                <div className="slider"></div>
                            </label>
                            <div className="checkbox-title">
                                <h2>Ro'yxatdan o'tish / Profil</h2>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <div className="form-checkbox">
                            <label className="switch" >
                                <input type="checkbox" {...input2} />;
                                <div className="slider"></div>
                            </label>
                            <div className="checkbox-title">
                                <h2>Ro'yxatdan o'tish / Profil</h2>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <div className="form-checkbox">
                            <label className="switch" >
                                <input type="checkbox" {...input3} />;
                                <div className="slider"></div>
                            </label>
                            <div className="checkbox-title">
                                <h2>Ro'yxatdan o'tish / Profil</h2>
                            </div>
                        </div>
                    </Col>
                </Row>

                <h2>{total}</h2>
            </Container>

        </>
    );
};

export default Calculator
