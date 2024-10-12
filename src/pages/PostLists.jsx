import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import React from "react";
import AddPost from "../Components/AddPost";
import { fetchPosts } from "../api/posts";

const PostLists = () => {
  const navigate = useNavigate();

  const {
    isLoading,
    isError,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      title
      <h1>Post List</h1>
      <AddPost />
      {posts.map((post) => (
        <div key={post.id}>
          <h3
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`post/${post.id}`)}
          >
            {post.title}
          </h3>
          <button onClick={() => navigate(`post/${post.id}/edit`)}>Edit</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostLists;
