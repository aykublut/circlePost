"use client";
import { useSession } from "next-auth/react";
import React from "react";

const Popular = () => {
  const { status } = useSession();
  const popularPosts = [
    {
      id: 1,
      user: "Ali",
      avatar:
        "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
      text: "Bugün borsa çok hareketliydi!",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    },
    {
      id: 2,
      user: "Ayşe",
      avatar:
        "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
      text: "Yeni film harikaymış!",
      image:
        "https://wallpaper.forfun.com/fetch/5b/5bc8dbfeffc13405701ffceff5073796.jpeg",
    },
    {
      id: 3,
      user: "Mehmet",
      avatar: "https://freesvg.org/img/Male-Avatar.png",
      text: "Polonya hava soğuk ama güzel.",
      image:
        "https://images.unsplash.com/photo-1505490096310-204ef067fe6b?fm=jpg&q=60&w=3000",
    },
    {
      id: 4,
      user: "Fatma",
      avatar:
        "https://scontent-waw2-1.xx.fbcdn.net/v/t1.6435-9/179351961_105570888352139_9029618651249830167_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GG_XGqOjxSwQ7kNvwG_RFD9&_nc_oc=AdlP3-j9MwM4Re9CBthd4tVnHDY6_RA_tOAjKW8CXv3C_mgBVzWc0smTHWGgIrB4oLO3RzsC1Mbgb3x8IAQUs_rx&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=E3h14KE9e46yviXJrW53yw&oh=00_AfhbyJFkAGABBm8GX8n8ThBPxrRHBVg2W5fhDZ1U3a4wtw&oe=693DDA16",
      text: "Borsa yatırım ipuçları burada!",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTs4GUJ8bUjfgqkFKTmAZWm8M-ZHRR7040cg&s",
    },
  ];

  return (
    status === "authenticated" && (
      <div className="w-full max-w-xl mx-auto p-4">
        <h3 className="text-white font-bold mb-3">Popüler Gönderiler</h3>
        <div className="grid grid-cols-2 gap-3">
          {popularPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800/70 rounded-lg shadow-lg cursor-pointer overflow-hidden hover:scale-105 transition-transform flex flex-col relative"
            >
              {/* Görsel alanı */}
              <div className="w-full h-32 md:h-36 lg:h-40 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.text}
                  className="w-full h-full object-cover"
                />

                {/* User Avatar, İsmi ve Text - Absolute */}
                <div className="absolute top-2 left-2 right-2 flex items-center justify-between bg-black/50 px-2 py-1 rounded-lg">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.avatar}
                      alt={post.user}
                      className="w-6 h-6 rounded-full border border-white"
                    />
                    <span className="text-xs text-white font-semibold truncate">
                      {post.user}
                    </span>
                  </div>
                  <span className="text-xs text-gray-200 truncate">
                    {post.text}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Popular;
