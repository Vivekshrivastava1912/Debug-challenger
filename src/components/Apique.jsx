import { Editor } from '@monaco-editor/react';
import axios from 'axios';
import React, { useState } from 'react';

const Apique = ({ language, setLanguage, topic, setTopic, level, setLevel, answer, setAnswer, setUserCode }) => {
  const [output, setOutput] = useState('');

  const validTopics = {
    array: "Array", stack: "Stack", queue: "Queue", "linked list": "Linked List",
    tree: "Tree", graph: "Graph", dp: "Dynamic Programming", sorting: "Sorting",
    searching: "Searching", recursion: "Recursion", greedy: "Greedy",
    backtracking: "Backtracking", "disjoint set": "Disjoint Set", trie: "Trie",
    heap: "Heap", "segment tree": "Segment Tree", "sliding window": "Sliding Window",
    "topological sort": "Topological Sort", "bit manipulation": "Bit Manipulation",
    hashing: "Hashing"
  };

  const apiKey = "AIzaSyDMaZHEWdWPQVs2vj49Zlg7ybah5Y9NMVQ";

  const generateAnswer = async () => {
    setAnswer("Loading...");
    setOutput("Waiting for output...");

    const prompt1 = `
You are a strict debugging code generator for DSA problems.

Generate a ${level} level buggy code in ${language} for topic: ${validTopics[topic]}.

Instructions:
- First line: Topic: ${validTopics[topic]}
- Second line: Language: ${language}
- Then give only the buggy code (10–25 lines)
- Mark ONLY the buggy lines with: // bug
- Do NOT explain the bug. Do NOT give description.
- Do NOT use markdown or formatting. Just plain text.
`;

    try {
      // First API Call - get buggy code
      const res1 = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          contents: [{ parts: [{ text: prompt1 }] }]
        }
      );

      const buggyCode = res1.data.candidates[0].content.parts[0].text.trim();
      setAnswer(buggyCode);
      setUserCode(buggyCode);

      // Second API Call - get output of fixed code
      const prompt2 = `Fix the following ${language} code and return only the expected output after running the corrected code. No explanation, no code, just output.

${buggyCode}`;

      const res2 = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          contents: [{ parts: [{ text: prompt2 }] }]
        }
      );

      const finalOutput = res2.data.candidates[0].content.parts[0].text.trim();
      setOutput(finalOutput);
    } catch (err) {
      console.error("Gemini API Error:", err);
      setAnswer("Error generating buggy code.");
      setOutput("Error getting output from Gemini.");
    }
  };

  return (
    <div className="h-full w-full overflow-hidden rounded-2xl bg-black shadow-[1px_0_3px_#ffffff] text-white flex flex-col p-6">
      <div className="text-2xl font-bold mb-6">Debug Challenger</div>

      <div className="sm:flex sm:gap-4 sm:mb-4 gap-4   ">
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="bg-gray-700 rounded-2xl p-2 m-2"
        >
          {Object.entries(validTopics).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-gray-700 rounded-2xl p-2 m-2"
        >
          <option value="cpp">C++</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="c">C</option>
        </select>

        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="bg-gray-700 rounded-2xl p-2 m-2"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button
          onClick={generateAnswer}
          className="bg-gray-700 rounded-2xl p-2 m-2"
        >
          Generate
        </button>
      </div>

      {/* Buggy Code Editor */}
      <Editor
        height="100%"
        language={language}
        theme="vs-dark"
        value={answer}
        options={{ readOnly: true, minimap: { enabled: false } }}
        onMount={(editor) => {
          const container = editor.getContainerDomNode();
          container.style.borderRadius = '16px';
          container.style.overflow = 'hidden';
        }}
      />

      {/* Output Box */}
      
    </div>
  );
};

export default Apique;
