import React, { useState } from "react";
 const Input = () => {
    const [input, setInput] = useState("")
    const [show,setshow] = useState(false)


    const handleButton=()=>{
        // console.log("ji");
        setshow(true)
    }
    const handleinput=(value)=>{
        setInput(value)
    }
 const RenderButton=()=>{
return(
    <button>{input}</button>
)
 }

    return ( 
        <div className="InputDiv">
            <input onChange={(e)=>handleinput(e.target.value)}></input>
            <button onClick={handleButton}>click</button>
                {show && RenderButton()}
        </div>
     );
 }
  
 export default Input;