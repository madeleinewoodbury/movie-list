import React from "react";

const Movie = ({ match }) => {
  console.log(match.params.id);
  return (
    <div>
      <h1>Movie page</h1>
    </div>
  );
};

export default Movie;
