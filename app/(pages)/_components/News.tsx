import NewsClient from "./_news/NewsClient";

const NewsPage = async () => {
  const res = await fetch(
    `https://api.thenewsapi.com/v1/news/top?locale=tr&language=en&api_token=${process.env.NEWS_API_KEY}`
  );
  const data = await res.json();

  return (
    <div className="w-full pt-[5px] h-full flex-wrap">
      <NewsClient data={data} />
    </div>
  );
};

export default NewsPage;
