import React from 'react'
import { RiShoppingBasketLine, FaUserAlt} from 'react-icons/all';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { Nav,Navbar, Row,} from 'react-bootstrap';


const NavbarLink = styled(Link)`
color:black;
font-size: 22px;
margin-left:15px;
padding: 10px;
box-sizing: border-box;
cursor: pointer;
text-decoration:none;
text-transform: uppercase;

`
const NavItems=styled.nav`
display: flex;
align-items: center;
padding: 0;

`


const Header = () => {
    return (
       
  <container>
   <Navbar collapseOnSelect expand="lg" variant="dark">
  <div className="logo">SOUND(+logo) </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
     
          <NavItems>
               <NavbarLink to='/'>Accueil</NavbarLink>
               <NavbarLink to='/Catalogue'>Shop</NavbarLink>
               <NavbarLink to='/Contact'>Contact</NavbarLink>
           </NavItems>
     
    </Nav>
    <Nav>
    <div className="navright"> 
           
           <NavbarLink to='/connexion'><FaUserAlt/> Connexion</NavbarLink>
           <NavbarLink to='/panier'> <RiShoppingBasketLine/></NavbarLink>
           </div>
    </Nav>
  </Navbar.Collapse>
 </Navbar>
  <Row style={{margin:"0"}} >
     <section className="offre" style={{backgroundColor:"rgba(26, 24, 24, 0.815"}}>
  <p style={{color:"white"}}>choisissez la livraison par coursier en deux heure ou la livraison gratuite</p>
</section>
  </Row>
   
   
  </container>
  
    )
}

export default Header
