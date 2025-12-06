import Card from "../react/Card";
import Filter from "./Filter";

const ArticlesList = ({ articles, categories }) => {
  return (
    <>
      <Filter categories={categories} />
      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-5 lg:grid-cols-4">
        {articles.map((article: any) => (
          <Card title={article.title} tags={article.tags} url={article.url} />
        ))}
      </div>
    </>
  );
};

export default ArticlesList;
