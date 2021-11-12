import React from 'react'
import casque from '../images/power2.jpg'
import styled from 'styled-components';
import icon1 from '../images/icon1.svg'
import icon2 from '../images/icon2.svg'
import icon3 from '../images/icon3.svg'
import icon4 from '../images/icon4.svg'
import power3 from '../images/power3.jpg'

const Container = styled.div`

img{
    width:60%;
    margin-bottom:55px
    
},
.title{
    font-weight: 900;
    font-size:50px; 
    text-align:center;
    margin-top:50px;
    margin-bottom:55px
}
p{
    font-size:30px;  
}


` 
const Section = styled.div `
.info{ display:flex;

}
img{
    width:15%;
    margin:15px
}

`

const Produits = () => {
    return (
         <Container>
       
          <div className="title"> BEATS STUDI0 3 SANS FIL </div> 
          <img src={casque} alt="beats Headphones" />
         
         <Section className="info">
         <div class="container" >
         <div class=" row justify-content-center">
         <div class="col-6 col-sm-8">
         <p> Le casque circumauriculaire Beats Studio3 sans fil vous offre un son d'exception tout en bloquant les bruits extérieurs à l'aide de sa technologie de Réduction active du bruit </p>
         </div>
         </div>

  <div class=" row justify-content-end" >
    <div class="col-6 col-sm-5">
        <div className="info1">
        <img src={icon4} alt="icon" />
        <h4>Son d'exception </h4>
        <p style={{fontSize:"50%"}}>Le Beats Studio³ sans fil effectue une analyse audio en temps réel pour préserver la clarté, l'émotion et la palette sonore. Ainsi, vous profitez d'une expérience d'écoute exceptionnelle. </p>
        </div>
    </div>
    <div class="col-6 col-sm-5">
    <div className="info1">
        <img src={icon2} alt="icon" />
        <h4>Son d'exception </h4>
        <p style={{fontSize:"50%"}}>Le Beats Studio³ sans fil effectue une analyse audio en temps réel pour préserver la clarté, l'émotion et la palette sonore. Ainsi, vous profitez d'une expérience d'écoute exceptionnelle. </p>
        </div>
    </div>

   
    <div class="w-100 d-none d-md-block"></div>

    <div class="col-6 col-sm-5">
    <div className="info1">
        <img src={icon3} alt="icon" />
        <h4>Son d'exception </h4>
        <p style={{fontSize:"50%"}}>Le Beats Studio³ sans fil effectue une analyse audio en temps réel pour préserver la clarté, l'émotion et la palette sonore. Ainsi, vous profitez d'une expérience d'écoute exceptionnelle. </p>
        </div>
    </div>
    <div class="col-6 col-sm-5">
    <div className="info1">
        <img src={icon1} alt="icon" />
        <h4>Son d'exception </h4>
        <p style={{fontSize:"50%"}}>Le Beats Studio³ sans fil effectue une analyse audio en temps réel pour préserver la clarté, l'émotion et la palette sonore. Ainsi, vous profitez d'une expérience d'écoute exceptionnelle. </p>
        </div>
    </div>
  </div>
</div>


         </Section>
    <img src={power3} alt="icon" />
         
          </Container>





    )
}

export default Produits
