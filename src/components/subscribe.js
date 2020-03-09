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

class Subscribe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    render(){
        return(
            <Contain fluid>
                <Jumbo fluid>
                    <Div>
                        <h1> SUBSCRIBE</h1>
                        <p> Subscribe to get the latest update on the next podcast!</p>
                    
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group as={Row} controlId="formBasicEmail" >
                                <Form.Label column sm={3}></Form.Label>
                                <Col sm={6}>
                                <FormControl type="email" value={this.state.value} onChange={this.handleChange} placeholder="Enter email : name@email.com" />
                                </Col>
                            </Form.Group>
                            <Buttons type="submit" value="submit"  >Sign up</Buttons>
                        </Form>
                    </Div>
                </Jumbo>
            </Contain>
        );
    }
}




export default Subscribe;