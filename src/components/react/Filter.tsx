const Filter = ({ categories, handleFilter, handleFilterReset }) => {
  return (
    <div>
      <form className="filter mb-4 md:mb-6">
        <input className="btn filter-reset" type="radio" name="categories" aria-label="All" onChange={handleFilterReset} />
        {categories.map((category, index) => (
          <input key={index} className="btn mb-1" type="radio" name="categories" aria-label={category} onChange={() => handleFilter(category)} />
        ))}
      </form>
    </div>
  );
};

export default Filter;
