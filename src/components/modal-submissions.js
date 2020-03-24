import React, {useState} from 'react';
import{Modal,Button} from 'react-bootstrap';
import Styled from 'styled-components';

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

function ModalShow(props) {
    const [show, setShow] = useState(false);
    const value = props.component;

    if(value === 'subscribe'){
      return( 
      <>
        <Buttons type="submit" variant="primary" onClick={() => setShow(true)}>
          Submit
        </Buttons>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title >
              Subscribed!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
             You are signed up to receive the latest updates!
            </p>
          </Modal.Body>
        </Modal>
      </>);
    }
    else{
      return (
        <>
          <Buttons type="submit" variant="primary" onClick={() => setShow(true)}>
            Submit
          </Buttons>
    
          <Modal
            show={show}
            onHide={() => setShow(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title >
                Submitted!
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
               Thanks for your input! We will try to get back to you as soon as possible.
              </p>
            </Modal.Body>
          </Modal>
        </>
      );
    }

  }
export default ModalShow;