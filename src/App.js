//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ColorBox from './components/ColorBox';
function App() {

  let randomColor = () => {
   return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
  }

  let [color, setColor] = useState('blue')
  
  return (
    <div className="App">
      <h1>Color Palette Generator</h1>
      <button onClick={(e) => setColor(randomColor())}>Generate</button>
      <div className='color-container'>
        <ColorBox bgColor={color} opacity={0.2} />
        <ColorBox bgColor={color} opacity={0.37} />
        <ColorBox bgColor={color} opacity={0.51} />
        <ColorBox bgColor={color} opacity={0.65} />
        <ColorBox bgColor={color} opacity={0.7} />
        <ColorBox bgColor={color} opacity={1} />
      </div>
    </div>
  );
}

export default App;
