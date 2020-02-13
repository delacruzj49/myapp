import React from 'react';
import {Jumbotron,Container,} from 'react-bootstrap';
import Styled from 'styled-components';
import PictureHead from '../assets/header.JPG';


const Contain = Styled(Container)`
margin:0;
padding:0;
`
const Jumbo =Styled(Jumbotron)`
background:url(${PictureHead});
background-size:cover;
background-position:center;
height:800px; 
`
const Landing = () => (

<Contain fluid>
    <Jumbo fluid></Jumbo>
</Contain>

);

export default Landing;