// import "./Blog.css";
import React, { useState, useEffect } from "react";
// import BlogList from "./Blog";

// import RenderHTML from './Navbar'

// const Homepage = () => {
//     let firstName="shafiya";
//     const [name,setname]=useState(firstName)
//     const [show,setshow]=useState(true)

//   const handleClick = (e) => {
//     console.log("button is clicked");
//     setshow(true);
//     // setname(e);
//   };

// //   const renderHTML=(size,props)=>{
// //     return <h2>{name}</h2>
// //   }

//   return (
//     <div className="Homepage">
//         {show && <h2>{name}</h2>}
//       {/* {show && renderHTML(12,'green') && <RenderHTML size={12} bgColor={'green'}/>} */}
//       <input onChange={(e)=>{setshow(false);setname(e.target.value)}}></input>
//       <button className="clickButton" onClick={handleClick}>
//         click me
//       </button>
//     </div>
//   );
// };

// export default Homepage;

// const Homepage = () => {
//   const [Blogs, setBlogs] = useState(null)

//   const handleDelete=(id)=>{
//    const newBlog=Blogs.filter((Blogs)=>Blogs.id!==id);
//    setBlogs(newBlog)
//   }

//   useEffect(() => {
//   // console.log("rendered");
//   fetch('http://localhost:8000/blogs').then(res=>{return res.json()}).then(data=>setBlogs(data))
//   },[])

//   return (
//     <div className="Homepage">
//      {Blogs && <BlogList Blogs={Blogs} title="My Blogs" handleDelete={handleDelete}/>}

//     </div>
//   );
// };

// export default Homepage;


