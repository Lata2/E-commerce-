// SpeechRecognitionComponent.jsx

import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechRecognitionComponent = ({ setSearchValue, listening }) => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    if (listening) {
      SpeechRecognition.startListening({ continuous: true });
    } else {
      SpeechRecognition.stopListening();
    }

    return () => {
      SpeechRecognition.stopListening();
    };
  }, [listening]);

  useEffect(() => {
    if (transcript) {
      setSearchValue(transcript);
      resetTranscript();
    }
  }, [transcript, setSearchValue, resetTranscript]);

  return null; // This component doesn't render any UI
};

export default SpeechRecognitionComponent;
