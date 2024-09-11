import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap"; 
import './styles.css';

export default function Header() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className="logo" src="https://cdn6.aptoide.com/imgs/6/c/4/6c4f10d4468cd2b3af76b38b4e7ad3f4_icon.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Collapse id="navbar-nav">
          <Navbar.Text as={Link} to="/" className="navbartext">
            Inicial
          </Navbar.Text>
          <Navbar.Text as={Link} to="/about" className="navbartext">
            Sobre
          </Navbar.Text>
          <Navbar.Text as={Link} to="/jokes" className="navbartext">
            Piadas
          </Navbar.Text>
          <Navbar.Text as={Link} to="/liberty" className="navbartext">
            Liberdade
          </Navbar.Text>
          <Navbar.Text as={Link} to="/comedians" className="navbartext">
            Humoristas famosos
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
