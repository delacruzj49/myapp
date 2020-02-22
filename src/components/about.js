import React , {Component} from 'react';
import Styled from 'styled-components';
import {Container,Jumbotron,Row,Col} from 'react-bootstrap';
import Mic from '../assets/landing.jpg';



const Jumbo = Styled(Jumbotron)`
text-align:center;
background:url(${Mic});
height:300px;
background-size:cover;
`

const Title = Styled.h1`
font-size:25px;
`
const Body = Styled.p`
font-size:15px;
`


class AboutSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded:false,
        }
    }

    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res =>res.json())
        .then(json =>{
            this.setState({
                isLoaded:true,
                items: json,
            })
        });

    }

    render(){

        var{isLoaded,items} = this.state;

        if(!isLoaded){
            return<div>Loading..</div>;
        }
        else{

            return(
                <Container >
                    <Jumbo>
                    </Jumbo>
                         {items.map(items =>(
                            <Jumbotron>
                                <Row>
                                    <Col>

                                    </Col>
                                    <Col key={items.id}>
                                        <Title>{items.title}</Title>
                                        <Body>{items.body}</Body>
                                    </Col>

                                </Row>
                            </Jumbotron>
                        ))};
                </Container>
   
        );
            }
    }
}
    

    

export default AboutSection;


