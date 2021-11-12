import React from 'react';
import styled from 'styled-components';
import beats from '../images/beats1.png'
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';




const Section = styled.section`
height: 80vh;
    display: flex;
    justify-content: center;
    align-items:center ;
    h3{
        text-transform: uppercase;
        position: absolute;
        left: 0;
        top:0;
        color:#2b343e;
        font-size: 10rem;
        margin: 150px; 
        
    }
    background-color:white;
`;
const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
height: 90vh;



`

const ColumnLeft = styled.div`
display: flex;
  color:black;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  h1{
      margin-bottom:0.5rem;
      font-size:3rem;z-index: 0;
  }
  p{
      margin:1.5rem 0;
      color:black
  }
`;

const Image = styled(motion.img)`
position:absolute;
width:40%;
height:18%;
margin-top:30px



`

const ColumnRight = styled.div`

`;

const Button = styled(motion.button)`
padding: 1rem 3rem;
font-size:1.3rem;
border:2px solid #fff;
border-radius: 25px;
outline: none;
cursor: pointer;
background: orange;
color:black;
`;





const Hero = () => {
    return (
        
     <Section >
        
         
        <Container  style={{backgroundColor:"rgba(245, 230, 201, 0.438)",width:"70%", marginTop:"120px"}} >
            
           <ColumnLeft>
                <motion.h1
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:2.5}}
                > Écouter de la musique, c'est vivre sa passion </motion.h1>
                <motion.p
                      animate={{x:0,opacity:1}}
                      initial={{opacity:0,x:-150 }}
                      transition={{duration:0.5}} 
                >Le casque sans fil Studio3 de Beats offre un son de première qualité grâce à la fonctionnalité Pure ANC qui préserve la clarté, l'émotion et la palette sonore.</motion.p>

                <Link to="/fiche">
                <Button
                 
                
                whileHover={{scale:1.2}}
                whileTap={{
                    scale:0.75,
                    backgroundColor:'orange',
                    border:'none',
                    color:'white',
                }}
                initial={{ opacity:0,y:150}}
                animate={{ opacity:1 ,y:0}}
                transition={{duration:1 }}
                
                
                >en savoir plus</Button></Link>
              

           </ColumnLeft>
           
           <ColumnRight>
               <Image src={beats} alt="casque"
                    animate={{x:-130,opacity:1}}
                    initial={{opacity:0.1 ,x:70}}
                    transition={{duration:1.3}}
               
               />
           </ColumnRight>

          
    
        </Container>
       
     </Section>


     
    );
};

export default Hero;
