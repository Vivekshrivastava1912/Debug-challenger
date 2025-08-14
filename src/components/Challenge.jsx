import React, { useState, useEffect, useRef } from 'react';
import { useUser, SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';

import Apique from './Apique';
import Editor from './Editor';
import Footer from './Footer';

const Challenge = () => {
  const { isLoaded } = useUser();

  const [userCode, setUserCode] = useState('');
  const [language, setLanguage] = useState('cpp');
  const [topic, setTopic] = useState('array');
  const [level, setLevel] = useState('easy');
  const [answer, setAnswer] = useState('// 🔞 Choose topic, language & level → Hit Generate to generate! 🛠️');

  const [time, setTime] = useState(240000); // 4 minutes in milliseconds
  const intervalRef = useRef(null);

  const startTimer = () => {
    setTime(240000); // Reset to 4 minutes
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1000) {
          clearInterval(intervalRef.current);
          window.location.reload(); // Reload page when time ends
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);
  };

  // Automatically start timer when a valid answer is generated
  useEffect(() => {
    if (answer && !answer.includes("Choose topic")) {
      startTimer();
    }
    return () => clearInterval(intervalRef.current);
  }, [answer]);

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
        <div className="sm:flex sm:h-182 bg-black overflow-hidden flex-col sm:flex-row p-3  mb-2 gap-2">
          {/* Left Panel - Code Generator */}
          <div className="sm:w-1/2 sm:h-175 sm:p-1 sm:m-2 bg-black rounded-2xl w-full h-150 p-1 mb-2">
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
          <div className="sm:w-1/2 sm:h-175 sm:p-1 sm:m-2 bg-black rounded-2xl w-full bg-black shadow-[1px_0_3px_#ffffff] p-1">
            {/* Timer Display */}
            <div className="p-2">
              <div className="flex items-center gap-3">
                   <h1 className="bg-orange-400 text-black text-base font-semibold px-4 py-1 rounded-lg shadow shadow-black">
  {`${String(Math.floor(time / 60000)).padStart(2, '0')}:${String(Math.floor((time % 60000) / 1000)).padStart(2, '0')}`} min
</h1>

              </div>
            </div>

            {/* User Editor */}
            <Editor language={language} code={userCode} />
          </div>
        </div>
      </SignedIn>

      <Footer />
    </>
  );
};

export default Challenge;
