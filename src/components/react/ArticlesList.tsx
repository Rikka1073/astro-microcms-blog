import Card from "../react/Card";

const ArticlesList = ({ articles }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-5 lg:grid-cols-4">
      {articles.map((article: any) => (
        <Card title={article.title} tags={article.tags} url={article.url} />
      ))}
    </div>
  );
};

export default ArticlesList;
