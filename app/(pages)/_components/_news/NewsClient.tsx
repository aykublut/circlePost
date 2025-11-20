"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

const NewsClient = ({ data }: any) => {
  const { status } = useSession();
  const [selectedNews, setSelectedNews] = useState([
    data.data[0].title,
    data.data[0].description,
    data.data[0].image_url,
  ]);
  const [nextNews, setNextNews] = useState([
    data.data[1].title,
    data.data[1].description,
    data.data[1].image_url,
  ]);
  const [nextNews2, setNextNews2] = useState([
    data.data[2].title,
    data.data[2].description,
    data.data[2].image_url,
  ]);
  const figureNews = (selected: any, next: any, next2: any) => {
    setSelectedNews(selected);
    setNextNews(next);
    setNextNews2(next2);
  };
  return (
    status === "authenticated" && (
      <div className="flex p-2 w-full gap-1 h-full">
        <div className="flex-2 flex-col relative w-full rounded-t-lg bg-transparent  break-all border-r border-white/50 pr-1 ">
          <h2 className="text-xl z-10 px-2 bg-black/30 backdrop-blur-[1px] rounded-t-lg top-0 left-0 absolute font-semibold">
            {selectedNews[0]}
          </h2>
          <div className="relative">
            <Image
              alt="haber1"
              width={500}
              height={500}
              src={selectedNews[2]}
              className="rounded-lg"
            />
            <div className="w-full h-full bg-black/30 absolute top-0"></div>
          </div>
          <p className="text-sm text-white/80 ">
            {selectedNews[1].slice(0, 115) + "..."}
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-1 w-full h-full  break-all">
          <div
            onClick={() => figureNews(nextNews, selectedNews, nextNews2)}
            className="flex-1 relative flex justify-center items-center cursor-pointer "
          >
            <h3 className="text-[10px] px-2 bg-black/70 backdrop-blur-[1px] top-0 pt-1 rounded-t-lg z-10 absolute ">
              {nextNews[0]}
            </h3>
            <div className="relative w-full">
              <Image
                alt="haber2"
                width={150}
                height={130}
                src={nextNews[2]}
                className="w-full rounded-lg"
              />
              <div className="w-full h-full bg-black/30 absolute top-0"></div>
            </div>
          </div>
          <div
            onClick={() => figureNews(nextNews2, nextNews, selectedNews)}
            className="flex-1 border-t border-white/50 relative flex justify-center items-center cursor-pointer "
          >
            <h3 className="text-[10px] z-10 px-2 bg-black/30 backdrop-blur-[1px] rounded-t-lg top-5 pt-1 absolute font-semibold">
              {nextNews2[0]}
            </h3>
            <div className="relative w-full">
              <Image
                alt="haber3"
                width={100}
                height={100}
                src={nextNews2[2]}
                className="w-full rounded-lg"
              />
              <div className="w-full h-full bg-black/30 absolute top-0"></div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default NewsClient;
