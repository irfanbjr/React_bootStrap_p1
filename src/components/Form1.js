import React, { useState } from 'react'

export default function Form1() {

    const clickHindle = (event)=>
    {
        console.log("event clicked");
        let newtext= text.toLocaleUpperCase()
        setText(newtext);
        
    }
    const handleOnChange = (event)=>
    {
        setText(event.target.value);
        console.log("text enter event called");
    }
    //this the state procedure
    const [text, setText]=useState("I'am text")

  return (
    <div className="container">
       <h2 className='mt-3'>Enter your desire Text here</h2>
         <div className="form-group">
            <textarea value={text} onChange={handleOnChange} className="form-control" rows='15'   id="exampleFormControlInput1" placeholder="Enterhere"/>
        </div>
        <button onClick={clickHindle} className='btn btn-primary'>Convert to upper Case</button>
    </div>
  )
}
