import LiveChat from "./_components/LiveChat";
import Post from "./_components/Post";
import Hashtag from "./_components/Hashtag";
import Popular from "./_components/Popular";
import NewsPage from "./_components/News";

export default function Home() {
  return (
    <div className="pt-18 px-20 flex gap-1 min-h-screen text-white">
      <div className="flex gap-1  w-full border-white/50 border-x">
        <div className="flex flex-col gap-1 flex-4 ">
          <div className="flex-1 flex relative justify-center">
            <h3 className="absolute -top-[5px] z-20 bg-black px-2 rounded-2xl font-extralight text-[12px]">
              News
            </h3>
            <NewsPage />
          </div>
          <div className=" flex-1 flex relative justify-center border-white/50 border-t">
            <h3 className="absolute -top-[5px] z-20 bg-black px-2 rounded-2xl font-extralight text-[12px]">
              LiveChat
            </h3>
            <LiveChat />
          </div>
        </div>
        <div className="flex backdrop-blur-[2px] bg-black/50 flex-5 border-white/50 border-x ">
          <Post />
        </div>
        <div className="flex flex-4   flex-col">
          <div className=" flex-3 flex justify-center items-center border-white/50 border-b px-7 py-3">
            <Hashtag />
          </div>
          <div className="flex flex-5">
            <Popular />
          </div>
        </div>
      </div>
    </div>
  );
}
