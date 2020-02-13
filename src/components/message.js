import React from 'react';
import Styled from 'styled-components';
import {Form ,Container,Jumbotron,Row,Col,Button} from 'react-bootstrap';

const Contain = Styled(Container)`
width:90%;
`
const Jumbo = Styled(Jumbotron)`
width:90%;
float:center;
margin:0 auto;
height:500px;
background:none;
`
const Div = Styled.div`
text-align:center;
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

const Message = () => (
    <Contain fluid>
        <Jumbo fluid>
            <Div>
                <h1> LOVE TO HEAR FROM YA!</h1>
                <Form>
                    <Form.Group as={Row} controlId="exampleForm.ControlInputName" >
                        <Form.Label column sm={3}></Form.Label>
                        <Col sm={6}>
                            <FormControl placeholder="First name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}  controlId="exampleForm.ControlInputEmail">
                        <Form.Label column sm={3}></Form.Label>
                        <Col sm={6}>
                            <FormControl type="email" placeholder="name@example.com" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="exampleForm.ControlTextareaMessage">
                        <Form.Label column sm={3}></Form.Label>
                        <Col sm={6}>
                            <FormControl as="textarea" rows="3"  placeholder="Thought, Questions, Ideas Comments Here"/>
                        </Col>
                    </Form.Group>
                </Form>
                <Buttons variant="secondary">Send</Buttons>
            </Div>
        </Jumbo>
    </Contain>


);

export default Message;