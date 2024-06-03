import './style.css';
import React, { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    if (!synth) {
      console.error('Speech Synthesis not supported in this browser.');
      return;
    }

    const populateVoices = () => {
      const availableVoices = synth.getVoices();
      setVoices(availableVoices);
      setSelectedVoice(availableVoices[0] || null); // Set the default voice
    };

    synth.onvoiceschanged = populateVoices;
    populateVoices(); // Call initially to fetch voices

    return () => synth.onvoiceschanged = null; // Cleanup on unmount
  }, []);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleVoiceChange = (event) => {
    setSelectedVoice(voices[event.target.value]);
  };

  const handleSpeak = () => {
    if (!selectedVoice || !text) {
      console.error('Please select a voice and enter text to speak.');
      return;
    }
  
  

    const speech = new SpeechSynthesisUtterance();
    speech.voice = selectedVoice;
    speech.text = text;
    window.speechSynthesis.speak(speech);
  };

  const voiceOptions = voices.map((voice, index) => (
    <option key={index} value={index}>{voice.name}</option>
  ));

  return (
    <div>
      <a href='/'><h2 className='h2'><ChevronLeft size={60} /></h2></a>
    <div className='inline'>
    <div className="hero">
      <h1>Text To Speech <a className='converter' href='/speech-text'>Converter</a></h1>
      <textarea
        placeholder="Write anything here..."
        id="input-field"
        value={text}
        onChange={handleTextChange}
      />
      <div className="row">
        <select onChange={handleVoiceChange}>
          {voiceOptions}
        </select>
        <button className='button' onClick={handleSpeak}>
          Listen
        </button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default TextToSpeech;