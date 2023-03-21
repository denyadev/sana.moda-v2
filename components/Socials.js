import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Socials = () => {
  return (
    <div className="flex flex-col text-center space-y-6">
        <SocialIcon url="https://linkedin.com/denyadev" target="_blank" fgColor="gray" bgColor="transparent"/>
        <SocialIcon url="https://instagram.com/denyadev" target="_blank" fgColor="gray" bgColor="transparent"/>
        <SocialIcon url="https://facebook.com/denyadev" target="_blank" fgColor="gray" bgColor="transparent"/>
    </div>
  )
}

export default Socials