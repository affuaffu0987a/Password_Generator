import React, { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {
  const [generatePass,setgenratePass]=useState("")
  const [iscopied,setCopied]=useState(false)
  const [Length,setLength] = useState(8);
  const [isnumber,setNumber]=useState(false);
  const [isChar,setChar]=useState(false);
  const copy = useRef(null)
  const btncolor = useRef("")

  const Passwordmake = useCallback(()=>{
    let password=""
    let specialChar = "!@#$%&*()^?><}{[]|/"
    let number = "1234567890"
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(isnumber) str += number;
    if(isChar) str += specialChar;
    for(let i=1; i<=Length;i++){
      let rando = Math.floor(Math.random()*str.length+1);
      password += str.charAt(rando)
    }
    setgenratePass(password)
  },[Length,isChar,isnumber,setgenratePass])

  const Copytext=useCallback(()=>{
    setCopied(true)
    btncolor.current.style.backgroundColor="#80e280"
    setTimeout(()=>{
      btncolor.current.style.backgroundColor="#b5b5f7"
      setCopied(false)
    },800)
    window.navigator.clipboard.writeText(generatePass)
    copy.current?.select();
    
  },[generatePass])

  useEffect(()=>{
    Passwordmake();
  },[Length,isChar,isnumber,Passwordmake])

  return (
    <div className='main'>
      <div className='inner'>
        <h2>Password-Generator🔒</h2>
        <div className='inpubtn'>
          <div className='inputdiv'>
            <input type='text' value={generatePass} ref={copy} readOnly />
          </div>
          <button style={{backgroundColor:btncolor}} onClick={Copytext} ref={btncolor} >{iscopied?"copied":"copy"}</button>
        </div>
        <input  className='inoutrange' type='range' min={6} max={100} onChange={(e)=>setLength(e.target.value)} />
        <label>Length: {Length}</label><br/>
        <div className='Check'>
        <input type='checkbox' onChange={()=>setNumber((prev)=>!prev)}/><label>Add_Number</label><br/>
        <input type='checkbox' onChange={()=>setChar((prev)=>!prev)}/><label>Add_SpecialCharacter</label>
        </div>
      </div>
    </div>
  )
}

export default App