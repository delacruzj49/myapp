import React from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';
import {
    Navbar,
    Nav, Button
    } from 'react-bootstrap';

const Brands = Styled(Navbar.Brand)`
font-family: 'Meddon', cursive;
font-size:15px;
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
const Links = Styled(Link)`
display: block;
color: black;
text-align: center;
padding: 0px 10px;
text-decoration: none;

&:hover{
    text-decoration:none;
    color:#698474;
}
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
                    <Links to ='/'>Home</Links>
                    <Links to ='/about'>About</Links>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </footer>

    );

    export default Navigation;