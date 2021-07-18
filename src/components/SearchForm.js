import React, { useState } from "react";

const SearchForm = ({ handleSearch }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form className='d-flex' onSubmit={handleSubmit}>
        <input
          className='form-control'
          type='text'
          placeholder='Search movie title'
          name='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className='btn btn-secondary' type='submit'>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
