import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <>
    <div className="pb-[18rem] md:pb-[20rem] lg:pb-0">
        <h3 className="text-center uppercase text-4xl font-oswald tracking-[8px] pt-[8.6rem]">About <span className="text-theme">SanaModa</span></h3>
        <div className="lg:container px-4 grid lg:grid-cols-3 place-items-center h-[720px] mx-auto text-[#3D3D3D] relative space-y-8 lg:space-y-0">
            <div className="space-y-8 -ml-12 lg:-ml-20">
                <h1 className="absolute text-[83px] lg:text-[173px] font-bold opacity-10 lg:-left-[72px] -top-28 lg:top-6  select-none">about</h1>
                <h4 className="text-3xl font-bold relative"><span className="text-theme">What</span> is important<span className="text-theme">?</span></h4>
                <div className='relative'>
                    <p>High Expectations</p>
                    <p>The Unexpected</p>
                    <p>Strategic Thinking</p>
                    <p>Interesting Answers</p>
                    <p>Creative Instinct</p>
                    <p>Art</p>
                    <p>Fashion</p>
                    <p>Ideas</p>
                    <p>Impulses</p>
                    <p>Spaces with Purpose</p>   
                    <p>Insight</p>
                    <p>Inspiration</p>
                    <p>Unique</p>
                    <p>Design</p>
                </div>
            </div>
            <div className="hidden lg:block" />
            <div className="">
                <Image src={require('../../public/cover.webp')} alt="about cover" width={400} height={300}/>
            </div>
        </div>        
    </div>
    </>
    
  )
}

export default About