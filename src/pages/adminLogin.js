import React from 'react';
import {Form,Jumbotron,Container,Col,Row,Button} from 'react-bootstrap';
import Styled from 'styled-components';

const Containers =Styled(Container)`
background:#e5e4cc;
`
const Contain = Styled(Container)`

text-align:center;
padding-top:200px;
width:70%;
height:900px;
`
const Jumbo = Styled(Jumbotron)`
background:#bac7a7;

`
const Sect = Styled.div`

padding:15px 10px 15px ;
`

const ButtonSubmit = Styled(Button)`
background:#698474;
border-color:#698474;
color:white;

&:hover{
    background:#698474;
    color:white;
}
`

const AdminLogin = () => (
    <Containers fluid>
    <Contain>
        <Jumbo>
            <Sect>
                <Form>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="Email" placeholder="Email" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <ButtonSubmit variant="light" type="submit">
                        Submit
                    </ButtonSubmit>
                </Form>
            </Sect>
        </Jumbo>
    </Contain>
    </Containers>

);
  
export default AdminLogin;