import React from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import { SocialIcon } from 'react-social-icons'

const ContactBox = () => {
    
    const { register, handleSubmit } = useForm()

    const onSubmit = formData => {
        window.location.href = `mailto:denis.kosogov@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    }

  return (
    <div className="container grid grid-cols-3 items-center h-[720px] mx-auto text-[#3D3D3D] relative">
        {/* Heading */}
        <div className="flex flex-col justify-between h-full absolute text-center w-full mx-auto">
            <h3 className="text-center uppercase text-4xl font-oswald tracking-[8px] mt-28 z-10">Get <span className="text-theme">In Touch</span></h3>
            <h1 className="absolute text-[173px] font-bold opacity-10 -right-16 -top-3 select-none">contacts</h1>
       </div>
        {/* Left */}
        <div className="space-y-6 z-10 ">
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 col-span-2 mt-24 z-10">
            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2 float-left">
                    <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
                    <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
                    <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />
                </div>
                <textarea {...register('message')} placeholder="Message" className="contactInput -ml-3" />
            </div>
            <button type="submit" className="shadow-xl shadow-theme/40 hover:shadow-none float-right text-sm text-white bg-theme font-mont font-semibold py-3 px-10 uppercase tracking-widest">Send &#8594;</button>
        </form>
    </div>
  )
}

export default ContactBox