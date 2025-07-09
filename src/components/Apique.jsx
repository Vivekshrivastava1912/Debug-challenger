import { Editor } from '@monaco-editor/react'
import axios from 'axios'
import React from 'react'

const Apique = ({
  language,
  setLanguage,
  topic,
  setTopic,
  level,
  setLevel,
  answer,
  setAnswer,
  setUserCode  // receive setUserCode here
}) => {

  const validTopics = {
    array: "Array",
    stack: "Stack",
    queue: "Queue",
    "linked list": "Linked List",
    tree: "Tree",
    graph: "Graph",
    dp: "Dynamic Programming",
    sorting: "Sorting",
    searching: "Searching",
    recursion: "Recursion",
    greedy: "Greedy",
    backtracking: "Backtracking",
    "disjoint set": "Disjoint Set",
    trie: "Trie",
    heap: "Heap",
    "segment tree": "Segment Tree",
    "sliding window": "Sliding Window",
    "topological sort": "Topological Sort",
    "bit manipulation": "Bit Manipulation",
    hashing: "Hashing"
  }

  const generateAnswer = async () => {
    setAnswer("Loading...")

    const promptText = `You are a strict debugging code generator for a DSA-only system.

Rules to follow STRICTLY:

1. Accept and generate buggy code *ONLY IF* the input is a valid DSA topic or DSA-related question.
   ✅ Valid topics include: arrays, strings, linked list, stack, queue, tree, graph, sorting, searching, recursion, dynamic programming, greedy, backtracking, disjoint set, trie, segment tree, sliding window, topological sort, bit manipulation, heap, hashing, etc.

2. If the input is not clearly a valid DSA topic or question, then respond with exactly:
   Enter correct syntax

3. If the input is valid:
   - Start with exactly two plain lines (no symbols or formatting):
     Topic: ${validTopics[topic]}
     Language: ${language.charAt(0).toUpperCase() + language.slice(1)}
   - Below that, give a ${level} level buggy code snippet (around 10–25 lines).
   - Do NOT mention the language again anywhere in the output.

4. In the buggy code:
   - Mark ONLY the buggy line(s) with // bug at the end of the line.
   - DO NOT write what the bug is.
   - DO NOT add any explanation.

5. NEVER include code block markdown (like  or cpp or python).
   - No formatting. Just plain text.

6. DO NOT generate anything outside these rules. No greetings, no summaries, no assumptions.

Repeat:
- Non-DSA inputs = only show: Enter correct syntax
- Valid DSA input = 2-line header (topic + language) + plain buggy code with bug comment only.

Always follow this instruction 100% strictly.`

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDMaZHEWdWPQVs2vj49Zlg7ybah5Y9NMVQ",
        {
          contents: [
            {
              parts: [
                {
                  text: `Generate a ${level} level buggy code for ${topic} in ${language}\n\n${promptText}`
                }
              ]
            }
          ]
        }
      )

      const generatedText = response.data.candidates[0].content.parts[0].text;

      setAnswer(generatedText);
      setUserCode(generatedText);  // update userCode here too

    } catch (err) {
      console.error(err);
      setAnswer("Error generating response. Please try again.");
      setUserCode("Error generating response. Please try again.");
    }
  }

  return (
    <div className="h-170 rounded-2xl bg-gray-900 text-white flex flex-col p-6">
      <div className="text-2xl font-bold text-blue-400 mb-6">Debug Challenger</div>

      <div className="flex gap-4 mb-4">
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="text-bold bg-gray-700 rounded-2xl p-2"
        >
          {Object.entries(validTopics).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="text-bold bg-gray-700 rounded-2xl p-2"
        >
          <option value="cpp">C++</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="c">C</option>
        </select>

        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="text-bold bg-gray-700 rounded-2xl p-2"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button
          onClick={generateAnswer}
          className="text-bold bg-gray-700 rounded-2xl p-2"
        >
         Generate
        </button>
      </div>

      {/* Show answer as text maybe or remove */}
      {/*  */}
   <Editor   height="100%"
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


    </div>
  )
}

export default Apique;
