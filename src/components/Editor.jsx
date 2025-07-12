import React, { useState, useEffect } from 'react';
import MonacoEditor from '@monaco-editor/react';
import axios from 'axios';

const Editor = ({ language, code }) => {
  const [output, setOutput] = useState("Output...");
  const [editedCode, setEditedCode] = useState(code);
  const [isLoading, setIsLoading] = useState(false);
  const [resultMessage, setResultMessage] = useState("click on submit");

  const apiKey = "AIzaSyDMaZHEWdWPQVs2vj49Zlg7ybah5Y9NMVQ";

  useEffect(() => {
    setEditedCode(code);
  }, [code]);

  const getOutput = async () => {
    if (!editedCode || editedCode.includes("Enter correct syntax")) {
      setOutput("Invalid code or topic.");
      return;
    }

    const prompt = `Niche ek C++ code diya gaya hai. Aapko sirf aur sirf uska output batana hai, neeche diye gaye rules ke hisaab se.

--------------- RULES FOR RESPONSE ONLY ---------------

1️⃣ Agar code mein koi 'syntax error' ho (jaise):
   - koi bracket missing ho ( '(', ')', '{', '}' )
   - ';' semicolon na ho
   - koi galat keyword ho (jaise 'intt', 'retrun')
   - ya code compile hi nahi hoga

   ➤ To sirf output dena: 'syntax error'

   ⚠️ Koi explanation, reason, ya code mat likhna.

   🔁 Example:
   'cpp
   #include <iostream>
   using namespace std;

   int main() {
       cout << "Hello";
       return 0;
     )
   '
   ✅ Output: 'syntax error'

2️⃣ Agar code mein 'syntax error' nahi hai,
   ⚠️ Koi bhi extra line, description, ya explanation mat likhna.

   🔁 Example:
   'cpp
   #include <iostream>
   using namespace std;

   int main() {
       cout << "Hello World";
       return 0;
   }
   '
   ✅ Output: 'Hello World'

--------------------------------------------------------
user se input need hoto kud hi input apne hisab se le lena out out put de dena
Ab neeche wale code ka upar diye gaye rules ke anusaar code ka output batayein:

${editedCode}`;

    try {
      setIsLoading(true);
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          contents: [{ parts: [{ text: prompt }] }]
        }
      );

      const result = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
      setOutput(result || "❌ Gemini didn't return any output.");
    } catch (err) {
      console.error("Error fetching output from Gemini:", err);
      setOutput("❌ Error getting output from Gemini.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = () => {
    if (!editedCode || editedCode.trim() === "") {
      setResultMessage("Please write code.");
      return;
    }

    if (
      output &&
      output !== "please resolve bug" &&
      output !== "❌ Error getting output from Gemini." &&
      !output.toLowerCase().includes("error")
    ) {
      setResultMessage("🎉 Congratulations! You solved bug successfully.");
    } else {
      setResultMessage("Please continue debugging.");
    }

    // Reset message after 3 seconds
    setTimeout(() => {
      setResultMessage("click on submit");
    }, 3000);
  };

  return (
    <div className="m-1 h-160 rounded-2xl overflow-hidden shadow-lg border bg-black shadow-[1px_0_3px_#ffffff]">
      <div className="flex flex-row gap-2 m-2">
        <button
          onClick={getOutput}
          className="bg-black text-white px-4 py-2 rounded-xl shadow-[0_0_5px_#ffffff] text-sm"
        >
          ▶ Run
        </button>
        <button
          onClick={handleSubmit}
          className="bg-black text-white px-4 py-2 rounded-xl shadow-[0_0_5px_#ffffff] text-sm"
        >
          ✅ Submit
        </button>
      </div>

      <MonacoEditor
        className="m-2"
        height="60%"
        language={language}
        theme="vs-dark"
        value={editedCode}
        onChange={(value) => setEditedCode(value)}
        options={{ readOnly: false, minimap: { enabled: false } }}
        onMount={(editor) => {
          const container = editor.getContainerDomNode();
          container.style.borderRadius = '16px';
          container.style.overflow = 'hidden';
        }}
      />

      <div className="h-25 rounded-2xl bg-black shadow-[1px_0_3px_#ffffff] m-2 mt-1 p-5 text-white whitespace-pre-wrap overflow-auto">
        {isLoading ? "⏳ Running..." : output}
      </div>

      <div className="h-18 rounded-2xl bg-black shadow-[1px_0_3px_#ffffff] m-2 mt-1 p-3 text-white text-2xl">
        Result -: {resultMessage}
      </div>
    </div>
  );
};

export default Editor;
