import React from 'react'
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitterX, BsYoutube} from 'react-icons/bs'

function Footer() {
    const newDate = new Date()
    const year = newDate.getFullYear();
  return (
    <footer className="relative left-0 bottom-0 h-12 py-5 flex flex-col sm:flex-row items-center justify-between">
      <section className='text-lg'>
        Copyright {year} | All rigths reserved
      </section>
      <section className='flex items-center justify-center gap-5 text-2xl text-white'>
        <a href="#" className='hover:text-yellow-500 transition-all ease-in-out duration-300'><BsFacebook/></a>
        <a href="#" className='hover:text-yellow-500 transition-all ease-in-out duration-300'><BsInstagram/></a>
        <a href="#" className='hover:text-yellow-500 transition-all ease-in-out duration-300'><BsTwitterX/></a>
        <a href="#" className='hover:text-yellow-500 transition-all ease-in-out duration-300'><BsLinkedin/></a>
        <a href="#" className='hover:text-yellow-500 transition-all ease-in-out duration-300'><BsYoutube/></a>
      </section>
    </footer>
  )
}

export default Footer
