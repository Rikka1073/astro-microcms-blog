import { useState } from "react";
import Card from "../react/Card";
import Filter from "./Filter";

type Tags = {
  name: string;
  versions: string[];
};

type Categories = {
  name: string;
  tags: Tags;
};

const ArticlesList = ({ articles, categories }) => {
  console.log(articles);
  const [filter, setFilter] = useState<any>(articles);

  const handleFilter = (category: string) => {
    const filteredArticles = articles.filter((article: any) => {
      return article.tags.some((tag: any) => tag.name === category);
    });
    setFilter(filteredArticles);
    console.log("フィルタ", filteredArticles);
  };

  const handleFilterReset = () => {
    setFilter(articles);
    console.log("リセット");
  };

  return (
    <>
      <div className="px-5 md:px-10">
        <Filter categories={categories} handleFilter={handleFilter} handleFilterReset={handleFilterReset} />
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-5 lg:grid-cols-4 py-3 mb-4">
          {filter.map((article: any) => (
            <Card key={article.id} title={article.title} tags={article.tags} url={article.url} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticlesList;
