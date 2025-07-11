import React from 'react';
import MonacoEditor from '@monaco-editor/react';

const Editor = ({ language, code }) => {
  return (
    <div className="m-1 h-160 rounded-2xl overflow-hidden shadow-lg border bg-gray-700">
      <MonacoEditor className='m-2'
        height="70%"
        language={language}
        theme="vs-dark"
        value={code}
       
        onMount={(editor) => {
          const container = editor.getContainerDomNode();
          container.style.borderRadius = '16px';
          container.style.overflow = 'hidden';
        }}
      />


      <div className='h-20 rounded-2xl
      bg-gray-500 m-2 mt-1 p-5 '> I AM OUTPUT </div>
      <div className='h-18 rounded-2xl
      bg-gray-500 m-2 mt-1 p-3 '>result</div>
    </div>
   
  );
};

export default Editor;
