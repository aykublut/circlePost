"use client";

import React, { useState } from "react";
import UserBlogPostList from "./UserBlogPostList";
import UserMoviePostList from "./UserMoviePostList";
import { blogPosts, moviePosts } from "./Posts";
import { Button } from "@/components/ui/button";

const UserPostSection = () => {
  const [showBlog, setShowBlog] = useState(true);

  return (
    <div className="w-full px-3 py-2 flex flex-col gap-3">
      <div className="flex px-5 justify-between">
        <Button
          onClick={() => setShowBlog(true)}
          className={`px-4 py-2 rounded-md ${
            showBlog ? "bg-indigo-600 text-white" : "bg-gray-700 text-gray-300"
          }`}
        >
          Blog Posts
        </Button>
        <Button
          onClick={() => setShowBlog(false)}
          className={`px-4 py-2 rounded-md ${
            !showBlog ? "bg-indigo-600 text-white" : "bg-gray-700 text-gray-300"
          }`}
        >
          Movie Posts
        </Button>
      </div>

      {showBlog ? (
        <UserBlogPostList posts={blogPosts} />
      ) : (
        <UserMoviePostList posts={moviePosts} />
      )}
    </div>
  );
};

export default UserPostSection;
