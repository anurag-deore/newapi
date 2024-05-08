import { useEffect, useState } from "react";
import { article } from "./types";
import ArticleCard from "./Article-card";

function App() {
  const [articles, setArticles] = useState<article[]>([]);
  const [page, setPage] = useState(1);

  const fetchArticles = async () => {
    const url = `https://newsapi.org/v2/everything?q=tesla&pageSize=10&page=${page}&apiKey=02b1f47907c840bfba01d8d693986b3d`;
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setArticles((prevArticles) => [...prevArticles, ...data.articles]);
        setPage((prevPage) => prevPage + 1);
      });
  };
  useEffect(() => {
    fetchArticles();
    // window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle the scroll event
  // const handleScroll = () => {
  //   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //     // setPage((prevPage) => prevPage + 1);
  //     fetchArticles();
  //   }
  // };

  return (
    <div className="flex flex-col h-full justify-center w-full items-center gap-y-10">
      {articles.map((article: article, i: number) => (
        <ArticleCard key={article.title + i} article={article} />
      ))}
      <button onClick={fetchArticles}>Load more</button>
    </div>
  );
}

export default App;
