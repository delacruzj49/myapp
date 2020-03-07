import React from 'react';
import Styled from 'styled-components';
import {Jumbotron,Container,Row,Col,Form,Button} from 'react-bootstrap';

const Contain = Styled(Container)`
width:90%;
`
const Jumbo = Styled(Jumbotron)`
width:90%;
float:center;
margin:0 auto;
height:300px;
padding-top:30px;
background:none;
`

const Div = Styled.div`
text-align:center;
`
const Buttons = Styled(Button)`
color:#698474;
border-color:#698474;
background-color:white;
text-align:center;
width:100px;
&:hover{
    background-color:#698474;
    color:#e5e4cc;
}
`
const FormControl = Styled(Form.Control)`
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
border: none;
border-bottom: 2px solid black;
width: 100%;
background:none;
`

const Subscribe = () => (

    <Contain fluid>
        <Jumbo fluid>
            <Div>
                <h1> SUBSCRIBE</h1>
                <p> Subscribe to get the latest update on the next podcast!</p>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={3}></Form.Label>
                        <Col sm={6}>
                            <FormControl type="email" placeholder="Email : example@email.com" />
                        </Col>
                    </Form.Group>
                    <Buttons variant="secondary">Sign up</Buttons>
                </Form>
            </Div>
        </Jumbo>
    </Contain>

);


export default Subscribe;