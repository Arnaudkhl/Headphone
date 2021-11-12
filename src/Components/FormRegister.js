import React from 'react'
import { Form,Container,Button} from 'react-bootstrap';




const FormRegister = () => {
return (




<Container style={{marginTop:"50px"}}>
        <Form className="validate-form" method="POST" action="login.php" style={{width:"55%", margin:"auto"}}>
    <Form.Group className="mb-3"  controlId="formGroupEmail">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" name="name" placeholder=" nom" />
  </Form.Group>       
    <Form.Group className="mb-3"  controlId="formGroupEmail">
        <Form.Label>Prenom</Form.Label>
        <Form.Control type="text" name="name" placeholder=" prenom" />
  </Form.Group>      
    <Form.Group className="mb-3"  controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
  </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" name="pass"placeholder="Mot de passe" />
  </Form.Group>
  <Button variant="success" type="submit">
                        send
                </Button>


</Form>
</Container>
)
}


export default FormRegister
