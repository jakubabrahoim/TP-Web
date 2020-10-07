import React from 'react';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavigationBar extends React.Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home">Tímový projekt</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#about">O projekte</Nav.Link>
                        <Nav.Link href="#team">Členovia tímu</Nav.Link>
                        <NavDropdown title="Metodiky" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">TODO</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Dokumentácia" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">TODO</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#log">Zápisnica</Nav.Link>
                        <NavDropdown title="Exporty z devops" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">TODO</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#github"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-code-slash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z" />
                        </svg></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;