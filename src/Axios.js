import React, { useState, useEffect } from "react";
// import data from "./data/db.json";
import { styled } from "styled-components";
import { Button } from "./stylings";
import axios from "axios";
import Fetching from "./Fetching";
export const Input = styled.input`
  height: 35px;
  width: 200px;
  border-radius: 10px;
`;

// function PostData() {
//     const[title,setTitle]=useState(" ");
//     const[price,setPrice]=useState(" ")

//     const handlePost=()=>{
//             // event.preventDefault();
//             fetch('https://fakestoreapi.com/products/post', {
//                method: 'post',
//                headers: {'Content-Type':'application/json'},
//                body: JSON.stringify({
//                 "title":{title},
//                 "price":{price}

//                })
//             }).then((Response) => Response.json())
//             .then((data)=>{console.log(data);});
//             alert("posting successfull")
//         };

//     return (
//         <div>
//             <h3>Post Data</h3>
//             <Input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}></Input>
//             <Input value={price} onChange={(e)=>{setPrice(e.target.value)}}></Input>
//             <Button style={{height:"40px"}} type="submit" onClick={()=>handlePost()}>Post</Button>
//         </div>
//     )
//     }

// export default PostData;
// import React from 'react'

function GetData() {
  const [Data, setData] = useState([]);
  // const[show,setShow]=useState(false);
  const [inputName, setName] = useState([]);
  const [inputYear, setYear] = useState([]);
  const[updateName,setUpdateName]=useState('');
  const[updateYear, setUpdateYear]=useState('');
  const url = "http://localhost:8000/data";

    function Fetching(){
        axios.get("http://localhost:8000/data").then((res) => {
          setData(res?.data);
    })
         
  }
  useEffect(() => {
    return () => {
      Fetching()
    };
  }, [])

 
  const inputData = {
    name: inputName,
    year: inputYear,
  };
  const handlePost = () => {
    axios.post(url, inputData);
    Fetching();
    alert("post Success")
  };
  
  const handleDelete=(id)=>{
    console.log(id)
    axios.delete(`${url}/${id}`).then(res=>console.log("Delete successfull",res)).catch(err=>console.log("error",err));
    Fetching();
  }
  const handleName=(value)=>{
    setUpdateName(value)
  }
  const handleYear=(value)=>{
    setUpdateYear(value)
  }
  const update={
    name:updateName,
    year:updateYear
  }
  const updatePut=(id)=>{
    console.log(id);
     axios.put(`${url}/${id}`,update);
     Fetching(); 
     alert("update successfull");
  }

 
  return (
    <div className="axiosTable">
      <div>
        <h3>Post Data</h3>
        <Input
          type="text"
          value={inputName}
          onChange={(e) => {
            setName(e?.target?.value);
          }}
        ></Input>
        <Input
          value={inputYear}
          onChange={(e) => {
            setYear(e?.target?.value);
          }}
        ></Input>
        <Button style={{ height: "40px" }} type="submit" onClick={handlePost}>
          Post
        </Button>
        </div>
      
<div>
      <table
        style={{
          textAlign: "center",
          margin: "auto",
          width: "70vw",
          height: "60vh",
          padding: "10px",
        }}
      >
         <thead>
          <th>Name</th>
          <th>Year</th>
          <th>delete</th>
          <th>Update</th>
        </thead>
        {Data.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data?.name}</td>
              <td>{data?.year}</td>
              <td>
                <button onClick={()=>handleDelete(data.id)}>Delete</button>
                </td>
                <td>
                <input placeholder="username" type="text" onChange={(e)=>handleName(e.target.value)}></input>
                <input style={{width:"40px"}}placeholder="Year" type="number" onChange={(e)=>handleYear(e.target.value)}></input>
                <button onClick={()=>updatePut(data.id)}>Update</button>
              </td>
            </tr>  
          )
        })
        }<br/>
       
      </table>
      </div>
      
    </div>
  )
};

export default GetData;
