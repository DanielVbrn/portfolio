import React from 'react'
import { SocialNetworks } from './SocialNetworks'
import { InformationContainer } from './InformationContainer'
import avatar from "../img/avatar.png"
import "../styles/components/sidebar.sass"

export const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={avatar} alt="" />
      <p className='title'>Desenvolvedor</p>
      <SocialNetworks/>
      <InformationContainer/>
    </aside>
  )
}
