import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoPlayer from './VideoPlayer';

function App() {
  return (
    <div className="App">
      <VideoPlayer url="https://www.youtube.com/embed/othD6L2GTwQ"></VideoPlayer>
    </div>
  );
}

export default App;
