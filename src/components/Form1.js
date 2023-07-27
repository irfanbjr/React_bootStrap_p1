import React, { useState } from 'react'

export default function Form1() {

    const clickHandleUp = ()=>
    {
        console.log("event clicked");
        let newtext= text.toLocaleUpperCase()
        setText(newtext);
        
    }
    const clickHandleLo = ()=>
    {
        console.log("event clicked");
        let newtext= text.toLowerCase()
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
    <>
    <div className="container">
       <h2 className='mt-3'>Enter your desire Text here</h2>
         <div className="form-group">
            <textarea value={text} onChange={handleOnChange} className="form-control" rows='15'   id="exampleFormControlInput1" placeholder="Enterhere"/>
        </div>
        <button onClick={clickHandleUp} className='btn btn-primary'>Convert to Upper Case</button>
        <button onClick={clickHandleLo} className='btn btn-primary ml-2'>Convert to Lower Case</button>
    </div>
    <div className="container my-2">
        <h2>
            Your text Summary
        </h2>
        <div className='countercls'>Total {text.split(" ").length} and Total Character {text.length} </div>
        <div className='countercls'> Read time {0.008*text.split(" ").length}</div>
    </div>
    </>
  )
}
