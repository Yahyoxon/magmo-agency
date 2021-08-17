import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './whatwedo.scss'

const Whatwedo = () => {
    return (
        <div className="What-we-do-Section">
            <Container>
                <Row>
                    <Col lg="6" md="6" sm="12" xs="12" className="section1">
                        <div className="textWhatwedo">
                            <div className="what-title">
                                <h2>Что мы делаем?</h2>
                            </div>
                            <div className="description">
                                Нетривиальные персонализированные интерфейсы, мобильные и веб-приложения с продуманным взаимодействием.
                                <br/>
                                Беремся даже за самые сложные задачи и выполняем их за короткий срок.</div>
                        </div>
                        <div className="buttons">
                        <button className="battin button1">Подробнее о компании</button>
                        <button className="battin button2">Заполнить бриф</button>
                        </div>

                    </Col >
                
                    <Col lg="6" md="6" sm="12" xs="12">
                    <div className="section2">
                        <div className="uslugi one">
                            <div className="uslug-title"><h3>Дизайн IU/UX</h3></div>
                            <div className="uslugi-feature">
                                <ul>
                                    <li>Исследования и аналитика</li>
                                    <li>Интерфейсы</li>
                                    <li>Дашборды</li>
                                    <li>Мобильные приложения</li>
                                    <li>Цифровые сервисы</li>
                                </ul>
                            </div>
                        </div>
                        <div className="uslugi two">
                            <div className="uslug-title"><h3>Разработка</h3></div>
                            <div className="uslugi-feature">
                                <ul>
                                    <li>Исследования и аналитика</li>
                                    <li>Интерфейсы</li>
                                    <li>Дашборды</li>
                                    <li>Мобильные приложения</li>
                                    <li>Цифровые сервисы</li>
                                </ul>
                            </div>
                        </div>
                        <div className="uslugi three">
                            <div className="uslug-title"><h3>Реклама</h3></div>
                            <div className="uslugi-feature">
                                <ul>
                                    <li>Исследования и аналитика</li>
                                    <li>Интерфейсы</li>
                                    <li>Дашборды</li>
                                    <li>Мобильные приложения</li>
                                    <li>Цифровые сервисы</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Whatwedo
