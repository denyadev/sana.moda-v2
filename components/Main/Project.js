import React from 'react'
import Image from 'next/image'

const Project = ({image, title, width, height, hidden}) => {
  return (
    <article>
        <Image className={`object-contain ${hidden}`} alt={title} src={image} width={width} height={height}/>
    </article>


  )
}

export default Project