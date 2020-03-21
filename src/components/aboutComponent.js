import React , {Component} from 'react';
import Styled from 'styled-components';
import {Container,Jumbotron} from 'react-bootstrap';
import HeadingImage from '../assets/otherwood.jpg';

const ContainerMain= Styled(Container)`
padding: 10px 30px 10px 30px;
`
const TopSection = Styled(Jumbotron)`
background:url(${HeadingImage});
height:350px;
background-size:cover;
box-shadow: 1px 2px 2px 1px black;
`
const Jumbotrons = Styled(Jumbotron)`
background:none;
margin:0;
padding:10px;
box-shadow: 1px 2px 2px 1px black;
text-align:center;
margin-bottom:15px;
`

const Title = Styled.h1`
color:black;
font-size: 45px;
`
const Dates = Styled.h3`
font-size:15px;
`
const Break = Styled.div`
width: 300px;
height: 3px;;
background-color:black;
margin: 0 auto 2rem;
`
const Body = Styled.p`
font-size:15px;
color:black;
text-align: justify;
`
const TitleHeader = Styled.h1`
text-align:center;
font-size: 100px;
color:white;
padding-top:60px;
font-family: 'Meddon', cursive;
@media (max-width :375px){
    margin-left:110px;
}

`

class AboutSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:{},
            isLoaded:false,
        }
    }

   
    componentDidMount(){
        fetch('http://localhost:4000/post')
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
       	
        const timestamp = Date(items.date).toString();
        const time = timestamp.substr(0,16);

        if(!isLoaded){
            return<div>Loading..</div>;
        }
        else{
            return(
                    <ContainerMain >
                        <TopSection>
                            <TitleHeader>Blog</TitleHeader>
                        </TopSection>
                            {items.map(items =>(
                                <Jumbotrons key={items.id}  >
                                            <Title>{items.title}</Title>
                                            <Dates>{time}</Dates>
                                            <Break/>
                                            <Body>{items.description}</Body>
                                            <Body>{items.mainBody}</Body>       
                                </Jumbotrons>
                            ))}
                    </ContainerMain>                                      
   
        );
            }
    }
}
    

    

export default AboutSection;


