import React from 'react';
import Styled from 'styled-components';
import {Jumbotron,Container,Row,Col,Button} from 'react-bootstrap';

import Person from '../assets/main.jpg';

const Contain= Styled(Container)`
margin:0;
padding:0;
`

const Jumbo = Styled(Jumbotron)`
text-align:center;
background:none;
`

const Image = Styled.img`
height:400px;
position:relative;
padding:0px 0px 48px ;
justify-content:center;

@media (max-width :375px){
    height:300px;
}

`
const H1 = Styled.h1`
text-align:center;
padding-bottom:30px;
color:black;
`
const P = Styled.p`
text-align:center;
color:black;
line-height:2;
`
const Buttons = Styled(Button)`
color:#698474;
border-color:#698474;
background-color:white;
&:hover{
    background-color:#698474;
    color:#e5e4cc;
}
`
const Divimage =Styled.div`
text-align:center;
float:center;
`

const Welcome = () => (

    <Contain fluid>
        <Jumbo>
            <Row>
                <Col >
                    <Divimage>
                        <Image src={Person}  />
                    </Divimage>
                </Col>
                <Col md='large' >
                        <H1>Behind The Mic</H1>
                        <P> 
                        We all know life  can be hectic and confusing at times...you will mess up and probably wonder if it will all be okay.<br/>
                        There‘s Grace For That Is a weekly podcast  hosted by Rylie Lauren designed to download grace and truth from Scripture in a relevant way. 
                        </P>
                        <div>
                            <Buttons variant="secondary">Listen Now</Buttons>
                        </div>
                </Col>
            </Row>
        </Jumbo>
    </Contain>

);

export default Welcome;