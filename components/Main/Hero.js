import React from 'react'
import Socials from '../Socials'
import Image from 'next/image'

import bgimg1 from '../../public/slide1.jpg'
import bgimg2 from '../../public/slide2.jpg'

const Hero = () => {
  return (
    <>
    <div className="relative bg-hero bg-cover">
        {/* Side Bar */}
        {/* <div className="h-screen">
            <div className="">
                <Image src={'https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259262/Cover_Photo_zlkwjr.webp'} alt="cover-photo" fill  objectFit="contain" />
            </div>
        </div> */}
        <div className="">
            <div className="h-screen absolute bg-[#F6F5F3] w-44">
                <div className="w-[23rem] h-[23.75rem] bg-[#F6F5F3]">
                    <div className="text-center pt-10">
                        <h1 className="font-extrabold text-[#3D3D3D] text-4xl">sana<span className="text-theme">.</span>moda</h1>
                        <h1 className="font-bold text-[#3D3D3D] left-[-300px] top-[260px] text-[140px] opacity-10 absolute select-none">sana.moda</h1>
                        <h2 className="mr-16 text-theme text-[76px] mt-16 tracking-[5px] font-oswald">01<span className="ml-5 mt-8 text-white opacity-10 text-lg absolute top-[110px] tracking-[2px]">/&nbsp;&nbsp;03</span></h2>
                    </div>
                </div>
                <h4 className="text-[#3D3D3D] font-bold -rotate-90 tracking-[10px] uppercase text-[10px] whitespace-nowrap mt-28 select-none">Interior Designer</h4>
                <hr className="bg-white/5 font-bold -rotate-90 tracking-[10px] uppercase text-[10px] whitespace-nowrap mt-32 w-12 ml-16"/>
                <div className="absolute bottom-12 left-14">
                    <Socials />
                </div>
            </div>
            <div className="container mx-auto relative h-screen">
                <div className="flex h-full items-center text-right justify-end">
                    <div className="space-y-10 mt-24">
                        <h2 className="text-5xl text-white uppercase tracking-[18px] font-oswald -mr-5">Transform Your Space</h2>
                        <h3 className="text-white font-normal ml-[500px]"><b>SanaModa</b> is an interior design studio that transforms spaces to inspire potential and function trough design. The unexpected and expressive interiors at all design projects are a cocktail of creative intelligence, cultural relevance and flawless execution.</h3>
                        <button className="text-sm text-white bg-theme font-mont font-semibold py-3 px-8 uppercase tracking-widest">Previous Work &#8594;</button>
                    </div>

                </div>
            </div>  
        </div>
        
        
    </div>
    </>
  )
}

export default Hero