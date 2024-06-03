import './style.css';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { ChevronLeft } from 'lucide-react';

const SpeechToText = () => {

  const {
    transcript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <a href='/'><h2 className='h2'><ChevronLeft size={60} /></h2></a>
      <div className='inline'>
    <div className="hero">
      <h1>Speech To Text <a className='converter' href='/text-speech'>Converter</a></h1>
      <textarea
        placeholder="Your voice message is here..."
        id="input-field"
        value={transcript}
      />
      <div className="row">
        <button className='button' onClick={SpeechRecognition.startListening}>
          Start
        </button>
        <button className='button' onClick={SpeechRecognition.stopListening}>
          Stop
        </button>

        <CopyToClipboard text={transcript}>
        <button className='button' style={{marginLeft: '250px'}}>
          Copy
        </button>
        </CopyToClipboard>
      </div>
    </div>
    </div>
    </div>
  );
};

export default SpeechToText;