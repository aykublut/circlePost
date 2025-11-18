"use client";

import Image from "next/image";

const UserPost = ({
  title,
  content,
  imageUrl,
  username,
  avatarUrl,
  date,
}: any) => {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 flex flex-col gap-2 w-full hover:bg-gray-800 transition">
      {/* Üst: avatar + username + tarih */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 relative rounded-full overflow-hidden">
          <Image src={avatarUrl} alt={username} fill className="object-cover" />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-white">{username}</span>
          <span className="text-gray-400 text-xs">
            {new Date(date).toLocaleDateString()}
          </span>
        </div>
      </div>

      {/* Başlık (film postları için) */}
      {title && <h3 className="text-white font-semibold text-lg">{title}</h3>}

      {/* İçerik */}
      <p className="text-gray-300 text-sm">{content}</p>

      {/* Resim (film postları) */}
      {imageUrl && (
        <div className="relative w-full h-60 rounded-lg overflow-hidden mt-2">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
      )}
    </div>
  );
};

export default UserPost;
