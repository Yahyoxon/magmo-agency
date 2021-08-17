import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./banner.scss";
import boy from '../../assets/boy.png'


const Banner = () => {
  return (
    <>
      <div className="mainSection">
        <Container>
          <Row>
            <Col lg="6" sm="12">
              <div className="mainOfSection">
                <div className="title"><h1>Cоздание веб сайта</h1></div>
                <div className="description">Мы - независимая студия разработки сайтов, сложных интерфейсов и мобильных приложений для развития вашего бизнеса</div>
                <button className="button">Обсудим проект?</button>
              </div>
            </Col>
            <Col lg="6" sm="12">
              <div className="img">
                <img src={boy} alt="" />
              </div>

            </Col>
          </Row>
        </Container>

      </div>
    </>
  );
};

export default Banner;
