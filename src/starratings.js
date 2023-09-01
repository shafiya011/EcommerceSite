import React, { useState } from "react";
import {Starstyle ,Buttons}from "./starstyle";

const Starratings = () => {
//   const [ratings, setratings] = useState(0);
  const [color, setColor] = useState("");
    const [currentId,setID]=useState(0);
 
  const click = (index) => {
    setID(index)
  //   setColor("black")
  if(index<2){
      setColor("red");
    }
  else if(index<= 3){
      setColor('yellow')
  }
  else if(index<=4){
      setColor("lightgreen")
  }
  else if(index<=5){
      setColor("green")
  }
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        return (
          <Buttons id="1" onClick={(e) => click(index)}>
            <span className="stars" style={currentId>=index ? {color:color}:{}}>
              &#9733;
            </span>
          </Buttons>
        );
      })}
    </div>
  );
};
export default Starratings;

// If clicking 1 & 2 give a color #CF0812
// If clicking 3 give a color #FAAD14
// If clicking 4 give a color #85BA6A
// If clicking 5 give a color #1F5404
