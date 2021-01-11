import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoPlayer from './VideoPlayer';
import YoutubePlayer from './YoutubePlayer';

function App() {
  return (
    <div className="App">
      <YoutubePlayer url="https://www.youtube.com/embed/othD6L2GTwQ"></YoutubePlayer>
      <VideoPlayer url="https://d2z1iynmtrituf.cloudfront.net/convert/hls/cenage_animal_lesson5_q1_20201016T085627.m3u8"></VideoPlayer>
    </div>
  );
}

export default App;
