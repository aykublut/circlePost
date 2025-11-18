"use client";

import UserMovieCard from "./UserMovieCard";
import { sampleMovies } from "./Movies";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const UserMovieList = () => {
  return (
    <ScrollArea className="h-89  w-full  rounded-md border   ">
      <div
        className="
         flex flex-wrap gap-5 items-center justify-center rounded-xl bg-gray-800/80 backdrop-blur-sm  py-7
        "
      >
        {sampleMovies.map((movie, index) => (
          <React.Fragment key={index}>
            <UserMovieCard
              key={index}
              title={movie.title}
              imageUrl={movie.imageUrl}
            />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
};

export default UserMovieList;
