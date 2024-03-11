import React, { useState } from 'react'

export function ParaGenerator() {
    const [numofWords, setNumofWords] = useState("");
    const [gentype, setGentype] = useState("");
    const [text, setText] = useState("");

    const handlenumofWords = (e) => {
        setNumofWords(e.target.value);
    };

    const handlegentype = (e) => {
        setGentype(e.target.value);
    };

    const getWord = () => {
        let chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        let word = "";

        for (let i = 0; i<Math.floor(Math.random()*10)+2; i++) {
            word += chars[Math.floor(Math.random()*26)];
        }

        return word;
    };

    const generateWords = (count) => {
        let words = "";
        for(let i=0; i<count; i++) {
            words += i===count-1 ? getWord() : getWord() + " ";
        }
        return words;
    };

    const generateSentence = (count) => {
        let sentence = "";
        for(let i=0; i<count; i++){
            sentence += " " + generateWords(Math.floor(Math.random()*10) + 3) + ".";
        }
        return sentence;
    };

    const generatePara = (count) => {
        let paragraphs = "";
        for(let i=0; i<count; i++) {
            paragraphs += generateSentence(Math.floor(Math.random()*10) + 2);
            paragraphs += "\n\n";
        }
        return paragraphs;
    };

    const generate = () => {
        let generateText = "";
        if (gentype === "paragraphs") {
            generateText = generatePara(numofWords);
        } else if (gentype === "sentences") {
            generateText = generateSentence(numofWords);
        } else if (gentype === "words") {
            generateText = generateWords(numofWords);
        }
        setText(generateText);
    };

  return (
    <div>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-xl font-bold m-7'>Text Generator</h1>
            <div className='flex flex-col items-center w-5/6 p-2'>
                <div className='flex flex-row gap-1'>
                    <input
                     type='number'
                     placeholder='Enter number of required LoremEpson'
                     onChange={handlenumofWords}
                     className='justify-center text-center border-2 border-gray-300 rounded p-2'
                     />
                     <select value={gentype}
                     onChange={handlegentype} 
                     className='border-2 border-gray-300 rounded-md p-2 mr-1'>
                        <option value="">Select Generator</option>
                        <option value="words">Words</option>
                        <option value="sentences">Sentences</option>
                        <option value="paragraphs">Paragraphs</option>

                     </select>
                     <button onClick={generate} className='bg-blue-500 text-white p-1 rounded-md'>Generate</button>
                </div>
            </div>
            <div className={`mt-8 w-5/6 p-4 ${text ? 'border border-gray0-500 rounded' : ''} overflow-auto`}>
                <pre className='text-gray-700 whitespace-pre-wrap'>{text}</pre>
            </div>
        </div>
    </div>
  );
}
