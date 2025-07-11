// src/components/Challenge.jsx

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

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 100);
      }, 100);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

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
            <div className="p-2">
              <div className="flex items-center gap-3">
                <button onClick={handleStart} className="bg-black text-white text-sm px-3 py-1 rounded-lg shadow shadow-white">Start</button>
                <button onClick={handlePause} className="bg-black text-white text-sm px-3 py-1 rounded-lg shadow shadow-white">Pause</button>
                <button onClick={handleReset} className="bg-black text-white text-sm px-3 py-1 rounded-lg shadow shadow-white">Reset</button>
                <h1 className="bg-black text-white text-base font-semibold px-4 py-1 rounded-lg shadow shadow-white">
                  {(time / 1000).toFixed(1)} seconds
                </h1>
              </div>
            </div>

            {/* User Editor */}
            <Editor language={language} code={userCode} />
          </div>
        </div>
      </SignedIn>
    </>
  );
};

export default Challenge;
