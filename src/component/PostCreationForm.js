import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

const PostCreationForm = ({ addPost }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      setError("Title and content are required.");
      return;
    }
    addPost({ title, content });
    navigate("/");
    };

    return (
        <div>
            <h2>Create New Post</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <button type="submit">Submit</button>
            </form>
      
        </div>
    );
};

export default PostCreationForm
