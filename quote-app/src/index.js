import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {quotes, palettes} from './quotes';
import './index.css';


const Container = function({ text, character, primary, secondary, quoteIcon, handleReload }) {
  const [textValue, setTextValue] = useState(text);

  useEffect(() => {
    // Update the state when the 'text' prop changes
    setTextValue(text);
  }, [text]);
  const body = document.querySelector('body');
  body.style.backgroundColor = secondary;
  return (
    <article className='border-4 px-4 py-2 rounded-[20px] w-8/12 sm:w-[500px] text-center'
    id='quote-box'
    style={{ backgroundColor: secondary, borderColor: primary }}>
      <div className='flex gap-x-2'>
        <img className='sm:w-[40px] sm:h-[40px] w-[20px] h-[20px]' src={quoteIcon} alt="quote" />
        <p className="font-['Lumos'] text-xl font-semibold max-[400px]:text-sm"
        id='text'
        style={{ color: primary }}
        >{text}
        </p>
      </div>

      <p className="text-right font-['Lumos'] font-medium mt-2 max-[400px]:text-xs mr-3"
      id='author'
      style={{ color: primary }}>— {character}
      </p>
  
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mt-4">
  
        <button id='new-quote'
        type="button"
        onClick={handleReload}
        className={`text-white px-3 py-1 rounded-lg max-[400px]:w-full`} style={{ backgroundColor: primary, color: secondary }}>
        Generate Quote
        </button>
    
        <a target='_blank' rel='noreferrer' className='text-white px-3 py-1 rounded-lg bg-blue-700 max-[400px]:w-full'
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${textValue}`}>
        Tweet
        </a>
      </div>
    </article>
  );
}

function Index() {
  const [forceUpdate, setForceUpdate] = useState(false);

  const handleReload = () => {
    setForceUpdate(!forceUpdate);
  };
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const paletteIndex = Math.floor(Math.random() * palettes.length);
  const quote = quotes[quoteIndex];
  const palette = palettes[paletteIndex];
  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col gap-14'>
      <h1 className="block font-['Wizard_World'] text-3xl text-center" style={{ color: palette.primary }}>Harry Potter Quote Generator</h1>
      <Container {...quote} {...palette} handleReload={handleReload} />
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
