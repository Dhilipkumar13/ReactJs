import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPost } from "../api/posts";

const Post = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    isLoading,
    isError,
    data: post,
    error,
  } = useQuery({
    queryKey: ["posts", id],
    // Pass a function that calls fetchPost with id
    queryFn: () => fetchPost(id),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <button onClick={() => navigate("/")}>Back to list</button>
      <h3>Post: {post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
