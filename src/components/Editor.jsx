import React from 'react';
import MonacoEditor from '@monaco-editor/react';

const Editor = ({ language, code }) => {
  return (
    <div className="m-1 h-160 rounded-2xl overflow-hidden shadow-lg border bg-black shadow-[1PX_0_3px_#ffffff]">
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


      <div className='h-25 rounded-2xl
      bg-black shadow-[1PX_0_3px_#ffffff] m-2 mt-1 p-5 text-white '> I AM OUTPUT </div>
      <div className='h-18 rounded-2xl
      bg-black shadow-[1PX_0_3px_#ffffff] m-2 mt-1 p-3 text-white text-2xl'>result</div>
    </div>
   
  );
};

export default Editor;