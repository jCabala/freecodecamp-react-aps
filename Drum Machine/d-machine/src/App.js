import React, { useState } from 'react';
import './App.css';

const drums = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];


function Drum({ drum, updatePressed }) {

    const activatePad = () =>{
      document.getElementById(drum.keyCode).click();
    }

    const playSound = () => {
      const sound = document.getElementById(drum.keyTrigger);
      sound.currentTime = 0;
      sound.play();
      activatePad();
      updatePressed(drum.id);
      setTimeout(() => updatePressed(''), 700);
    }

    const handleKeyPress = (k) => {
      if(k.keyCode === drum.keyCode){
        playSound();
      }
    }

    document.addEventListener('keydown', handleKeyPress);

    return(
      <div className="drum-pad" id={drum.keyCode} onClick={playSound}>
        {drum.keyTrigger}
        <audio
        className='clip'
        id={drum.keyTrigger}
        src={drum.url}
        />
      </div>
    )
}

function DrumMachine() {
  const [pressedName, setPressedName] = useState('asd');

  return(
    <div id="drum-machine">
        <div id="drums-container">
          {drums.map(k => 
              <Drum value={pressedName} 
              key={k.keyTrigger} 
              drum={k} 
              updatePressed={setPressedName} />
          )}
        </div>
        <div id="display">
          {pressedName}
        </div>
    </div>
  )
}


function App() {

  return (
    <div className="app">
        <h1 style={{color: 'white', fontSize: 70, textAlign: 'center',}}>Drum Machine</h1>
        <DrumMachine />
    </div>
  );
}

export default App;
