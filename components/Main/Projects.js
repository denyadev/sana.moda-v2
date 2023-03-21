import React from 'react'
import Project from '../Main/Project'
import Image from 'next/image'

const Projects = () => {
  return (
    <>
        <div className="h-[70vh] grid grid-cols-6 bg-black z-10 relative">
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
        </div>
        <div className="p-4"/>
        <div className="container mx-auto grid grid-rows-3 grid-flow-col gap-4 h-[90vh] z-10 relative">
            <div className="col-span-1">
                <Image className="block h-full w-full rounded-md object-cover object-center" alt={'title'} src={'https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259124/Richmond%20Hill%20Toronto%20project%201/001_t76tkj.webp'} width="1920" height="1280"/>
            </div>
            <div className="col-span-1">
                <Image className="block h-full w-full rounded-md object-cover object-center" alt={'title'} src={'https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259119/Woodbridge%20Toronto%20project%204/1_onnlrx.webp'} width="1920" height="1283"/>
            </div>
            <div className="row-span-1 col-span-2">
                <Image className="block h-full w-full rounded-md object-cover object-center" alt={'title'} src={'https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259120/Sarnia%20Ontario%20project%203/1_afvyc9.webp'} width="1200" height="555"/>
            </div>
            <div className="col-span-1">
                <Image className="block h-full w-full rounded-md object-cover object-center" alt={'title'} src={'https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259122/East%20York%20Toronto%20project%205/1_mtuzmz.webp'} width="1000" height="750"/>
            </div>
            <div className="col-span-1">
                <Image className="block h-full w-full rounded-md object-cover object-center" alt={'title'} src={'https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259123/Bracondale%20Hill%20toronto%20project%206/1_x7z5yu.webp'} width="4435" height="2554"/>
            </div>
            <div className="row-span-3">
                <Image className="block h-full w-full rounded-md object-cover object-center" alt={'title'} src={'https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259128/Forest%20Hill%20North%20Toronto%20project%202/1_sg8cyg.webp'} width="2976" height="5760" />
            </div>
        </div>


    </>

  )
}

export default Projects