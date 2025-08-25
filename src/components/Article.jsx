import React from "react";
import Footer from "./Footer";

const Article = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-8 py-6 font-mono rounded-2xl m-2 md:m-4">
        <div className="bg-black shadow-[0_0_10px_rgba(255,255,255,0.15)] rounded-2xl px-4 sm:px-8 md:px-14 py-8 md:py-12 border border-gray-800">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center border-b border-gray-700 pb-4">
            About Me
          </h1>

          {/* Basic Info */}
          <div className="mb-12 bg-black shadow-[0_0_6px_rgba(255,255,255,0.2)] rounded-xl p-5 sm:p-6 md:p-8 hover:shadow-[0_0_12px_rgba(255,255,255,0.35)] transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl text-orange-400 font-semibold mb-4">
              👨‍💻 Personal Info
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              <span className="text-white font-semibold">Name:</span> Vivek Shrivastava
            </p>
            <p className="text-base sm:text-lg text-gray-300">
              <span className="text-white font-semibold">Location:</span> Indore, Madhya Pradesh
            </p>
            <p className="text-base sm:text-lg text-gray-300">
              <span className="text-white font-semibold">Phone:</span> +91 8463029991
            </p>
            <p className="text-base sm:text-lg text-gray-300">
              <span className="text-white font-semibold">Email:</span>{" "}
              shrivastavavivek19d02005@gmail.com
            </p>
            <p className="text-base sm:text-lg text-gray-300 mt-2">
              <span className="text-white font-semibold">Links:</span>{" "}
              <a href="https://www.linkedin.com/in/vivek-shrivastava-5a88182bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-orange-400 hover:underline">LinkedIn</a> |{" "}
              <a href="https://github.com/Vivekshrivastava1912" className="text-orange-400 hover:underline">GitHub</a> |{" "}
              <a href="https://vivekportfolionetlify.netlify.app/" className="text-orange-400 hover:underline">Portfolio</a>
            </p>
          </div>

          {/* Summary */}
          <div className="mb-12 bg-black shadow-[0_0_6px_rgba(255,255,255,0.2)] rounded-xl p-5 sm:p-6 md:p-8 hover:shadow-[0_0_12px_rgba(255,255,255,0.35)] transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl text-orange-400 font-semibold mb-4">
              📝 Summary
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              Computer Science student with hands-on experience in MERN stack and
              strong skills in Data Structures and Algorithms (DSA). Proficient in
              building full-stack web apps with clean code and performance focus.
              Actively developing real-world projects to enhance skills in web
              development.
            </p>
          </div>

          {/* Projects */}
          <div className="mb-12 bg-black shadow-[0_0_6px_rgba(255,255,255,0.2)] rounded-xl p-5 sm:p-6 md:p-8 hover:shadow-[0_0_12px_rgba(255,255,255,0.35)] transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl text-orange-400 font-semibold mb-4">
              🚀 Projects
            </h2>
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Debug Challenger <span className="text-sm text-orange-400">(Live)</span>
              </h3>
              <p className="text-gray-300 text-base sm:text-lg">
                Tech Stack: HTML, CSS, JavaScript, React, Monaco Editor, Clerk
              </p>
              <ul className="list-disc list-inside text-gray-300 text-base sm:text-lg mt-2 space-y-1">
                <li>An interactive platform for practicing debugging skills.</li>
                <li>Helps fix syntax errors, logic bugs, runtime issues, and tricky edge cases with AI-powered hints.</li>
                <li>Includes time-bound challenges, difficulty levels, and topic filters.</li>
                <li>In-browser editor with run & submit, test cases, and detailed explanations.</li>
                <li>Progress tracking & performance analytics included.</li>
                <li>Responsive, accessible UI for smooth usage.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                CodeAnalyzer
              </h3>
              <p className="text-gray-300 text-base sm:text-lg">
                Tech Stack: Monaco Editor, React, API Integration
              </p>
              <ul className="list-disc list-inside text-gray-300 text-base sm:text-lg mt-2 space-y-1">
                <li>AI-powered tool to analyze source code complexity & performance bottlenecks.</li>
                <li>Shows time & space complexity with optimization tips.</li>
                <li>Real-time code parsing, syntax highlighting, and charts.</li>
                <li>Supports multiple languages with examples and visual flow.</li>
                <li>Export & share functionality for collaboration.</li>
                <li>Interactive algorithm execution visualization.</li>
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12 bg-black shadow-[0_0_6px_rgba(255,255,255,0.2)] rounded-xl p-5 sm:p-6 md:p-8 hover:shadow-[0_0_12px_rgba(255,255,255,0.35)] transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl text-orange-400 font-semibold mb-4">
              🛠️ Technical Skills
            </h2>
            <ul className="list-disc list-inside text-gray-300 text-base sm:text-lg space-y-2">
              <li><span className="text-white font-semibold">Languages:</span> C/C++, JavaScript</li>
              <li><span className="text-white font-semibold">Frontend:</span> ReactJs, JavaScript, HTML, CSS</li>
              <li><span className="text-white font-semibold">Database:</span> SQL</li>
              <li><span className="text-white font-semibold">Tools:</span> Postman, VSCode, GitHub</li>
              <li><span className="text-white font-semibold">Others:</span> Data Structures & Algorithms, OOPs</li>
            </ul>
          </div>

          {/* Education */}
          <div className="mb-12 bg-black shadow-[0_0_6px_rgba(255,255,255,0.2)] rounded-xl p-5 sm:p-6 md:p-8 hover:shadow-[0_0_12px_rgba(255,255,255,0.35)] transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl text-orange-400 font-semibold mb-4">
              🎓 Education
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              <span className="text-white font-semibold">
                Sushila Devi Bansal College Of Technology, Indore (2023–2027)
              </span>
              <br />
              B.Tech in Computer Science and Engineering
            </p>
          </div>

          {/* Footer */}
          <footer className="text-center text-xs sm:text-sm text-gray-500 border-t border-gray-700 pt-6">
            © 2025 Vivek Shrivastava | Built with ❤️ using React
          </footer>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Article;
