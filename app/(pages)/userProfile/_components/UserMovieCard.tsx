"use client";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { useState } from "react";

interface UserMovieCardProps {
  title: string;
  imageUrl: string;
}

const UserMovieCard = ({ title, imageUrl }: UserMovieCardProps) => {
  return (
    <div className="relative w-24 h-36 rounded-2xl overflow-hidden shadow-md group transition hover:shadow-lg hover:scale-[1.02]">
      <div className="absolute top-1 left-0 z-10 w-full bg-black/50 text-white text-center py-2 text-sm font-medium backdrop-blur-sm">
        {title}
      </div>

      {/* Film görseli */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition group-hover:brightness-90"
      />
    </div>
  );
};

export default UserMovieCard;
