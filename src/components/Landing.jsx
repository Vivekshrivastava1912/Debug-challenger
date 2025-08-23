
import Robot from '../assets/Robot.jpeg'
import Spline from '@splinetool/react-spline'
import React from 'react'
import Footer from './Footer'

const Landing = () => {
  return (<>
    <div className="flex overflow-hidden sm:h-180 h-270">
     <div className="lg:w-100 sm:ml-30 sm:h-half sm:ml-9 bg-red-700 shadow-[1PX_0_5px_#ffffff] rounded-2xl w-0 h-0 ">
       <img src={Robot} alt="Robot" />
        
      </div>
      <div className="w-300 sm:h-173  h-263 m-3 ml-1 bg-black shadow-[1PX_0_5px_#ffffff] rounded-2xl sm:shadow-[1PX_0_5px_] ">
       <div className="sm:h-170 h-250 text-white flex items-center justify-center px-2 py-2">
      <div className="max-w-2xl text-center">
        
        {/* Tagline */}
        <div className="text-sm text-gray-400 mb-3 ">
          ✦ Debug Challenger: Level Up Debugging
        </div>
     <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-6 text-white">
    Sharpen Your Debugging Skills,  
    <span className="text-orange-400"> One Challenge at a Time</span>
  </h1>
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


       <div className="grid gap-6 md:grid-cols-3 text-left mb-10">
    <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
      <h3 className="text-orange-300 font-semibold mb-2">Real-World Challenges</h3>
      <p className="text-gray-400 text-sm">Fix syntax errors, runtime bugs, and tricky edge cases inspired by real development issues.</p>
    </div>
    <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
      <h3 className="text-orange-300 font-semibold mb-2">AI-Powered Hints</h3>
      <p className="text-gray-400 text-sm">Get just enough guidance to help you think like a pro without giving away the answer.</p>
    </div>
    <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
      <h3 className="text-orange-300 font-semibold mb-2">Gamified Learning</h3>
      <p className="text-gray-400 text-sm">Earn badges, track your progress, and compete with others in timed bug hunts.</p>
    </div>
  </div>

        {/* Extra Supporting Line */}
        <p className="text-sm text-gray-500 mb-2 px-4">
          Ready to fix bugs under pressure? Compete in time-based challenges, unlock badges, and see how fast your mind can debug.
        </p>
        <p className="text-sm text-gray-500 mb-2 px-4">
  Crafted with ⚙️	by Vivek Shrivastava
</p>
      </div>
      
    </div>
      </div> 
       </div>
        <Footer/>
        </>
  )
}

export default Landing