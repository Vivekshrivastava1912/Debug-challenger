import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center sm:text-left">
        
        {/* Project Info */}
        <div>
          <h2 className="text-orange-500 font-bold text-xl mb-4">
            Debug Challenger
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Welcome to your all-in-one platform where debugging meets mastery.
            Whether you're a beginner exploring your first bug or an experienced
            developer polishing your skills, this hub is made for you. Dive deep
            into real-world debugging problems inspired by actual developer
            challenges. 
            <br />
            <br />
           
          </p>
        </div>

        {/* Debugging Topics */}
        <div>
          <h3 className="text-orange-500 font-semibold text-lg mb-3">
            Debugging Topics
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Array Index Out of Bounds</li>
            <li>Off-by-One Errors</li>
            <li>Uninitialized Variables</li>
            <li>Infinite Loops in Recursion</li>
            <li>Stack Overflow Errors</li>
          </ul>
        </div>

        {/* DSA Topics */}
        <div>
          <h3 className="text-orange-500 font-semibold text-lg mb-3">
            DSA Topics
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Arrays & Strings</li>
            <li>Linked Lists</li>
            <li>Trees & Graphs</li>
            <li>Recursion</li>
            <li>Dynamic Programming</li>
          </ul>
        </div>

        {/* Developer Tools */}
        <div>
          <h3 className="text-orange-500 font-semibold text-lg mb-3">
            Developer Tools
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>React.js</li>
            <li>Vite</li>
            <li>Tailwind CSS</li>
            <li>Clerk Auth</li>
            <li>Monaco Editor</li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center mt-10 text-sm border-t border-gray-700 pt-4 text-gray-400">
        © {new Date().getFullYear()} CodeOtion. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
