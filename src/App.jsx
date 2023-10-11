import React, { useState } from 'react'

const App = () => {
  const [Length,setLength] = useState(8);

  return (
    <div className='main'>
      <div className='inner'>
        <h2>Password-Generator🔒</h2>
        <div className='inpubtn'>
          <div className='inputdiv'>
            <input type='text' />
          </div>
          <button>Copy</button>
        </div>
        <input type='range' min='6' max='100' onChange={(e)=>setLength(e.target.value)} />
        <label>Length: {Length}</label><br/>
        <div className='Check'>
        <input type='checkbox'/><label>Number</label><br/>
        <input type='checkbox'/><label>Special_Char</label>
        </div>
      </div>
    </div>
  )
}

export default App