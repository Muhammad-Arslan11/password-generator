import { useCallback, useEffect, useState } from "react";

import "./App.css";

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numbersAllowed){
      str+= "0123456789"}

      if(characterAllowed){
        str+= "!@#$%^&*_+?~";}

      for(let i = 1; i <= length; i++) {
          let char =  Math.floor( Math.random() * str.length + 1)
          pass += str.charAt(char);
          
        }

      setPassword(pass)
  },[length, numbersAllowed,  characterAllowed, setPassword ]) 


  useEffect(() =>{
    passwordGenerator()
  },[length, numbersAllowed,  characterAllowed, setPassword, passwordGenerator ])

  

  return (
    <>
      <div className="screen flex flex-col justify-center w-screen min-h-screen  bg-slate-500">
        <div className="card flex flex-col items-center rounded-3xl w-full  bg-sky-400">
          <h1 className="p-2 text-center text-2xl font-extrabold text-gray-900 ">
            Password Generator
          </h1>
          <div className="input flex flex-col items-center">
            <input
              className=" w-full outline-none bg-white text-gray-900 rounded-xl px-4 py-1"
              type="text"
              value={password}
              placeholder="password"
              readOnly
            />
            <button className=" my-2 ml-15  px-3 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md h    over:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 shr ">
              Copy
            </button>
          </div>
          
        
          <input className="in-range:border-green-500" type="range"
           min="5"
            max="100"
            value={length}
            onChange={(e)=> {setLength(e.target.value)}}/>
            
           <label>Length: {length}</label>
            <input
             defaultValue={numbersAllowed} onChange={()=> setNumbersAllowed(prev => !prev)} 
            type="checkbox" />
           
             <label>Numbers{numbersAllowed}</label>
            <input 
            defaultValue={characterAllowed}
           onChange={()=> setCharacterAllowed(prev => !prev)} 
             type="checkbox" 
            />
              <label>Characters {characterAllowed}</label>
          
        </div>
      </div>
    </>
  );
}

export default App;
