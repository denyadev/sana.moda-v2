import React from 'react'

const Footer = () => {
  return (
    // bg-[#F6F5F3]  pt-8
    <footer className="">
        <div  className="container grid grid-cols-3 items-center mx-auto pb-16 relative">
            <h1 className="font-extrabold text-[#3D3D3D] text-4xl">sana<span className="text-theme">.</span>moda</h1>
            <p className="text-sm text-center text-[#3D3D3D]/80">by denyadev</p>
            <p className="text-sm text-right text-[#3D3D3D]/80">© <span className="text-theme font-semibold">sana.moda</span> 2022. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer