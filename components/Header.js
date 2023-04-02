import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const Header = () => {
    const [navbar, setNavbar] = useState(false)
    const [open, setOpen] = useState(false)

    const changeNavbar = () => {
        if (window.scrollY >= 75) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavbar)
    }, [])

    const handleClick = () => setOpen(!open)

  return (
    <header className={navbar ? 'header-active' : 'header'}>
        <div className="flex items-center justify-between container mx-auto">
            <div>
                { navbar ? <h1 className="font-extrabold text-[#3D3D3D] text-2xl font-mont normal-case tracking-normal">Sana<span className="text-theme">Moda</span></h1> : "+1 647-716-4009"}
            </div>
            <ul className="flex space-x-16">
                <li><Link className="hover:text-theme hover:underline underline-offset-4 decoration-2 cursor-pointer" to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
                <li><Link className="hover:text-theme hover:underline underline-offset-4 decoration-2 cursor-pointer" to="about" spy={true} smooth={true} duration={500}>About Me</Link></li>
                <li><Link className="hover:text-theme hover:underline underline-offset-4 decoration-2 cursor-pointer" to="projects" spy={true} smooth={true} duration={500} offset={-100}>Portfolio</Link></li>
                <li><Link className="hover:text-theme hover:underline underline-offset-4 decoration-2 cursor-pointer" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </div>
    </header>
  )
}

export default Header