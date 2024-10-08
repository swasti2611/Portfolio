import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import "./action.css"

function Social() {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/swatijagtap/' target='_blank'> <BsLinkedin /> </a>
      <a href='https://github.com/swasti2611' target='_blank'> <BsGithub /> </a>
    </div>
  )
}

export default Social
