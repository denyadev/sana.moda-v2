import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="container grid grid-cols-3 place-items-center h-[860px] mx-auto text-[#3D3D3D] relative">
        <div className="space-y-8 -ml-20">
            <h1 className="absolute text-[173px] font-bold opacity-10 -left-[72px] top-28 select-none">about</h1>
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

        <div className="flex flex-col justify-between h-full py-28">
            <h3 className="text-center uppercase text-4xl font-oswald tracking-[8px]">About <span className="text-theme">SanaModa</span></h3>
            <h3 className="text-center uppercase text-4xl font-oswald tracking-[8px]">My <span className="text-theme">Projects</span></h3>
        </div>

        <div className="">
            <Image src={require('../../public/cover.webp')} alt="about cover" width={400} height={300}/>
        </div>
    </div>
  )
}

export default About