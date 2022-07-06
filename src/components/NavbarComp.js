import React from "react";

// Import from bootstrap
import { Navbar, Container, Nav, Button } from "react-bootstrap";

const NavbarComp = () => {
  return (
    <>
      <Navbar variant="dark" expand="lg" className="navbar" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img alt="valorant-logo" src="../assets/img/logo.webp" width="30" height="30" className="d-inline-block align-top me-2" />
            <strong>Valorant Agent</strong>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Agents</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Button className="nav-button ms-2" size="sm">
                <strong>Get it Now!</strong>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
