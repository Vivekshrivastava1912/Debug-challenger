import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 m-5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Project Info */}
        <div>
          <h2 className="text-orange-500 font-bold text-lg mb-4">Debug Challenger</h2>
          <p>Welcome to your all-in-one platform where debugging meets mastery.
Whether you're a beginner exploring your first bug or an experienced developer polishing your skills, this hub is made for you.
Dive deep into real-world debugging problems inspired by actual developer challenges.
Explore DSA topics not just theoretically, but through interactive and buggy code practice.
From arrays and linked lists to graphs and dynamic programming — every concept is covered.

The live timer adds a competitive flavor to boost your coding speed and confidence.
Each bug you fix brings you closer to real-world software problem solving.
Level up with structured challenges across topics and difficulty levels.
Our modern tech stack includes Clerk for auth, Spline for UI, Monaco Editor, Tailwind, and Vite.

</p>
        </div>

        {/* Debugging Topics */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-3">Debugging Topics</h3>
          <ul className="space-y-2 text-sm">
           <li>Array Index Out of Bounds</li>
<li>Off-by-One Errors</li>
<li>Uninitialized Variables</li>
<li>Infinite Loops in Recursion</li>
<li>Incorrect Base Case in Recursion</li>
<li>Stack Overflow Errors</li>
<li>Wrong Loop Conditions</li>
<li>Incorrect Sorting Output</li>
<li>Binary Search Edge Cases</li>
<li>Two Pointer Misplacement</li>
<li>Wrong Tree Traversal Logic</li>
<li>Null Pointer in Linked List</li>
<li>Cycle Detection Failures</li>
<li>Incorrect Graph Traversal (BFS/DFS)</li>
<li>DP Memoization Bug</li>
<li>Incorrect Prefix Sum Calculation</li>
<li>Improper HashMap Usage</li>
<li>Priority Queue Misordering</li>
<li>Incorrect Sliding Window Implementation</li>
<li>Segment Tree Index Bug</li>

          </ul>
        </div>

        {/* DSA Topics */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-3">DSA Topics</h3>
          <ul className="space-y-2 text-sm">
          <li>Arrays & Strings</li>
<li>Linked Lists</li>
<li>Trees & Graphs</li>
<li>Recursion</li>
<li>Dynamic Programming</li>
<li>Stack & Queue</li>
<li>HashMap & HashSet</li>
<li>Binary Search</li>
<li>Two Pointer Technique</li>
<li>Sliding Window</li>
<li>Greedy Algorithms</li>
<li>Backtracking</li>
<li>Bit Manipulation</li>
<li>Heap & Priority Queue</li>
<li>Trie</li>
<li>Disjoint Set Union (DSU)</li>
<li>Segment Tree</li>
<li>Topological Sort</li>
<li>Graph Algorithms (BFS/DFS)</li>
<li>Prefix Sum & Difference Arrays</li>

          </ul>
        </div>

        {/* Developer Tools */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-3">Developer Tools</h3>
          <ul className="space-y-2 text-sm">
           <li>React.js</li>
<li>Vite</li>
<li>Tailwind CSS</li>
<li>Clerk Authentication</li>
<li>Monaco Editor</li>
<li>Google Gemini API</li>
<li>Axios</li>
<li>Spline 3D</li>
<li>Git</li>
<li>GitHub</li>
<li>VS Code</li>
<li>Terminal / Shell</li>
<li>React Hooks</li>
<li>Linting & Formatting (Prettier / ESLint)</li>
<li>React Router (if used)</li>
<li>Custom Prompt Engineering</li>
<li>Responsive Design</li>
<li>Dark Mode UI</li>
<li>JavaScript (ES6+)</li>
<li>LocalStorage / useState for state management</li>

          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center mt-10 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Debug Challenger. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;