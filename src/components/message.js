import React from 'react';
import Styled from 'styled-components';
import {Form ,Container,Jumbotron,Row,Col} from 'react-bootstrap';
import ModalShow from './modal-submissions.js';

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


class Message extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            comment: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]:value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        //Add fetch to post to DB using api
        fetch('http://localhost:4000/questions',{
            method:'POST',
            body:JSON.stringify({
                name:this.state.name,
                email:this.state.email,
                comment:this.state.comment
            }),
            headers:{
                "Content-type":"application/json; charset=utf-8"
            }
        })
    }
    render(){
        return(
            <Contain fluid>
                <Jumbo fluid>
                    <Div>
                        <h1> LOVE TO HEAR FROM YA!</h1>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group as={Row} controlId="ControlInputName" >
                                <Form.Label column sm={3}></Form.Label>
                                <Col sm={6}>
                                    <FormControl  name ="name" value={this.state.name} onChange={this.handleChange} placeholder="First name" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}  controlId="ControlInputEmail">
                                <Form.Label column sm={3}></Form.Label>
                                <Col sm={6}>
                                    <FormControl  name ="email" value={this.state.email}  onChange={this.handleChange} placeholder="name@example.com"  />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="ControlTextareaMessage">
                                <Form.Label column sm={3}></Form.Label>
                                <Col sm={6}>
                                    <FormControl  name ="comment" value={this.state.comment} onChange={this.handleChange}  as="textarea" rows="3" placeholder="Thought, Questions, Ideas Comments Here" />
                                </Col>
                            </Form.Group>
                            <ModalShow component="other"/>  
                        </Form>
                        
                    </Div>
                </Jumbo>
            </Contain>
    
        );
    }
}



export default Message;