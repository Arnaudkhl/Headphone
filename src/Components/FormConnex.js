import React from 'react'
import { Form,Container,Button} from 'react-bootstrap';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import "../Php/Login.php"


const NavbarLink = styled(Link)`
color:#fff;
font-size: 22px;
margin-left:15px;
padding: 10px;
box-sizing: border-box;
cursor: pointer;
text-decoration:none;


`


const FormConnex = () => {
    return (
        <Container style={{marginTop:"50px"}}>
            <Form className="validate-form" method="POST" action="login.php" style={{width:"55%", margin:"auto"}}>
  <Form.Group className="mb-3"  controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Mot de passe</Form.Label>
    <Form.Control type="password" name="pass"placeholder="Mot de passe" />
  </Form.Group>
  <Button variant="success" type="submit" style={{width:"55%", margin:"auto",marginBottom:"20px"}}>
                            Connexion
                    </Button>
  <NavbarLink to='/Register'> 
     <Button 
      variant="success" type="submit" name="submit"style={{width:"70%", margin:"auto"}} >
    
                            Créer un compte
     </Button></NavbarLink>
</Form>
        </Container>
    )
}

export default FormConnex

                
               