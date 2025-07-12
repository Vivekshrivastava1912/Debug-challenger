import React from 'react';

const Article = () => {
  return (
    <div className="min-h-screen bg-black  text-white px-4 md:px-5 py-5 font-mono rounded-2xl m-3">
      <div className="bg-black shadow-[1px_0_3px_#ffffff] rounded-2xl px-6 md:px-16 py-12 border border-gray-800">
        <h1 className="text-4xl font-bold mb-12 text-center border-b border-gray-700 pb-4">Behind the Debug Challenger</h1>

        {/* Section 1 */}
        <div className="mb-16 bg-black shadow-[1px_0_3px_#ffffff]  rounded-xl p-6 md:p-8">
          <h2 className="text-2xl text-orange-400 font-semibold mb-4">💡 What is Debug Challenger?</h2>
          <p className="text-lg text-gray-300">
            <span className="text-white font-semibold">Debug Challenger</span> is a creative and engaging platform built to help programmers sharpen one of the most important software skills — debugging.
            Unlike traditional learning platforms that focus only on problem-solving, this platform encourages a unique mindset: thinking like a developer, not just a coder.
          </p>
          <p className="text-lg text-gray-300 mt-4">
            It simulates real-life scenarios with broken code. These bugs may include logic errors, off-by-one mistakes, uninitialized variables, or incorrect loops — all commonly seen in industry-level projects.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-16 bg-black shadow-[1px_0_3px_#ffffff]  rounded-xl p-6 md:p-8">
          <h2 className="text-2xl text-orange-400 font-semibold mb-4">🎯 Why It Was Created?</h2>
          <p className="text-lg text-gray-300">
            In interviews, competitive coding, and day-to-day development, debugging is a must-have skill. But most students struggle because they don’t practice it enough. Debug Challenger fills this gap by:
          </p>
          <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2 text-lg">
            <li>Providing bug-filled code based on selected topics and levels</li>
            <li>Encouraging trial and error, observation, and hypothesis-based fixing</li>
            <li>Using a game-like interface to keep it fun and addictive</li>
          </ul>
          <p className="text-lg text-gray-300 mt-4">
            Instead of solving from scratch, you fix what’s broken — just like in real projects.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-16 bg-black shadow-[1px_0_3px_#ffffff]  rounded-xl p-6 md:p-8">
          <h2 className="text-2xl text-orange-400 font-semibold mb-4">🛠️ Features You’ll Love</h2>
          <ul className="list-decimal list-inside text-gray-300 text-lg space-y-3">
            <li><span className="text-white font-semibold">Challenge Generator:</span> Auto-generates bugged C++ code snippets in selected topics like arrays, loops, strings, etc.</li>
            <li><span className="text-white font-semibold">Difficulty Levels:</span> Choose between Easy, Medium, or Hard mode to match your comfort zone.</li>
            <li><span className="text-white font-semibold">Real-Time Timer:</span> Built-in stopwatch records how long you take to debug — helpful for improving speed.</li>
            <li><span className="text-white font-semibold">Dark Theme UI:</span> Developer-friendly dark theme that reduces eye strain and looks premium.</li>
            <li><span className="text-white font-semibold">Logical Thinking:</span> Strengthens your debugging mindset and helps trace bugs line by line.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="mb-16 bg-black shadow-[1px_0_3px_#ffffff]  rounded-xl p-6 md:p-8">
          <h2 className="text-2xl text-orange-400 font-semibold mb-4">🔍 Real-World Simulation</h2>
          <p className="text-lg text-gray-300">
            In real development, you rarely write perfect code in one go. Most of your time goes in:
          </p>
          <ul className="list-disc list-inside text-lg mt-2 text-gray-300 space-y-1">
            <li>Reading legacy code</li>
            <li>Understanding compiler errors</li>
            <li>Tracing variable values</li>
            <li>Fixing conditions and loops</li>
          </ul>
          <p className="mt-4 text-lg text-gray-300">
            Debug Challenger mimics this workflow. It doesn't just teach syntax, it teaches survival.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-16 bg-black shadow-[1px_0_3px_#ffffff]  rounded-xl p-6 md:p-8">
          <h2 className="text-2xl text-orange-400 font-semibold mb-4">🚀 Upcoming Enhancements</h2>
          <p className="text-lg text-gray-300">
            The project is still growing, and here’s what’s planned next:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-300 space-y-1 mt-2">
            <li>Python and JavaScript support</li>
            <li>Leaderboard to compare with friends</li>
            <li>Achievement badges (Speed Fixer, Syntax Ninja, etc.)</li>
            <li>AI Hint Generator for smart guidance</li>
            <li>Blog-style “Fix Explained” for every problem</li>
          </ul>
          <p className="text-lg mt-4 text-gray-300">
            These upgrades will make it even more powerful as a learning + practice platform.
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-16 bg-black shadow-[1px_0_3px_#ffffff]  rounded-xl p-6 md:p-8">
          <h2 className="text-2xl text-orange-400 font-semibold mb-4">👨‍🎓 Made for Learners, by a Learner</h2>
          <p className="text-lg text-gray-300">
            This project was crafted with passion by <span className="text-white font-bold">Vivek Shrivastava</span> — a fellow programmer who faced the same problems while learning.
            The goal was simple: create something useful for the community, something that makes debugging less frustrating and more fun.
          </p>
          <p className="text-lg text-gray-300 mt-4">
            If you're reading this, you're part of a movement to improve your coding skills the smart way.
            Keep exploring, keep fixing, and keep leveling up. The journey has just begun.
          </p>
        </div>

        <footer className="text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
          © 2025 Debug Challenger | Built with ❤️ by Vivek Shrivastava
        </footer>
      </div>
    </div>
  );
};

export default Article;