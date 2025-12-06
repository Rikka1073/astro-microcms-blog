const Filter = ({ categories }) => {
  console.log("reactテスト", categories);
  return (
    <div>
      <form className="filter mb-4 md:mb-6">
        <input className="btn btn-square" type="reset" value="×" />
        {categories.map((categorie, index) => (
          <input key={index} className="btn mb-1" type="radio" name="categories" aria-label={categorie} />
        ))}
      </form>
    </div>
  );
};

export default Filter;
