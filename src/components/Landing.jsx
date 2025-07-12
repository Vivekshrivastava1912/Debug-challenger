

import Spline from '@splinetool/react-spline'
import React from 'react'
import Footer from './Footer'

const Landing = () => {
  return (<>
    <div className="flex overflow-hidden h-screen">
     <div className="w-1/3 m-3 ml-1 bg-black shadow-[1PX_0_5px_#ffffff] rounded-2xl  ">
       <Spline className='h-full rounded-2xl bg'  scene="https://prod.spline.design/LJ4xIH3ZVAwJ7toB/scene.splinecode" />
       
        
      </div>
      <div className="w-300 m-3 ml-1 bg-black shadow-[1PX_0_5px_#ffffff] rounded-2xl ">
       <div className="h-160  text-white flex items-center justify-center px-6 py-8">
      <div className="max-w-2xl text-center">
        
        {/* Tagline */}
        <div className="text-sm text-gray-400 mb-3 ">
          ✦ Debug Challenger: Level Up Debugging
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-mono font-bold leading-snug mb-4">
          The Ultimate Debugging Companion
        </h1>

        {/* Subtitle */}
        <p className="text-base text-gray-300 mb-3">
          Master real-world debugging challenges with AI-powered hints, error tracing, and code feedback.
        </p>

        {/* Description Paragraph */}
        <p className="text-sm text-gray-400 mb-4 px-2">
          <span className="text-white font-medium">Debug Challenger</span> helps you think like a true developer by offering broken code scenarios to fix.
          Sharpen your skills with logic puzzles, runtime errors, syntax mistakes, and edge case hunting — all in an engaging, gamified format.
        </p>

        {/* Extra Supporting Line */}
        <p className="text-sm text-gray-500 mb-2 px-4">
          Ready to fix bugs under pressure? Compete in time-based challenges, unlock badges, and see how fast your mind can debug.
        </p>
        <p className="text-sm text-gray-500 mb-2 px-4">
  Crafted with ⚙️	by Vivek Shrivastava
</p>

        {/* Input and Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 ">
          <input 
            type="text"
            placeholder="type a challenge or bug"
            className="bg-black text-white px-4 py-2 rounded-2xl w-64 text-sm focus:outline-none shadow-[0_0_5px_#ffffff]  "
          />
          <button className=" shadow-[0_0_5px_#ffffff] hover:bg-black-400 text-white px-5 py-2 rounded-2xl text-sm font-medium">
            Start
          </button>
        </div>
      </div>
      
    </div>
      </div> 
       </div>
        <Footer/>
        </>
  )
}

export default Landing