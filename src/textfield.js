import React, { useState } from "react";

const Textfield = () => {
  const [text, setText] = useState(" "); //input
  const [value, inputvalue] = useState(""); //buttons
  const [show, setShow] = useState(false);

  const handlesubmit = () => {
    setText(value);
  };
  const handlebutton = (key) => {
    inputvalue(value+key);
  };
  const clearclick = () => {
    setText(" ");
    inputvalue(" ");
  };
  const keywords = [
    "Hello",
    "Am good",
    "Hope you are fine",
    "How are you?",
    "Need Help?",
    "Please contact us",
  ];
  return (
    <div className="Textfielsdiv">
      {/* {[...Array(5)].map((input, index) => {
        return (
          <button key={index}></button>
        );
      })
      } */}

      {keywords.map((key, index) => (
        <button onClick={() => handlebutton(key)}>{key}</button>
      ))}

      <div>
        <textarea
          onChange={(e) => {
            setShow(true);
            setText(e.target.value);
          }}
          value={value}
        ></textarea>

        <button onClick={()=>handlesubmit()}>submit</button>
        <button onClick={clearclick}>clear</button>

        <h4>output: {text} </h4>
      </div>
    </div>
  );
};

export default Textfield;
