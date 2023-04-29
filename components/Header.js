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
                { navbar ? <h1 className="font-extrabold text-[#3D3D3D] text-2xl font-mont normal-case tracking-normal">Sana<span className="text-theme">Moda</span></h1> : <div className="hidden xl:flex font-[500]">+1 647-716-4009</div>}
            </div>
            <ul className="hidden xl:flex space-x-16">
                <li><Link className="hover:text-theme hover:overline decoration-2 cursor-pointer font-[500]" to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
                <li><Link className="hover:text-theme hover:overline decoration-2 cursor-pointer font-[500]" to="about" spy={true} smooth={true} duration={500}>About Me</Link></li>
                <li><Link className="hover:text-theme hover:overline decoration-2 cursor-pointer font-[500]" to="projects" spy={true} smooth={true} duration={500} offset={-100}>Portfolio</Link></li>
                <li><Link className="hover:text-theme hover:overline decoration-2 cursor-pointer font-[500]" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
            </ul>
            <div className="xl:hidden absolute right-4 z-10" onClick={handleClick}>
                <svg width="34" height="24" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="#394F76"/></svg>
            </div>
            { open &&         
            <div className="lg:hidden flex flex-col bg-black/70 absolute w-full left-0 top-0 pt-24 list-none p-4">
                <li className="py-4 border-b border-white/40"><Link className="hover:text-theme hover:overline decoration-2 cursor-pointer font-[500]" to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
                <li className="py-4 border-b border-white/40"><Link className="hover:text-theme hover:overline decoration-2 cursor-pointer font-[500]" to="about" spy={true} smooth={true} duration={500}>About Me</Link></li>
                <li className="py-4 border-b border-white/40"><Link className="hover:text-theme hover:overline decoration-2 cursor-pointer font-[500]" to="projects" spy={true} smooth={true} duration={500} offset={-100}>Portfolio</Link></li>
                <li className="py-4 border-b border-white/40"><Link className="hover:text-theme hover:overline decoration-2 cursor-pointer font-[500]" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
            </div>
            }
        </div>
    </header>
  )
}

export default Header