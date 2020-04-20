import React, { Component } from "react";
import { GoogleSpeechRecognition } from "google-cloud-speech-webaudio";
import "./SpeechRecognition.css";
// require("dotenv").config();

const GOOGLE_API_KEY = "AIzaSyAU5U9DOgRmiDtNiNcAX3A6eDwZbdnXhvc";

const speechRecognition = new GoogleSpeechRecognition(GOOGLE_API_KEY);

class SpeechRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.startListening = this.startListening.bind(this);
    this.stopListening = this.stopListening.bind(this);
  }


  componentDidMount() {
    speechRecognition.stopListening();
  }
  componentDidUpdate() {
  }


  startListening = () => {
    const start = speechRecognition.startListening();
    console.log(start);
  };

  stopListening = () => {
    const result = speechRecognition.stopListening();
    console.log(result)
    // console.log(Promise)
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
