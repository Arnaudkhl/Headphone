import React from 'react'
import Header from '../Components/Header'
import MainContent from '../Components/MainContent'


const Catalogue = () => {
    return (
        <div className="container1">
           <Header/>
           <div className='titre'><h2>Nos produits</h2> </div>
            <MainContent/>
        </div>
    )
}

export default Catalogue;
