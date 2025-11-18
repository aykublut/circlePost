"use client";

import React from "react";
import UserPost from "./UserPost";
import { ScrollArea } from "@/components/ui/scroll-area";

const UserBlogPostList = ({ posts }: any) => {
  return (
    <ScrollArea className="h-70 w-full">
      <div className="flex flex-col gap-4 p-2">
        {posts.map((post: any) => (
          <UserPost
            key={post.id}
            username={post.username}
            avatarUrl={post.avatarUrl}
            content={post.content}
            date={post.date}
          />
        ))}
      </div>
    </ScrollArea>
  );
};

export default UserBlogPostList;
