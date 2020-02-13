import React from 'react';
import Styled from 'styled-components';
import {Container,Jumbotron} from 'react-bootstrap';


const Divide = Styled.div`
text-align:center;
`

const Jumbo = Styled(Jumbotron)`
color:black;
background:none;
`
const Contain = Styled(Container)`
background:none;
`
const Copy = Styled.p`
text-align:center;
background:#e5e4cc;
`



const Footer = () =>(
 
   <footer>
      <Contain fixed="bottom" fluid>
          <Jumbo fluid>
            <Divide>
              <h4>There's Grace For That</h4>
              <p>Houston, Texas, United State<br/>
                    Rylie Lauren<br/>
                Theresgraceforthatpod@gmail.com</p>
            </Divide>
          </Jumbo>
      </Contain>
      <div>
        <Copy>&copy; 2020 Websites4Miras </Copy>
      </div>

   </footer>
);







export default Footer;