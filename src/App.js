import React from "react";
import SpeechRecognition from "./components/SpeechRecognition/SpeechRecognition";
import SpeechRec from "./components/SpeechRec/SpeechRec";
// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <>
      <div>
        <SpeechRec />
        <SpeechRecognition />
      </div>
    </>
  );
}

export default App;
