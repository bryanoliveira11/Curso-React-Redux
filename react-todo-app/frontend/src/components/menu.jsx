import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

export default function Menu() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <FontAwesomeIcon icon={faCalendarDay} color="white" className="m-2" />
        <Navbar.Brand href="#home">TodoApp</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#todos">Todos</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
