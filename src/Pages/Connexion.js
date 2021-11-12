import React from 'react'
import FormConnex from '../Components/FormConnex'
import Header from '../Components/Header'
import "../Php/Login.php"

const Connexion = () => {
    return (
        <div className="container1">
            <Header/>
            <h1>page connexion Client</h1>
            <FormConnex/>
        </div>
    )
}

export default Connexion
