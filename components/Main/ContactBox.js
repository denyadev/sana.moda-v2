import React from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'

const ContactBox = () => {
  return (
    <div className="lg:container grid lg:grid-cols-3 items-center h-[800px] mx-auto text-[#3D3D3D] relative py-56 lg:py-0 px-4 md:px-12 lg:px-0">
        {/* Heading */}
        <div className="flex flex-col justify-between h-full absolute text-center w-full mx-auto">
            <h3 className="text-center uppercase text-4xl font-oswald tracking-[8px] mt-24 z-10">Get <span className="text-theme">In Touch</span></h3>
            <h1 className="absolute text-[83px] md:text-[160px] lg:text-[173px] font-bold opacity-10 lg:-right-16 top-10 md:-top-12 lg:-top-7 select-none">contacts</h1>
       </div>
        {/* Left */}
        <div className="space-y-6 z-10">
            <p className="text-2xl font-semibold"><span className="text-theme">Send</span> me a message.</p>
            <div className="space-y-2">
                <div className="space-y-5 pl-3">
                    <div className="flex items-center space-x-2">
                        <PhoneIcon className="text-theme h-6 w-6"/>
                        <p>+1 647-716-4009</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <EnvelopeIcon className="text-theme h-6 w-6"/>
                        <p>siilieva@yahoo.com</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <MapPinIcon className="text-theme h-6 w-6"/>
                        <p>Toronto, Canada</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Right */}
        <form action="https://formsubmit.co/siilieva@yahoo.com" method="POST" className="space-y-8 col-span-2 mt-24 z-10">
            <div className="grid md:grid-cols-2 space-y-2 md:space-y-0 md:gap-6">
                <div className="flex flex-col space-y-2 float-left">
                    <input name="name" required placeholder="Name" className="contactInput" type="text" />
                    <input name="email" required placeholder="Email" className="contactInput" type="email" />
                    <input name="_subject" required placeholder="Subject" className="contactInput" type="text" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://www.sanamoda.ca/" />
                </div>
                <textarea name="message" required placeholder="Message" className="contactInput md:-ml-3" />
            </div>
            <button type="submit" className="shadow-xl shadow-theme/40 hover:shadow-none float-right text-sm text-white bg-theme font-mont font-semibold py-3 px-10 uppercase tracking-widest">Send &#8594;</button>
        </form>
    </div>
  )
}

export default ContactBox