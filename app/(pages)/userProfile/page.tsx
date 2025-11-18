"use client";
import UserMovieList from "./_components/UserMovieList";
import CommentList from "./_commentComp/CommentList";
import UserPostSection from "./_postsComp/UserPostSection";
import { useState } from "react";
import Profile from "./_userComp/Profile";
import ProfileInf from "./_userComp/ProfileInf";

const UserProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="pt-18 md:px-20 px-5 sm:px-10 flex md:flex-row flex-col gap-1 min-h-screen">
      {/* BURAYI ELLEME!!! */}
      <div className="flex flex-1 flex-col border-white/30 border-x border-y-0  text-white/70">
        <Profile />
        <ProfileInf />
        <UserPostSection />
      </div>
      <div className="flex flex-col flex-2 border-white/30 border-r">
        <div className="flex-3 relative border-b p-3 flex border-white/50 items-center justify-center bg-black/50  backdrop-blur-sm ">
          <h2 className="absolute w-50 flex justify-center text-white top-3  font-extralight z-50">
            Selected Movies
          </h2>
          <UserMovieList />
        </div>
        <div className="flex-2 flex justify-center p-3 relative backdrop-blur-sm bg-black/50">
          <h2 className="absolute w-50 flex justify-center text-white top-0  font-extralight z-50">
            User Reviews
          </h2>

          <CommentList />
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
