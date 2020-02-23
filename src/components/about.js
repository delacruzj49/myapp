import React , {Component} from 'react';
import Styled from 'styled-components';
import {Container,Jumbotron,Row,Col,Button} from 'react-bootstrap';
import Mic from '../assets/landing.jpg';
import Mics from '../assets/church.jpg';

const ContainerMain= Styled(Container)`
background:#e5e4cc;
padding: 10px 30px 10px 30px;

`
const Jumbo = Styled(Jumbotron)`
text-align:center;
background:url(${Mic});
height:300px;
background-size:cover;
`
const Jumbotrons = Styled(Jumbotron)`
background:#bac7a7;
margin:0;
padding:10px;
border-bottom-style: solid;
border-bottom-color:#698474;
`

const Title = Styled.h1`
font-size:25px;
color:#698474;
`
const Body = Styled.p`
font-size:15px;
color:white;
`
const JumbotronBackground = Styled(Jumbotron)`
background:url(${Mics});
background-size:cover;
height:250px;
`
const TitleHeader = Styled.h1`
font-size: 85px;
color:#698474;
padding-top:60px;

@media (max-width :375px){
    margin-left:110px;
}

`
const Buttons = Styled(Button)`
color:#698474;
border-color:#698474;
background-color:white;
float:right;
&:hover{
    background-color:#698474;
    color:#e5e4cc;
}
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
                <ContainerMain>
                    <Jumbo>
                        <TitleHeader>Blog</TitleHeader>
                    </Jumbo>
                         {items.map(items =>(
                            <Jumbotrons>
                                <Row>
                                    <Col>
                                        <JumbotronBackground>
                                            
                                        </JumbotronBackground>
                                    </Col>
                                    <Col md='7' key={items.id}>
                                        <Title>{items.title}</Title>
                                        <Body>{items.body}</Body>
                                        <div>
                                            <Buttons variant="secondary">Full Post</Buttons>
                                         </div>
                                    </Col>

                                </Row>
                            </Jumbotrons>
                        ))}
                </ContainerMain>
   
        );
            }
    }
}
    

    

export default AboutSection;


