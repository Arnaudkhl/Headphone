import React from 'react'
import styled from 'styled-components';
import casque from '../images/newbeats.png';
import mogo from '../images/mogo.jpeg'
import image3 from '../images/power.jpg'
const Section = styled.section`
margin-top:50px
`
const Container=styled.div`
padding:3rem calc((100vw - 1300px) /2) ;
h1{
    font-size:3.6rem; 
    color:black
}

h2{
    text-transform: uppercase;
    margin-top:15px;
    color:black
}
p{
    font-size:1.6rem;
    color:black
}
img{
    width:90%;
    
    
}
.img0{
    display: flex;
}
`



const Secondhome = () => {
    return (
        <Container style={{backgroundColor:"white"}}> 
        <Section className="presentation second">
        <div className="product-presentation">
            <p class="new">Nouveau produit disponible</p>
            <h1>Le nouveau casque Powerbeats Pro </h1>
            <p>
            Les Powerbeats Pro totalement sans fil sont conçus pour vous faire bouger

            </p>
            
        </div>
        <Section className="img0">
           <div className="img1" >
               <img src={casque}className= ""alt="casque" style={{width:"90%"}} />
               <h2>POWERBEATS PRO : restez connecté toute la journée.</h2>
               <a href="#">EN SAVOIR PLUS </a>
            </div>
           
            <div className="img2"style={{marginTop:"25%"}}>
           <img src={mogo}className= ""alt="casque"style={{width:"100%"}} /> 
           <h2>POWERBEATS PRO :controlez votre son en toute liberté</h2>
           <a href="#">EN SAVOIR PLUS </a>
            </div>

           
        </Section>
        <div className="img3">
            <img src={image3} alt="casque" style={{width:"100%", marginTop:"100px"}}/>
            </div>
    </Section></Container>
    )
}

export default Secondhome
