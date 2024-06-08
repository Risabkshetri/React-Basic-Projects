import { useState , useCallback, useEffect, useRef} from 'react'
// import './App.css'

function App() {
 const [length, setLength] = useState(8);
 const [numberAllowed, setNumberAllowed] = useState(false);
 const [symbolAllowed, setSymbolAllowed] = useState(false);
 const[password, setPassword] = useState('');

 // useref hook
const passwordRef = useRef(null);

 const generatePassword = useCallback(() => {
  let pass = "";
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if(numberAllowed) str += "0123456789";
  if(symbolAllowed) str += "!@#$%^&*()_+";

  for(let i = 1; i <= length; i++) {
    let char = Math.random() * str.length + 1;
    pass += str.charAt(char);
    
  }
  setPassword(pass);
 }, [numberAllowed, symbolAllowed, length, setPassword]);

 const copyPasswordToClipboard = useCallback(() => {
  window.navigator.clipboard.writeText(password);
  passwordRef.current.select(); 
 }, [password]);
  
 useEffect(() => {
  generatePassword();
 }, [generatePassword, numberAllowed, symbolAllowed, length]);
  return (
     
      <div className="w-full max-w-md max-auto h-24 shadow-md rounded-lg px-4 text-orange-500 bg-gray-800 my-8">
      <h1 className='text-2xl text-center text-white '>Password Generator</h1>
        <div className="flex  shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className=" outline-none w-full px-4 py-3"
            value={password}
            readOnly
            placeholder="Password"
            ref = {passwordRef}
             />
          <button
          className='bg-orange-500 text-white px-4 py-3 shrink-0'
          onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
             type="range"
             min={6}
             max={100}
             value={length}
             onChange={(e) => setLength(e.target.value)}
             className='cursor-pointer'
             />
             <label >Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
             type="checkbox"
             id='numberInput'
             checked={numberAllowed}
             onChange={() => setNumberAllowed((prev) => !prev)}
             />
             <label >Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
             type="checkbox"
             id='symbolInput'
             checked={symbolAllowed}
             onChange={(e) => setSymbolAllowed(e.target.checked)}
             />
             <label >Symbol</label>
          </div>
        </div>
      </div>
  )
}

export default App
