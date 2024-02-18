import React from 'react'
import "../styles/components/informationcontainer.sass"
import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai"


export const InformationContainer = () => {
  return (
    <section id='information-container'>
        <div className="info-card">
            <AiFillPhone id='phone-icon'/>
            <div>
                <h3>Telefone</h3>
                <p>(86)98145-3069</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id='email-icon'/>
            <div>
                <h3>E-mail</h3>
                <p>danielvbrn@gmail.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id='pin-icon'/>
            <div>
                <h3>Localização</h3>
                <p>Tresina/PI</p>
            </div>
        </div>
    </section>
  )
}
