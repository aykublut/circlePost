"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IoVolumeMute } from "react-icons/io5";
import { AiFillSound } from "react-icons/ai";
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
import { boolean } from "zod";
import { useState } from "react";

const projects = [
  {
    title: "izle",
    description:
      "kullanicilarin etkileşime girebildiği bir film değerlendirme sitesi",
    link: "https://izle.vercel.app/",
    logo: "/contact/izle.png",
  },
  {
    title: "scenesThemes",
    description: "Filmlerin kesitlerini ve müziklerini derleyen bir site",
    link: "https://scenes-themes.vercel.app/",
    logo: "/contact/scenesThemesU.png",
  },
  {
    title: "Yerli Spotify",
    description: "Müziklerimi derlediğim kişisel bir site.",
    link: "https://aykublut.github.io/sound-player/",
    logo: "/contact/yerliSpotify.png",
  },
];

const AboutPage = () => {
  const [muted, setMuted] = useState<boolean>(false);
  return (
    <div className="bg-transparent text-white min-h-screen flex flex-col justify-center md:flex-row ">
      <audio
        muted={muted}
        src="/odin.mp3"
        autoPlay
        loop
        controls={false}
        className="hidden"
      />
      {/* Sol: Profil Fotoğrafı */}
      <div className="relative w-full md:w-1/3 min-h-screen xl:flex justify-center  hidden items-end ">
        <div
          className={`absolute top-37 left-90 rounded-full p-1 ${
            muted === false ? "opacity-20" : "opacity-70"
          } cursor-pointer bg-white/10 hover:bg/white/30`}
        >
          {muted ? (
            <IoVolumeMute size={50} onClick={() => setMuted(!muted)} />
          ) : (
            <AiFillSound size={50} onClick={() => setMuted(!muted)} />
          )}
        </div>
        <Image
          src="/odinFire.png"
          alt="Profile"
          width={510}
          height={399}
          className="object-cover max-h-screen"
        />
      </div>

      {/* Sağ: İçerik ve Projeler */}
      <div className="w-full max-sm:px-5   max-md:pt-20 md:w-2/3 px-8  md:pt-15 flex justify-center flex-col gap-12">
        {/* Intro */}
        <div>
          <h1 className="xl:text-5xl text-4xl te font-bold mb-6">
            Merhaba, Ben Aykut
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl">
            Fullstack projeler geliştirmeye çalışıyorum.
          </p>
        </div>

        {/* Projects */}
        <div>
          <h2 className="text-3xl font-semibold pb-5">Son Projelerim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/5 border border-white/10 hover:bg-white/10 flex-row justify-between pr-11 transition-all shadow-none rounded-xl cursor-pointer"
                onClick={() => window.open(project.link, "_blank")}
              >
                <div>
                  <CardHeader className="flex items-center">
                    <h3 className="text-xl text-white font-semibold">
                      {project.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mt-2 ">{project.description}</p>
                  </CardContent>
                </div>

                <Avatar className="w-20 h-20 border border-white/40">
                  <AvatarImage src={project.logo} />
                  <AvatarFallback>..</AvatarFallback>
                </Avatar>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
