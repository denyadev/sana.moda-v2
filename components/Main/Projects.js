import React from 'react'
import Project from '../Main/Project'
import Image from 'next/image'

const Projects = () => {
  return (
    <>
        {/* <div className="h-[70vh] grid grid-cols-6 bg-black z-10 relative">
            <Project title="Richmond Hill Toronto" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259124/Richmond%20Hill%20Toronto%20project%201/001_t76tkj.webp" />
            <Project title="Forest Hill North York" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259128/Forest%20Hill%20North%20Toronto%20project%202/1_sg8cyg.webp" />
            <Project title="Sarnia Ontario" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259120/Sarnia%20Ontario%20project%203/4_oswrwt.webp" />
            <Project title="Woodbridge Toronto" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259119/Woodbridge%20Toronto%20project%204/1_onnlrx.webp" />
            <Project title="East York Toronto" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259122/East%20York%20Toronto%20project%205/1_mtuzmz.webp" />
            <Project title="Bracondale Hill Toronto" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259123/Bracondale%20Hill%20toronto%20project%206/1_x7z5yu.webp" />
        </div>
        <div className="p-4"/>
        <div className="h-[90vh] grid grid-cols-3 bg-black z-10 relative gap-2">
            <Project title="Richmond Hill Toronto" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259124/Richmond%20Hill%20Toronto%20project%201/001_t76tkj.webp" />
            <Project title="Forest Hill North York" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259128/Forest%20Hill%20North%20Toronto%20project%202/1_sg8cyg.webp" />
            <Project title="Sarnia Ontario" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259120/Sarnia%20Ontario%20project%203/4_oswrwt.webp" />
            <Project title="Woodbridge Toronto" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259119/Woodbridge%20Toronto%20project%204/1_onnlrx.webp" />
            <Project title="East York Toronto" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259122/East%20York%20Toronto%20project%205/1_mtuzmz.webp" />
            <Project title="Bracondale Hill Toronto" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259123/Bracondale%20Hill%20toronto%20project%206/1_x7z5yu.webp" />
        </div> */}
        {/* <div className="p-4"/>
        <div className="grid grid-rows-3 grid-flow-col gap-4 h-[90vh] z-10 relative px-16">
            <div className="col-span-1 hover:bg-black/40">
                <Image className="block h-full w-full object-contain object-left-bottom" alt={'title'} src={'https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259124/Richmond%20Hill%20Toronto%20project%201/001_t76tkj.webp'} width="1920" height="1280"/>
            </div>
            <div className="col-span-1 hover:bg-black/40">
                <Image className="block h-full w-full object-contain object-right-top" alt={'title'} src={'https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259119/Woodbridge%20Toronto%20project%204/1_onnlrx.webp'} width="1920" height="1283"/>
            </div>
            <div className="row-span-1 col-span-2 hover:bg-black/40">
                <Image className="block h-full w-full object-contain object-left" alt={'title'} src={'https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259120/Sarnia%20Ontario%20project%203/1_afvyc9.webp'} width="1200" height="555"/>
            </div>
            <div className="col-span-1 hover:bg-black/40">
                <Image className="block h-full w-full object-contain object-right-top" alt={'title'} src={'https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259122/East%20York%20Toronto%20project%205/1_mtuzmz.webp'} width="1000" height="750"/>
            </div>
            <div className="col-span-1 hover:bg-black/40">
                <Image className="block h-full w-full object-contain object-left-top" alt={'title'} src={'https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259123/Bracondale%20Hill%20toronto%20project%206/1_x7z5yu.webp'} width="4435" height="2554"/>
            </div>
            <div className="row-span-3 hover:bg-black/40">
                <Image className="block h-full w-full object-contain object-center" alt={'title'} src={'https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259128/Forest%20Hill%20North%20Toronto%20project%202/1_sg8cyg.webp'} width="2976" height="5760" />
            </div>
        </div>
        <div className="p-4"/> */}
        <div className="grid grid-cols-3 place-items-center relative gap-4 px-32">
            <article className="h-[400px] w-full hover:bg-black/40">
                <div className="w-5/6 h-full float-right">
                    <Image className="object-contain" alt="Sarnia Ontario" src="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259120/Sarnia%20Ontario%20project%203/4_oswrwt.webp" width="1200" height="900"/>
                </div>
            </article>
            <article className="h-[400px] w-full hover:bg-black/40">
                <div className="w-5/6 h-full">
                    <Image className="object-contain" alt="Richmond Hill Toronto" src="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259124/Richmond%20Hill%20Toronto%20project%201/001_t76tkj.webp" width="1920" height="1280"/>
                </div>
            </article>
            <article className="h-[400px] w-full hover:bg-black/40">
                <div className="w-5/6 h-full ml-16">
                    <Image className="object-contain" alt="Woodbridge Toronto" src="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259119/Woodbridge%20Toronto%20project%204/1_onnlrx.webp" width="1920" height="1283"/>
                </div>
            </article>
            <article className="h-[400px] w-full hover:bg-black/40">
                <div className="w-5/6 h-full ml-4">
                    <Image className="object-contain" alt="East York Toronto" src="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259122/East%20York%20Toronto%20project%205/1_mtuzmz.webp" width="1000" height="750"/>
                </div>
            </article>
            <article className="h-[400px] w-full hover:bg-black/40">
                <div className="w-5/6 h-full float-right">
                    <Image className="object-contain" alt="Bracondale Hill Toronto" src="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259123/Bracondale%20Hill%20toronto%20project%206/1_x7z5yu.webp" width="4435" height="2554"/>
                </div>
            </article>
            <article className="h-[400px] w-full hover:bg-black/40">
                <div className="w-[35%] h-auto float-left ml-8 mt-8">
                    <Image className="object-contain" alt="Forest Hill North York" src="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259128/Forest%20Hill%20North%20Toronto%20project%202/1_sg8cyg.webp" width="2976" height="5760"/>
                </div>
            </article>
        </div>
    </>

  )
}

export default Projects