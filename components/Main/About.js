import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="container grid grid-cols-3 place-items-center h-[860px] mx-auto text-[#3D3D3D] relative">
        {/* <div className="container mx-auto grid grid-cols-3 h-[900px] absolute">
            <div className="border-l border-[#373737]" />
            <div className="border-l border-[#373737]" />
            <div className="border-l border-r border-[#373737]" />
        </div> */}
        <div className="space-y-8">
            <h1 className="absolute text-[173px] font-bold opacity-10 -left-[72px] top-28">about</h1>
            <h4 className="text-3xl font-bold">we turn ideas into works of art<span className="text-theme">.</span></h4>
            <p className="text-base">For each project we establish relationships with partners who we know will help us create added value for your project. As well as bringing together the public and private sectors, we make sector-overarching links to gather knowledge and to learn from each other. The way we undertake projects is based on permanently applying values that reinforce each other: socio-cultural value, experiental value, building-technical value and economical value</p>
        </div>

        <div className="flex flex-col justify-between h-full py-28">
            <h3 className="text-center uppercase text-4xl font-oswald tracking-[8px]">About <span className="text-theme">sana.moda</span></h3>
            <h3 className="text-center uppercase text-4xl font-oswald tracking-[8px]">My <span className="text-theme">Projects</span></h3>
        </div>

        <div className="">
            {/* <Image src={require('../../public/ab.jpg')} /> */}
            <Image src={require('../../public/cover.webp')} width={400} height={300}/>
        </div>
    </div>
  )
}

export default About