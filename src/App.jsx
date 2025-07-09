import React, { useState } from 'react';
import Apique from './components/Apique';
import Editor from './components/Editor';

const App = () => {
  const [userCode, setUserCode] = useState('');
  const [language, setLanguage] = useState("cpp"); 
  const [topic, setTopic] = useState("array");
  const [level, setLevel] = useState("easy");
  const [answer, setAnswer] = useState("// 🐞 Choose topic, language & level → Hit Generate to generate! 🛠️ ");

  return (
    <div className="flex bg-gray-400 h-screen">
      <div className="w-1/2 p-4 m-2 bg-gray-800 rounded-2xl overflow-auto">
        {/* pass setUserCode */}
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
      <div className="w-1/2  p-3 m-2 bg-gray-800 rounded-2xl overflow-auto">
        {/* show userCode here */}
        <Editor language={language} code={userCode} />
      </div>
    </div>
  );
};

export default App;
