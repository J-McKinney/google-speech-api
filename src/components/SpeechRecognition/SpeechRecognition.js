import React, { Component } from "react";
import { GoogleSpeechRecognition } from "google-cloud-speech-webaudio";
import "./SpeechRecognition.css";
// require("dotenv").config();

const GOOGLE_API_KEY = "";

const speechRecognition = new GoogleSpeechRecognition(GOOGLE_API_KEY);

// var sentence = [];

class SpeechRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.startListening = this.startListening.bind(this);
    this.stopListening = this.stopListening.bind(this);
  }


  componentDidMount() {
    // speechRecognition.stopListening();
  }
  componentDidUpdate() {
  }


  startListening = () => {
    speechRecognition.startListening();
    // const start = speechRecognition.startListening();
    // console.log(start);
  };

  stopListening = () => {
    const result = speechRecognition.stopListening();
    console.log(result)
    // sentence.push(result)
    // return result
  };

  render() {
    return (
      <>
        <div>
          <button onClick={this.startListening}>Start</button>
          <hr />
          <button onClick={this.stopListening}>Stop</button>
        </div>
      </>
    );
  }
}

export default SpeechRecognition;
