"use client";

import { useState, useEffect } from "react";

import PostCard from "./PostCard";

const PostCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-10 prompt-layout">
      {data.map((post) => (
        <PostCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchPost, setSearchPost] = useState("");
  const handleSearchChange = (e) => {};
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/post");
        const data = await response.json();

        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a #tag or a user"
          value={searchPost}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PostCardList data={posts} handleTagClick={() => {}} />
      <div></div>
    </section>
  );
};

export default Feed;
