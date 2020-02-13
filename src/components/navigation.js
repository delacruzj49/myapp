import React from 'react';
import Styled from 'styled-components';
import {
    Navbar,
    Nav, Button
    } from 'react-bootstrap';

const Brands = Styled(Navbar.Brand)`
font-family: 'Meddon', cursive;
`

const Buttons = Styled(Button)`
color:#698474;
height:35px;
border-color:#698474;
background-color:white;
text-align:center;
width:100px;
&:hover{
    background-color:#698474;
    color:#e5e4cc;
}
`
const Navbaralt = Styled(Navbar)`
height:40px; 
background:#e5e4cc;
`


    const Navigation = () => (
        <footer>
            <Navbaralt>
                <Navbar.Brand href="#home">Listen Now!</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Buttons variant="secondary">PODCAST</Buttons>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbaralt>
        <Navbar bg="light" expand="lg">
                <Brands href="#home">There's grace for that</Brands>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </footer>

    );

    export default Navigation;