import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./header.scss";
import logo from '../../assets/test-logo.png'
import { Link } from "react-router-dom";

const Header = () => {
  // const [active, setActive] = useState("")
  return (
    <div className="mainHeader">
      <Container >
        <Row>
          <Col
            lg="2"
            md="3"
            sm="6"
            xs="6"
          >
            <div className="logoBox">
              <img src={logo} alt="" />
            </div>
          </Col>
          <Col
          >
            <div className="navbarSection">
              <ul className="{active}">
                <li><Link to="">+ Стать клиентом</Link></li>
                <li><Link to="">Услуги</Link></li>
                <li><Link to="">Кейсы</Link></li>
                <li><Link to="">О компании</Link></li>
                <li><Link to="">О Контакты</Link></li>
              </ul>
            </div>
          </Col>
          <Col
            lg="2"
            md="3"
            sm="6"
            xs="6"
          >
            <div className="phoneNumBox">
              <Button variant="outline-light">
                Связаться
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
