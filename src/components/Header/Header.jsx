import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./header.scss";
import logo from '../../assets/magmo-agency logo.png'
const Header = () => {
  return (
    <div className="mainHeader">
      <Navbar bg="transparent" variant="dark">
        <Container>
          <Navbar.Brand >
            <img
              src={logo}
              width="155px"
              height="100px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
