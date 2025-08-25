import React, { useState } from "react";
import axios from "axios";
import { useUser, SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';

const Quizepage = () => {
  const [mcqs, setMcqs] = useState([]);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [language, setLanguage] = useState("cpp");
  const [topic, setTopic] = useState("array");
  const [level, setLevel] = useState("easy");
  const [numQ, setNumQ] = useState(5);
  const [loading, setLoading] = useState(false);

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
    hashing: "Hashing",
  };

  const apiKey = "AIzaSyDMaZHEWdWPQVs2vj49Zlg7ybah5Y9NMVQ";
// mcqs ka desine ki vo kese dithenge
  const parseMCQs = (text) => {
    const blocks = text.split(/\n\n+/);
    return blocks.map((block, index) => {
      const lines = block.split("\n").filter(Boolean);
      const question = lines[0].replace(/^Q\d+\.\s*/, "");
      const options = lines.slice(1).map((line) => {
        const isCorrect = line.includes("✔");
        return {
          text: line.replace(/[A-D]\)\s*/, "").replace("✔", "").trim(),
          isCorrect,
        };
      });
      return { id: index + 1, question, options };
    });
  };

  const generateMCQ = async () => {
    if (numQ > 50) {
      alert("Number of questions cannot be more than 50!");
      return;
    }

    setLoading(true);
    setResult(null);
    setAnswers({});
    setMcqs([]);

    const prompt1 = `
Generate ${numQ} multiple-choice questions for topic: ${validTopics[topic]}.
Level: ${level}.
Language context (if needed): ${language}.

Instructions:
- Each question must have 4 options (A, B, C, D).
- Mark the correct answer with (✔).
- Do NOT explain, just give plain text.
- Strict format:

Q1. Question text
A) option1
B) option2
C) option3
D) option4 ✔

Q2. Question text
...
`;

    try {
      const res1 = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          contents: [{ parts: [{ text: prompt1 }] }],
        }
      );

      const mcqText = res1.data.candidates[0].content.parts[0].text.trim();
      const parsed = parseMCQs(mcqText);
      setMcqs(parsed);
    } catch (err) {
      console.error(err);
      alert("Error generating MCQs");
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (qid, idx) => {
    setAnswers({ ...answers, [qid]: idx });
  };

  const checkResult = () => {
    let correct = 0,
      wrong = 0;
    mcqs.forEach((mcq) => {
      const userAns = answers[mcq.id];
      if (userAns !== undefined) {
        if (mcq.options[userAns].isCorrect) correct++;
        else wrong++;
      }
    });
    setResult({ correct, wrong });
  };

  return (<>
   <SignedOut>
          <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-lg">
            <p>You must sign in to access this feature.</p>
            <SignInButton mode="modal">
              <button className="mt-4 bg-white text-black px-4 py-2 rounded-md">Sign In</button>
            </SignInButton>
          </div>
        </SignedOut>
  
        <SignedIn></SignedIn>
    <div className="min-h-screen bg-black  text-white rounded-lg lg:flex ">
      {/* Left 70% MCQ Section */}
      <div className=" lg:w-[100%] lg:bg-black  rounded-lg p-6 m-4 ">
      

        {/* Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold">Topic</label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="bg-gray-700 text-white p-2 rounded-lg focus:ring-2 focus:ring-orange-400"
            >
              {Object.keys(validTopics).map((key) => (
                <option key={key} value={key}>
                  {validTopics[key]}
                </option>

              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold">Level</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="bg-gray-700 text-white p-2 rounded-lg focus:ring-2 focus:ring-orange-400"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold">
              Number of Questions
            </label>
            <input
              type="number"
              value={numQ}
              min="1"
              max="50"
              onChange={(e) => setNumQ(Number(e.target.value))}
              className="bg-gray-700 text-white p-2 rounded-lg focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        <button
          onClick={generateMCQ}
          className="w-full bg-orange-500 hover:bg-orange-600 transition px-4 py-3 rounded-lg font-semibold text-lg shadow-md"
        >
          {loading ? "Generating..." : "Generate MCQs"}
        </button>

        {/* MCQs */}
        <div className="mt-6 space-y-6">
          {mcqs.map((mcq) => (
            <div
              key={mcq.id}
              className="bg-black shadow-[1px_0_3px_#ffffff] rounded-lg p-3 m-4 hover:scale-[1.01] transition hover: "
            >
              <p className="font-semibold mb-3">
                Q{mcq.id}. {mcq.question}
              </p>
              <div className="space-y-2">
                {mcq.options.map((opt, idx) => {
                  const isSelected = answers[mcq.id] === idx;
                  const isCorrect = result && opt.isCorrect;
                  const isWrong =
                    result && isSelected && !opt.isCorrect;

                  return (
                    <label
                      key={idx}
                      className={`flex items-center space-x-2 cursor-pointer p-1 rounded ${
                        isCorrect
                          ? "text-green-400 font-semibold"
                          : isWrong
                          ? "text-red-500 font-semibold"
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name={`q-${mcq.id}`}
                        checked={isSelected}
                        onChange={() => handleAnswer(mcq.id, idx)}
                      />
                      <span>{opt.text}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {mcqs.length > 0 && (
          <button
            onClick={checkResult}
            className="w-full mt-6 bg-orange-500 hover:bg-green-700 transition px-4 py-3 rounded-lg font-semibold text-lg shadow-md"
          >
            Check Result
          </button>
        )}
      </div>

    {/* Right 30% Result Section */}
<div className="lg:w-[35%]  lg:h-160   flex flex-col justify-between bg-black shadow-[1px_0_3px_#ffffff] rounded-lg p-3 m-4">
  <h3 className="text-3xl font-extrabold mb-6 text-center text-orange-400 drop-shadow-lg">
    📊 Quiz Result
  </h3>

  {/* Stats */}
  <div className="grid grid-cols-2 gap-4">
    {/* Correct */}
    <div className="flex flex-col items-center bg-black shadow-[1px_0_3px_#ffffff] rounded-lg p-5  hover:scale-[1.05] transition">
      <span className="text-4xl mb-2">✅</span>
      <p className="text-lg font-semibold text-white">Correct</p>
      <p className="text-2xl font-bold text-green-400 mt-1">
        {result ? result.correct : 0}
      </p>
    </div>

    {/* Wrong */}
    <div className="flex flex-col items-center  p-5 bg-black shadow-[1px_0_3px_#ffffff] rounded-lg hover:scale-[1.05] transition">
      <span className="text-4xl mb-2">❌</span>
      <p className="text-lg font-semibold text-white">Wrong</p>
      <p className="text-2xl font-bold text-red-400 mt-1">
        {result ? result.wrong : 0}
      </p>
    </div>
  </div>

  {/* Feedback */}
  <div className="flex flex-col items-center justify-center  p-6 my-6 bg-black shadow-[1px_0_3px_#ffffff] rounded-lg hover:scale-[1.03] transition text-center">
    <span className="text-4xl text-yellow-400 mb-2">💬</span>
    <p className="text-xl font-bold text-white">Feedback</p>
    <p className="text-sm text-gray-300 mt-2">
      {(() => {
        if (!result) return "No quiz attempted yet.";
        const total = result.correct + result.wrong;
        if (total === 0) return "No quiz attempted yet.";
        const percentage = (result.correct / total) * 100;
        if (percentage <= 30) return "😢 Need more practice!";
        if (percentage <= 60) return "🙂 Good, keep going!";
        return "🎉 Excellent work!";
      })()}
    </p>
  </div>

  {/* Percentage with Progress Bar */}
  <div className="flex flex-col items-center  p-6 bg-black shadow-[1px_0_3px_#ffffff] rounded-lg hover:scale-[1.03] transition">
    <span className="text-4xl text-blue-400 mb-2">📈</span>
    <p className="text-xl font-bold text-white">Percentage</p>

    {/* Dynamic % */}
    <p className="text-2xl text-blue-300 font-bold mt-2">
      {(() => {
        if (!result) return "0%";
        const total = result.correct + result.wrong;
        if (total === 0) return "0%";
        return ((result.correct / total) * 100).toFixed(2) + "%";
      })()}
    </p>

    {/* Progress Bar */}
    <div className="w-full bg-gray-700 h-3 mt-3 rounded-full overflow-hidden">
      <div
        className="h-3 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 transition-all duration-700"
        style={{
          width: result
            ? `${((result.correct /
                (result.correct + result.wrong || 1)) *
                100).toFixed(2)}%`
            : "0%",
        }}
      ></div>
    </div>
  </div>
</div>

    </div>
    </>
  );
};

export default Quizepage;
