import React, { useState } from "react";
import axios from "axios";
import { useUser, SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
const Aabhi = () => {
  const [topic, setTopic] = useState("html");
  const [level, setLevel] = useState("easy");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [feed, setFeed] = useState("");
  const [hints, setHints] = useState([]);
  const [hintCount, setHintCount] = useState(0);
  const [percentage, setPercentage] = useState(null);

  const apiKey = "AIzaSyDMaZHEWdWPQVs2vj49Zlg7ybah5Y9NMVQ";

  const validTopics = {
    html: "HTML",
    css: "CSS",
    js: "JavaScript",
    ts: "TypeScript",
    react: "React",
    "react native": "React Native",
    "next js": "Next.js",
    "node js": "Node.js",
    express: "Express.js",
    bootstrap: "Bootstrap",
    tailwind: "Tailwind CSS",
    sql: "SQL",
    mongodb: "MongoDB",
    firebase: "Firebase",
    php: "PHP",
    python: "Python (Django/Flask)",
    java: "Java (Spring)",
    git: "Git & GitHub",
    docker: "Docker",
    aws: "AWS",
  };

  const generateQ = async () => {
    setLoading(true);

    const prompt1 = `
      Generate one interview question on topic ${validTopics[topic]}.
      Level: ${level}.
      Along with it, generate exactly 3 helpful hints for the candidate.
      Format strictly like this:
      Question: ...
      Hint 1: ...
      Hint 2: ...
      Hint 3: ...
    `;

    try {
      const res1 = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          contents: [{ parts: [{ text: prompt1 }] }],
        }
      );

      const raw = res1.data.candidates[0].content.parts[0].text.trim();

      // extract question and hints
      const qMatch = raw.match(/Question:\s*(.*)/);
      const h1 = raw.match(/Hint 1:\s*(.*)/);
      const h2 = raw.match(/Hint 2:\s*(.*)/);
      const h3 = raw.match(/Hint 3:\s*(.*)/);

      setQuestion(qMatch ? qMatch[1] : "Question not found");
      setHints([h1?.[1] || "", h2?.[1] || "", h3?.[1] || ""]);
      setHintCount(0);
      setFeed("");
      setPercentage(null);
    } catch (err) {
      console.error(err);
      alert("Network issue");
    } finally {
      setLoading(false);
    }
  };

  const generateA = async () => {
    setLoading(true);

    const prompt2 = ` You are an experienced technical interviewer.
Evaluate the candidate's answer to the given interview question.
Always return feedback in two sections only:

1. ✅ What was good in the answer (list up to 5 short bullet points; if nothing is good, write “No valid points provided”).
2. ⚠️ What could be improved (list up to 5 short bullet points; if the answer is irrelevant or blank, clearly state that).

Also, give a correctness percentage (0 to 100) at the end in this format:
"Overall Score: X%"

Question: ${question}
User Answer: ${answer}
select tech : ${topic}
level : ${level}
     `;

    try {
      const res2 = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          contents: [{ parts: [{ text: prompt2 }] }],
        }
      );

      const A = res2.data.candidates[0].content.parts[0].text.trim();
      setFeed(A.replace(/\n/g, "<br/>"));

      const match = A.match(/Overall Score:\s*(\d+)%/);
      if (match) {
        setPercentage(parseInt(match[1]));
      }
    } catch (err) {
      console.error(err);
      alert("Network issue");
    } finally {
      setLoading(false);
    }
  };

  const showNextHint = () => {
    if (hintCount < 3) {
      setHintCount(hintCount + 1);
    } else {
      alert("⚠️ No more hints available");
    }
  };

  return (
   <> 
     <SignedOut>
          <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-lg">
            <p>You must sign in to access this feature.</p>
            <SignInButton mode="modal">
              <button className="mt-4 bg-white text-black px-4 py-2 rounded-md">Sign In</button>
            </SignInButton>
          </div>
        </SignedOut>
  
        <SignedIn></SignedIn> 
   
   <div className="min-h-screen min-w-screen bg-black text-white rounded-lg lg:flex">
      {/* Left Section */}
      <div className="lg:w-[100%] lg:bg-black rounded-lg  m-2">
        <div className="lg:w-[100%]  rounded-lg ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="flex flex-col m-2">
              <label className="m-2 text-sm font-semibold">Select Tech</label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="bg-gray-800 text-white p-2 rounded-lg focus:ring-2 focus:ring-orange-400"
              >
                {Object.keys(validTopics).map((key) => (
                  <option key={key} value={key}>
                    {validTopics[key]}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col m-2">
              <label className="m-2 text-sm font-semibold">Level</label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="bg-gray-800 text-white p-2 rounded-lg focus:ring-2 focus:ring-orange-400"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>

          <button
            onClick={generateQ}
            className="lg:w-250 bg-orange-500 hover:bg-orange-600 transition p-2 rounded-lg font-semibold text-lg shadow-md m-2"
          >
            {loading ? "Generate Question" : "Generate Question"}
          </button>

          {question && (
            <>
              <div className="mt-6 p-4  lg:w-250 bg-black shadow-[1px_0_3px_#ffffff] m-2">
                <h2 className="text-xl font-bold text-orange-400 mb-2">
                  Question:-
                </h2>
                <p className="text-lg">{question}</p>
              </div>

              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Write your answer here..."
                className="lg:w-250 w-85 sm:w-140 h-60 bg-gray-800 rounded-lg transition px-4 py-3 m-2 font-semibold text-lg shadow-md text-white resize-none"
              ></textarea>

              <div className="flex gap-2 m-1">
                 <button
                  onClick={showNextHint}
                  className=" bg-red-600 hover:bg-red-600 transition p-1 px-2 rounded-lg font-semibold text-lg shadow-md m-2"
                >
                   Hint
                </button>
                <button
                  onClick={generateA}
                  className=" bg-green-500 hover:bg-green-600 transition p-1 rounded-lg font-semibold text-lg shadow-md m-2"
                >
                  {loading ? "Checking..." : "Check My Answer"}
                </button>

               
              </div>
            </>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-[35%] lg:h-160 flex flex-col justify-start bg-black shadow-[1px_0_3px_#ffffff] rounded-lg p-3 m-3 overflow-y-auto">
        <h3 className="text-3xl font-extrabold text-center text-orange-400 drop-shadow-lg">
          📊 Review
        </h3>

         {/* Percentage Bar */}
        {percentage !== null && (
          <div className="mt-4">
            <p className="text-center text-lg font-bold">Score: {percentage}%</p>
            <div className="w-full bg-gray-700  rounded-full h-4">
              <div
                className="bg-green-500 h-4 rounded-full"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
        )}

{/* Feedback Section */}
{feed?.trim() ? (
  <div
    className="bg-gray-900 shadow-[1px_0_3px_#ffffff] rounded-lg p-3 mt-3 text-sm leading-relaxed"
    dangerouslySetInnerHTML={{ __html: feed }}
  ></div>
) : (
 <div >
   
  </div>
)}

{/* Hints Section */}
{hintCount > 0 ? (
  <div className="my-3">
    <h4 className="font-bold text-yellow-400 mb-2">💡 Hints:</h4>
    <div className="flex flex-col gap-3 ">
      {hints.slice(0, hintCount).map((h, i) => (
        <div
          key={i}
          className="bg-gray-900 rounded-lg p-3 shadow-md"
        >
          <h5 className="font-semibold text-blue-400 mb-1">Hint {i + 1}</h5>
          <p className="text-sm">{h}</p>
        </div>
      ))}
    </div>
  </div>
) : (
   <div className="bg-gray-950 rounded-lg p-3 shadow-md p-5 mt-3 text-sm text-gray-300 space-y-2">
    <h4 className="font-bold text-yellow-400 mb-2">💡 Tips:</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>Start with a clear and concise answer.</li>
      <li>Use correct  tags and proper nesting.</li>
      <li>Write explanations in simple, easy-to-read sentences.</li>
     
      <li>Always double-check for completeness and accuracy.</li>
      <li>Include a small, relevant code snippet to illustrate your point.</li>
<li>Use semantic HTML and mention accessibility (alt text, labels, ARIA) when relevant.</li>
<li>Keep your answer tightly scoped to the question; avoid unrelated details.</li>
<li>Call out common pitfalls or edge cases and how to avoid them.</li>
<li>End with a one-line recap to reinforce the key idea.</li>
<li>Structure your answer with headings or bullet points for clarity.</li>
<li>Relate your explanation to real-world use cases when possible.</li>

    </ul>
  </div>
)}



      </div>
    </div></>
  );
};

export default Aabhi;
