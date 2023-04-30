import React from 'react'
import Socials from '../Socials'

const Hero = () => {
  return (
    <>
    <div className="relative bg-hero bg-cover lg:bg-contain bg-right bg-no-repeat">
        <div className="">
            <div className="h-screen absolute bg-[#F6F5F3] w-16 md:w-32 lg:w-44">
                <div className="w-[14rem] md:w-[23rem] h-[17rem] md:h-[23.75rem] bg-[#F6F5F3]">
                    <div className="text-center pt-8">
                        <h1 className="font-extrabold text-[#3D3D3D] text-4xl">Sana<span className="text-theme">Moda</span></h1>
                        <h1 className="font-bold text-[#3D3D3D] left-[-300px] top-[260px] lg:text-[140px] opacity-10 absolute select-none">SanaModa</h1>
                        {/* <h2 className="mr-16 text-theme text-[76px] mt-16 tracking-[5px] font-oswald">01<span className="ml-5 mt-8 text-white opacity-10 text-lg absolute top-[110px] tracking-[2px]">/&nbsp;&nbsp;03</span></h2> */}
                    </div>
                </div>
                <h4 className="text-[#3D3D3D] font-bold -rotate-90 tracking-[10px] uppercase text-[10px] whitespace-nowrap mt-28 select-none">Interior Designer</h4>
                {/* <hr className="bg-white/5 font-bold -rotate-90 tracking-[10px] uppercase text-[10px] whitespace-nowrap mt-[75px] md:mt-44 lg:mt-32 w-8 sm:w-12 ml-8 md:ml-10 lg:ml-16"/> */}
                <div className="absolute bottom-12 left-6 md:left-10 lg:left-[3.8rem]">
                    {/* <Socials /> */}
                </div>
            </div>
            <div className="lg:container mx-auto relative h-screen">
                <div className="flex h-full items-center text-right justify-end">
                    <div className="space-y-10 mt-44 lg:mt-0 px-4 md:px-16 lg:px-0">
                        <h2 className="text-xl md:text-5xl text-white uppercase tracking-[5px] lg:tracking-[18px] font-oswald lg:-mr-5">Transform Your Space</h2>
                        <h3 className="text-sm md:text-base text-white font-normal ml-[60px] md:ml-[100px] lg:ml-[500px]"><b>SanaModa</b> is an interior design studio that transforms spaces to inspire potential and function trough design. The unexpected and expressive interiors at all design projects are a cocktail of creative intelligence, cultural relevance and flawless execution.</h3>
                    </div>

                </div>
            </div>  
        </div>
    </div>
    </>
  )
}

export default Hero