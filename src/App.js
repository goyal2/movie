import Header from "./component/Header"
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import HomePage from "./component/HomePage";
import PostCreationForm from "./component/PostCreationForm";
import PostDetailView from "./component/PostDetailView";

const App =()=> {
  const [ posts, setPosts ] = useState(() =>{
    const savedPosts = localStorage.getItem("blogPosts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  useEffect(()=>{
    localStorage.setItem("blogPosts",JSON.stringify(posts));
  }, [posts]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  }; 

  return (
    
    <Router>
      <div>
      <Header/>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create Post</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage posts={posts} />} />
        <Route path="/" element={<PostCreationForm addPost={addPost} />} />
        <Route path="/" element={<PostDetailView posts={posts} />} />
        
      </Routes>
    </Router>
  );
}

export default App;
