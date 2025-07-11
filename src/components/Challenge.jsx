// src/components/Challenge.jsx

import Apique from './Apique'
import Editor from './Editor'
import React,{ useState, useEffect, useRef } from 'react'; 


const Challenge = () => {
  const [userCode, setUserCode] = useState('')
  const [language, setLanguage] = useState('cpp')
  const [topic, setTopic] = useState('array')
  const [level, setLevel] = useState('easy')
  const [answer, setAnswer] = useState('// 🐞 Choose topic, language & level → Hit Generate to generate! 🛠️ ')
 const [time, setTime] = useState(0);         // time in milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);            // to store interval ID

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 100); // increase 100ms
      }, 100);
    } else {
      clearInterval(intervalRef.current); // stop interval
    }

    return () => clearInterval(intervalRef.current); // clean up
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);}
  return (<>


  
    <div className="flex bg-gray-400 h-screen overflow-hidden">
      <div className="w-1/2 p-4 m-2 bg-gray-800 rounded-2xl overflow-hidden">
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


      <div className="w-1/2 p-2 m-2 bg-gray-900 rounded-2xl h-screen ">
         
         
          <div className="p-2">
  <div className="flex items-center gap-3">
    <button
      onClick={handleStart}
      className="bg-black text-white text-sm px-3 py-1 rounded-lg shadow shadow-white"
    >
      Start
    </button>
    <button
      onClick={handlePause}
      className="bg-black text-white text-sm px-3 py-1 rounded-lg shadow shadow-white"
    >
      Pause
    </button>
    <button
      onClick={handleReset}
      className="bg-black text-white text-sm px-3 py-1 rounded-lg shadow shadow-white"
    >
      Reset
    </button>
    <h1 className="bg-black text-white text-base font-semibold px-4 py-1 rounded-lg shadow shadow-white">
      { (time / 1000).toFixed(1) } seconds
    </h1>
  </div>
</div><Editor language={language} code={userCode} />
        
      </div>
    </div></>
   
  )
}

export default Challenge