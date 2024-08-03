import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import "./action.css"

function Social() {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/manish-verma-b8a036219/' target='_blank'> <BsLinkedin /> </a>
      <a href='https://github.com/manishloginn?tab=repositories' target='_blank'> <BsGithub /> </a>
    </div>
  )
}

export default Social
