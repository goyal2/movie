import React from "react";
import { Link, useParams } from "react-router-dom";

const PostDetailView = ({ posts }) => {
  const { id } = useParams();
  const post = posts[id];

  if (!post) return <h2>Post not found</h2>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default PostDetailView;