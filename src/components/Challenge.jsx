import React, { useState, useEffect, useRef } from 'react';
import { useUser, SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';

import Apique from './Apique';
import Editor from './Editor';

const Challenge = () => {
  const { isLoaded } = useUser();

  const [userCode, setUserCode] = useState('');
  const [language, setLanguage] = useState('cpp');
  const [topic, setTopic] = useState('array');
  const [level, setLevel] = useState('easy');
  const [answer, setAnswer] = useState('// 🐞 Choose topic, language & level → Hit Generate to generate! 🛠️');

  const [time, setTime] = useState(240000); // 4 minutes in ms
  const intervalRef = useRef(null);

  const startTimer = () => {
    setTime(240000); // Reset to 4 minutes
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1000) {
          clearInterval(intervalRef.current);
          window.location.reload(); // reload page when time ends
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  if (!isLoaded) return <div className="text-white p-4">Loading user info...</div>;

  return (
    <>
      <SignedOut>
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-lg">
          <p>You must sign in to access the Challenge.</p>
          <SignInButton mode="modal">
            <button className="mt-4 bg-white text-black px-4 py-2 rounded-md">Sign In</button>
          </SignInButton>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="flex bg-black h-screen overflow-hidden">
          {/* Left Panel - Code Generator */}
          <div className="w-1/2 p-2 bg-black rounded-2xl overflow-hidden">
            <Apique
              language={language}
              setLanguage={setLanguage}
              topic={topic}
              setTopic={setTopic}
              level={level}
              setLevel={setLevel}
              answer={answer}
              setAnswer={setAnswer}
              setUserCode={setUserCode}
            />
          </div>

          {/* Right Panel - Timer + Editor */}
          <div className="w-1/2 p-4 m-2 ml-2 bg-black shadow-[1px_0_3px_#ffffff] rounded-2xl overflow-hidden">
            {/* Timer Section */}
            <div className="p-2">
              <div className="flex items-center gap-4">
                <button
                  onClick={startTimer}
                  className="bg-black text-white text-sm px-4 py-2 rounded-lg shadow shadow-white"
                >
                  ▶ Start Timer
                </button>
                <h1 className="bg-orange-400 text-black text-base font-semibold px-4 py-1 rounded-lg shadow shadow-black">
                  {`${String(Math.floor(time / 60000)).padStart(2, '0')}:${String(Math.floor((time % 60000) / 1000)).padStart(2, '0')}`} min
                </h1>
              </div>
            </div>

            {/* Code Editor */}
            <Editor language={language} code={userCode} />
          </div>
        </div>
      </SignedIn>
    </>
  );
};

export default Challenge;
