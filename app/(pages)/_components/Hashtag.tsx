const Hashtag = () => {
  const hashtags = [
    "#borsa",
    "#imamoglu",
    "#suriye",
    "#abd",
    "#odtukapatilsin",
    "#t*r*r*stselo",
    "#oeisrail",
    "#pasinyan",
    "#oealmanya",
    "#astor",
  ];

  return (
    <div className="flex gap-2 flex-wrap  items-center justify-center">
      {hashtags.map((tag, index) => (
        <span
          key={index}
          className="px-3 py-1 border border-white w-[40%]  bg-transparent text-white rounded-full text-[16px] hover:bg-white/30 cursor-pointer break-all"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Hashtag;
