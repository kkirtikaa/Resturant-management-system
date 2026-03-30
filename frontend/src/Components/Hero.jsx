import React from 'react'
import bgImage from '../assets/hero.jpg'
import line from '../assets/line2.png'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Navbar />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CENTERED CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-center">

        <div>
          <img src={line} className="mx-auto mb-6 w-40" alt="" />

          <h2 className="text-lg tracking-widest uppercase mb-4">
            Where Delight Meets Taste
          </h2>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            DEMI'S DINER
          </h1>

          <button className="bg-amber-500 text-black py-3 px-10 hover:bg-amber-600 transition duration-300">
            BOOK A TABLE
          </button>
        </div>

      </div>
    </div>
  )
}

export default Hero
