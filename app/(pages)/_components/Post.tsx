"use client";
import {
  FiImage,
  FiSmile,
  FiCamera,
  FiHeart,
  FiBookmark,
  FiMessageCircle,
} from "react-icons/fi";
import MoviePost from "./_post/MoviePost";
import { posts } from "@/app/data";

const Post = () => {
  return (
    <div className="w-full  mx-auto p-4 flex flex-col gap-4">
      {/* Post Oluşturma Alanı */}
      <div className="flex flex-col gap-2 p-3 bg-gray-800/70 rounded-lg">
        <div className="flex gap-3">
          <img
            src="/aykut.png"
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <input
            type="text"
            placeholder="Ne düşünüyorsun?"
            className="flex-1 px-3 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none"
          />
        </div>
        <div className="flex gap-4 px-12 text-gray-400 text-lg">
          <FiImage className="hover:text-blue-500 cursor-pointer" />
          <FiCamera className="hover:text-green-500 cursor-pointer" />
          <FiSmile className="hover:text-yellow-400 cursor-pointer" />
        </div>
      </div>

      {/* Gönderilmiş Postlar */}
      <div className="flex flex-col gap-4 max-h-[519px] overflow-y-auto">
        {posts.map((post) =>
          post.type === "film" ? (
            <MoviePost key={post.id} post={post} />
          ) : (
            <div
              key={post.id}
              className="flex flex-col gap-2 p-3 bg-gray-800/70 rounded-lg shadow-sm hover:shadow-md transition-shadow relative"
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
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {post.user}
                  </h4>
                  <p className="text-gray-200 text-sm">{post.text}</p>
                </div>
              </div>
              {post.image && (
                <img
                  src={post.image}
                  alt="post"
                  className="w-full rounded-lg object-cover max-h-64"
                />
              )}
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
          )
        )}
      </div>
    </div>
  );
};

export default Post;
