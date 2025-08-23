import React from "react";
import Footer from "./Footer";

const Article = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-8 py-6 font-mono rounded-2xl m-2 md:m-4">
        <div className="bg-black shadow-[0_0_10px_rgba(255,255,255,0.15)] rounded-2xl px-4 sm:px-8 md:px-14 py-8 md:py-12 border border-gray-800">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center border-b border-gray-700 pb-4">
            Behind the Debug Challenger
          </h1>

          {/* Section template */}
          {[
            {
              title: "💡 What is Debug Challenger?",
              content: (
                <>
                  <p className="text-base sm:text-lg text-gray-300">
                    <span className="text-white font-semibold">
                      Debug Challenger
                    </span>{" "}
                    is a creative and engaging platform built to help
                    programmers sharpen one of the most important software
                    skills — debugging. Unlike traditional learning platforms
                    that focus only on problem-solving, this platform encourages
                    a unique mindset: thinking like a developer, not just a
                    coder.
                  </p>
                  <p className="text-base sm:text-lg text-gray-300 mt-4">
                    It simulates real-life scenarios with broken code. These
                    bugs may include logic errors, off-by-one mistakes,
                    uninitialized variables, or incorrect loops — all commonly
                    seen in industry-level projects.
                  </p>
                </>
              ),
            },
            {
              title: "🎯 Why It Was Created?",
              content: (
                <>
                  <p className="text-base sm:text-lg text-gray-300">
                    In interviews, competitive coding, and day-to-day
                    development, debugging is a must-have skill. But most
                    students struggle because they don’t practice it enough.
                    Debug Challenger fills this gap by:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2 text-base sm:text-lg">
                    <li>
                      Providing bug-filled code based on selected topics and
                      levels
                    </li>
                    <li>
                      Encouraging trial and error, observation, and
                      hypothesis-based fixing
                    </li>
                    <li>
                      Using a game-like interface to keep it fun and addictive
                    </li>
                  </ul>
                  <p className="text-base sm:text-lg text-gray-300 mt-4">
                    Instead of solving from scratch, you fix what’s broken —
                    just like in real projects.
                  </p>
                </>
              ),
            },
            {
              title: "🛠️ Features You’ll Love",
              content: (
                <ul className="list-decimal list-inside text-gray-300 text-base sm:text-lg space-y-3">
                  <li>
                    <span className="text-white font-semibold">
                      Challenge Generator:
                    </span>{" "}
                    Auto-generates bugged C++ code snippets in selected topics
                    like arrays, loops, strings, etc.
                  </li>
                  <li>
                    <span className="text-white font-semibold">
                      Difficulty Levels:
                    </span>{" "}
                    Choose between Easy, Medium, or Hard mode to match your
                    comfort zone.
                  </li>
                  <li>
                    <span className="text-white font-semibold">
                      Real-Time Timer:
                    </span>{" "}
                    Built-in stopwatch records how long you take to debug —
                    helpful for improving speed.
                  </li>
                  <li>
                    <span className="text-white font-semibold">
                      Dark Theme UI:
                    </span>{" "}
                    Developer-friendly dark theme that reduces eye strain and
                    looks premium.
                  </li>
                  <li>
                    <span className="text-white font-semibold">
                      Logical Thinking:
                    </span>{" "}
                    Strengthens your debugging mindset and helps trace bugs line
                    by line.
                  </li>
                </ul>
              ),
            },
            {
              title: "🔍 Real-World Simulation",
              content: (
                <>
                  <p className="text-base sm:text-lg text-gray-300">
                    In real development, you rarely write perfect code in one
                    go. Most of your time goes in:
                  </p>
                  <ul className="list-disc list-inside text-base sm:text-lg mt-2 text-gray-300 space-y-1">
                    <li>Reading legacy code</li>
                    <li>Understanding compiler errors</li>
                    <li>Tracing variable values</li>
                    <li>Fixing conditions and loops</li>
                  </ul>
                  <p className="mt-4 text-base sm:text-lg text-gray-300">
                    Debug Challenger mimics this workflow. It doesn't just teach
                    syntax, it teaches survival.
                  </p>
                </>
              ),
            },
            {
              title: "🚀 Upcoming Enhancements",
              content: (
                <>
                  <p className="text-base sm:text-lg text-gray-300">
                    The project is still growing, and here’s what’s planned
                    next:
                  </p>
                  <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 space-y-1 mt-2">
                    <li>Python and JavaScript support</li>
                    <li>Leaderboard to compare with friends</li>
                    <li>
                      Achievement badges (Speed Fixer, Syntax Ninja, etc.)
                    </li>
                    <li>AI Hint Generator for smart guidance</li>
                    <li>
                      Blog-style “Fix Explained” for every problem
                    </li>
                  </ul>
                  <p className="text-base sm:text-lg mt-4 text-gray-300">
                    These upgrades will make it even more powerful as a learning
                    + practice platform.
                  </p>
                </>
              ),
            },
            {
              title: "👨‍🎓 Made for Learners, by a Learner",
              content: (
                <>
                  <p className="text-base sm:text-lg text-gray-300">
                    This project was crafted with passion by{" "}
                    <span className="text-white font-bold">
                      Vivek Shrivastava
                    </span>{" "}
                    — a fellow programmer who faced the same problems while
                    learning. The goal was simple: create something useful for
                    the community, something that makes debugging less
                    frustrating and more fun.
                  </p>
                  <p className="text-base sm:text-lg text-gray-300 mt-4">
                    If you're reading this, you're part of a movement to improve
                    your coding skills the smart way. Keep exploring, keep
                    fixing, and keep leveling up. The journey has just begun.
                  </p>
                </>
              ),
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="mb-12 bg-black shadow-[0_0_6px_rgba(255,255,255,0.2)] rounded-xl p-5 sm:p-6 md:p-8 hover:shadow-[0_0_12px_rgba(255,255,255,0.35)] transition-shadow duration-300"
            >
              <h2 className="text-xl sm:text-2xl text-orange-400 font-semibold mb-4">
                {section.title}
              </h2>
              {section.content}
            </div>
          ))}

          {/* Bottom footer text */}
          <footer className="text-center text-xs sm:text-sm text-gray-500 border-t border-gray-700 pt-6">
            © 2025 Debug Challenger | Built with  by Vivek Shrivastava
          </footer>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Article;