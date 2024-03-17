import "../styles/components/socialnetworks.sass"
import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa"


const socialnetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, link:'https://www.linkedin.com/in/daniel-vitor-7a8b92247/' },
    { name: "github", icon: <FaGithub /> , link:"https://github.com/DanielVbrn"},
    { name: "instagram", icon: <FaInstagram /> , link:'https://www.instagram.com/daniel_vbrn/'},
  ];

export const SocialNetworks = () => {
  return (
    <section id="social-networks">
        {socialnetworks.map((network) => (
            <a href={network.link} className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
}
