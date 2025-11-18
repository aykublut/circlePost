import React from "react";
import { FiBookmark, FiHeart, FiMessageCircle } from "react-icons/fi";

const MoviePost = ({ post }: any) => {
  return (
    <div
      key={post.id}
      className="flex flex-col gap-2 p-3 bg-gray-900/95 rounded-lg shadow-md relative"
    >
      <span className="absolute top-2 right-3 text-xs text-gray-400">
        {post.date}
      </span>
      <div className="flex gap-3 items-start">
        <img
          src={post.avatar}
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col gap-1">
          <h4 className=" font-semibold text-sm">{post.user}</h4>
          <p className="text-gray-200 text-sm">{post.text}</p>
        </div>
      </div>
      {post.poster && (
        <img
          src={post.poster}
          alt="poster"
          className="w-full rounded-lg object-cover mt-2 max-h-64"
        />
      )}
      <div className="flex justify-center gap-2  border-white/50 border-b pb-1">
        {post.actors.map((actor: any) => (
          <div
            key={actor.name}
            className="flex flex-col items-center text-xs border-white/50 border-t pt-2 rounded-full "
          >
            <img
              src={actor.img}
              alt={actor.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-gray-300 ">{actor.name}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between px-5">
        <div className="w-[50%]">
          <p className="text-gray-300 flex flex-col text-xs text-center">
            <span className="font-semibold ">Yönetmen</span> {post.director}
          </p>
          <p className="text-gray-300 flex mt-1 flex-col text-xs text-center">
            <span className="font-semibold ">Yapımcı</span> {post.producer}
          </p>
        </div>
        <div className="w-[50%]">
          <p className="text-gray-300 text-xs flex flex-col text-center">
            <span className="font-semibold ">Süre / Tür</span>
            {post.duration} / {post.genre}
          </p>
          <p className="text-gray-300 text-xs mt-1 flex flex-col text-center">
            <span className="font-semibold ">IMDb</span> {post.imdb}
          </p>
        </div>
      </div>
      <div className="flex gap-2 mt-2 text-white text-sm">
        <div className="flex items-center gap-1 bg-gray-700/70 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-600/80">
          <FiHeart className="text-red-500" />
          {post.likes}
        </div>
        <div className="flex items-center gap-1 bg-gray-700/70 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-600/80">
          <FiBookmark />
          Kaydet
        </div>
        <div className="flex items-center gap-1 bg-gray-700/70 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-600/80">
          <FiMessageCircle />
          {post.comments} Yorum
        </div>
      </div>
    </div>
  );
};

export default MoviePost;
