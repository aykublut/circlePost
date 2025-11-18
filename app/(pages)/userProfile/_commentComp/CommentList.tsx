"use client";

import { Card, CardContent } from "@/components/ui/card";
import { sampleComments } from "./Comments";
import { ScrollArea } from "@/components/ui/scroll-area";

const CommentList = () => {
  return (
    <ScrollArea className="w-full  h-63 overflow-x-auto py-3   ">
      <div className="flex gap-3 justify-center flex-wrap pr-4 pl-2 ">
        {sampleComments.map((comment) => (
          <Card
            key={comment.id}
            className="flex-shrink-0 w-64 flex items-center gap-2 p-2 bg-gray-800/80 backdrop-blur-sm"
          >
            <img
              src={comment.avatarUrl}
              alt={comment.username}
              className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500"
            />
            <CardContent className="p-0">
              <p className="font-semibold text-white text-sm">
                {comment.username}
              </p>
              <p className="text-gray-300 text-xs leading-tight">
                {comment.text}
              </p>
              <p className="text-gray-500 text-[10px] mt-1">
                {new Date(comment.createdAt).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
};

export default CommentList;
