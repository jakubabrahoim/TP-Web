import React from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class NavigationBar extends React.Component {

    render() {
        console.log("NAVBAR");

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="/">Tímový projekt</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/#about">O projekte</Nav.Link>
                        <Nav.Link href="/#team">Členovia tímu</Nav.Link>
                        <Nav.Link href="/log">Zápisnice</Nav.Link>
                        <Nav.Link href="https://github.com/xkohutka/documentation/wiki">Dokumentácia</Nav.Link>
                        {/*<NavDropdown title="Dokumentácia" id="collasible-nav-dropdown">
                           <NavDropdown.Item href="/documentation/">Prehľad</NavDropdown.Item>
                            <NavDropdown.Item href="/documentation/#methodology">Metodika</NavDropdown.Item>
                            <NavDropdown.Item href="/documentation/#doc">Dokumentácia</NavDropdown.Item> 
                        </NavDropdown>*/}
                        
                    </Nav>
                    <Nav>
                        <Nav.Link href="/api-docs/" target="_blank">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-terminal-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-6.354-.354L4.793 6.5 3.146 4.854a.5.5 0 1 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708z" />
                            </svg>
                            <span> API dokumentácia</span>
                        </Nav.Link>
                        <Nav.Link href="http://github.com/ASICDE/" target="_blank">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-code-slash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z" />
                            </svg>
                            <span> Github</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;