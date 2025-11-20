import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [character, setCharacter] = useState(false)
  const [Password, setPassword] = useState("")

  const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(character) str += "!@#$%^&*()~`{}[]"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, character, setPassword])

  const copyToClipboard = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, character, passwordGenerator])

  return (
    <>
    <h1 className="heading">Password Generator</h1>
    <div>
      <input type="text" value={Password} ref={passRef}  readOnly/>
      <button onClick={copyToClipboard}>Copy</button>
    </div>
    <div>
      <input type="range" min={6} max={100} value={length} onChange={(e) => {setLength(e.target.value)}}/>
      <label htmlFor="range">Length: {length} </label>
    </div>
    <div>
      <input type="checkbox" defaultChecked={numberAllowed} id="numberAllowed" onChange={() => {
        setNumberAllowed((prev) => !prev);
      }}/>
      <label htmlFor="numbers">Numbers</label>
    </div>
    <div>
      <input type="checkbox" defaultChecked={character} id="character" onChange={() => {
        setCharacter((prev) => !prev);
      }}/>
      <label htmlFor="characters">Character</label>
    </div>
    </>
  );
}

export default App;
