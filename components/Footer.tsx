import React from 'react'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt029 pb-10 pt-50' id="contact">


        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>Im ready to contribute to<span className='text-purple'> your team</span></h1>
            <p className='text-white md:mt-10 my-5 text-center'>Feel free to reach out, I would love to discuss how my skills and experience align with your company’s culture and goals!</p>
            <a href="mailto:zacharydavdevelops@gmail.com">
                <MagicButton
                    title='Lets get in touch'
                    icon={<FaLocationArrow />}
                    position='right'

                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>©Copyright 2025 Zach Wood</p>

            <div className='flex items-center md:gap-3 gap-6 pt-10'>
                {socialMedia.map((profile) => (
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounder-lg border border-black-300'>
                        <img src={profile.img} alt={profile.id} width={20} height={20} />
                    </div>
                
                ))}
            </div>
        </div>

        

    </footer>
  )
}

export default Footer