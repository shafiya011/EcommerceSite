import React from "react";

function BlogList({Blogs,title,handleDelete,changeName}) {
//   const Blogsdata = .Blogs;
  return (
    <div className="BlogList">
        <h1>{title}</h1>
      {Blogs.map((blogs) => (
        <div className="Blogdiv" id="blogdiv" key={blogs.id}>
          <h2>{blogs.title}</h2>
          <p>{blogs.body}</p>
          <p>{blogs.author}</p>
          <button onClick={(e)=>handleDelete(blogs.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
