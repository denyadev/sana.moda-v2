import React from 'react'
import Image from 'next/image'

const Project = ({image, title}) => {
  return (
    <div className="card-zoom cursor-pointer group">
        <div className="">
            <h4 className="absolute z-10 font-oswald uppercase text-lg text-white top-0 left-0 p-8 tracking-[2px]">{title}</h4>
            <h6 className="absolute z-10 bottom-40 -left-16 uppercase text-white -rotate-90 tracking-[12px] font-oswald text-xs">Architecture</h6>
            <div className="opacity-70 group-hover:opacity-100">
                <Image className="card-zoom-image" alt={title} src={image} fill style={{objectFit:"cover"}}/>
            </div>
        </div>
    </div>
  )
}

export default Project