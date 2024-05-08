import React from "react";
import { article } from "./types";
import { formatDate } from "./utils";

const ArticleCard = ({ article }: { article: article }) => {
  return (
    <div className="flex flex-col bg-white border border-gray-500 p-4 w-1/2">
      <div className="flex gap-5">
        <img
          className="w-14 h-14 object-cover rounded-full"
          src={article.urlToImage}
          alt={article.title}
        />
        <div className="flex flex-col">
          <div className="font-semibold">{article.title}</div>
          <div className="font-medium">{article.author}</div>
        </div>
      </div>

      <div className="">{article.description}</div>
      <div className="flex justify-between">
        <div>{formatDate(article.publishedAt)}</div>
        <div>{article.source.name}</div>
      </div>
    </div>
  );
};

export default ArticleCard;
