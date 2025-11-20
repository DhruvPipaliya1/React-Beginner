import { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(15)
  let [color, setColor] = useState("white")
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }
  const removeValue = () => {
    
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <>
    <div className="background" style={{background: color}}>
      <h1>This is first</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br/>
    <button onClick={removeValue}>Remove value</button>
    <br />
    <button onClick={() => setColor("#000")}>Black</button>
    </div>
    
    </>
  );
}

export default App;
