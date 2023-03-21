import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
    const [navbar, setNavbar] = useState(false)
    const [open, setOpen] = useState(false)

    const changeNavbar = () => {
        if (window.scrollY >= 200) {
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
        <div className="flex justify-between">
            <div>
                +1 647-716-4009
            </div>
            <div className="space-x-16">
                <Link href="/">Home</Link>
                <Link href="/about">About Me</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    </header>
  )
}

export default Header