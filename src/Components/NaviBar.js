import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: black;
    &:hover {
      text-decoration: underline;
    }
  }
  .ml-auto {
    margin-left: auto;
  }

  .phone-number {
    color: black;
    font-size: 1.2em;
    display: flex;
    align-items: center;
  }
`;

const NaviBar = () => {
  return (
    <div>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Grand Master
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/order">
                  Товары
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  Доставка
                </Nav.Link>
              </Nav>
              <Nav className="ml-auto">
                <div className="phone-number">
                  <span>+77713720288</span>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </div>
  );
};

export default NaviBar;
