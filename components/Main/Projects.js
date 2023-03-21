import React from 'react'
import Project from '../Main/Project'

const Projects = () => {
  return (
    <>
        <div className="h-[70vh] grid grid-cols-6 bg-black z-10 relative">
        <Project title="Richmond Hill Toronto" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259124/Richmond%20Hill%20Toronto%20project%201/001_t76tkj.webp" />
        <Project title="Forest Hill North York" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259128/Forest%20Hill%20North%20Toronto%20project%202/1_sg8cyg.webp" />
        <Project title="Sarnia Ontario" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259120/Sarnia%20Ontario%20project%203/1_afvyc9.webp" />
        <Project title="Woodbridge Toronto" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259119/Woodbridge%20Toronto%20project%204/1_onnlrx.webp" />
        <Project title="East York Toronto" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259122/East%20York%20Toronto%20project%205/1_mtuzmz.webp" />
        <Project title="Bracondale Hill Toronto" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259123/Bracondale%20Hill%20toronto%20project%206/1_x7z5yu.webp" />
    </div>
    <div className="p-4"/>
    <div className="h-[90vh] grid grid-cols-3 bg-black z-10 relative">
        <Project title="Richmond Hill Toronto" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259124/Richmond%20Hill%20Toronto%20project%201/001_t76tkj.webp" />
        <Project title="Forest Hill North York" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259128/Forest%20Hill%20North%20Toronto%20project%202/1_sg8cyg.webp" />
        <Project title="Sarnia Ontario" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259120/Sarnia%20Ontario%20project%203/1_afvyc9.webp" />
        <Project title="Woodbridge Toronto" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259119/Woodbridge%20Toronto%20project%204/1_onnlrx.webp" />
        <Project title="East York Toronto" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259122/East%20York%20Toronto%20project%205/1_mtuzmz.webp" />
        <Project title="Bracondale Hill Toronto" image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259123/Bracondale%20Hill%20toronto%20project%206/1_x7z5yu.webp" />
    </div>
    </>

  )
}

export default Projects