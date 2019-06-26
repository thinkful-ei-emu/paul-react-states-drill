import React from 'react';
import './App.css';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

function App() {
  return (
    <div className='state-drills'>
      <HelloWorld/>
      <Bomb/>
      <RouletteGun/>
    </div>
  );
}

export default App;
