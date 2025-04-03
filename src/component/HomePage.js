import React from 'react';
import { Link } from "react-router-dom"; 

const HomePage = ({posts}) => {
  return (
    <div>
      <Link to="/create">Create New Post</Link>
      <ul>
        {posts.map((post, index) => (
            <li key={index}>
                <Link to={`/post/${index}`}>{post.title}</Link>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
