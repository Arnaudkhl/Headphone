import React from 'react'
import { Form,Button, Container} from 'react-bootstrap';




const FormContact = () => {
    return (
             <Container style={{marginTop:"50px"}}> 

            <Form style={{width:"75%", margin:"auto"}}>
                
                 
                 
            <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Votre nom</Form.Label>
                        <Form.Control type="text" placeholder="Nom" />
                         </Form.Group>
                             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                             <Form.Label> Email </Form.Label>
                    <Form.Control type="email" placeholder="Email@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={6}placeholder="Votre message"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                 </Form.Group>
                     <Button variant="success" type="submit">
                             Submit
                    </Button>
                   
            </Form>
            </Container>
    )
}

export default FormContact
