import './style.css';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechToText = () => {

  const {
    transcript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="hero">
      <h1>Speech To Text <a href='/text-speech'>Converter</a></h1>
      <textarea
        placeholder="Your voice message is here..."
        id="input-field"
        value={transcript}
      />
      <div className="row">
        <button onClick={SpeechRecognition.startListening}>
          Start
        </button>
        <button onClick={SpeechRecognition.stopListening}>
          Stop
        </button>

        <CopyToClipboard text={transcript}>
        <button style={{marginLeft: '250px'}}>
          Copy
        </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default SpeechToText;