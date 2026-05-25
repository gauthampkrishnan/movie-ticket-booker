import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let moviesList = [
      {
        id: 1,
        title: "High",
        releaseDate: "1986-03-07",
        runtime: 116,
        mpaa_rating: "R",
        description: "Some long desc",
      },
      {
        id: 2,
        title: "Rat",
        releaseDate: "1981-03-07",
        runtime: 113,
        mpaa_rating: "R",
        description: "Some long desc",
      },
      {
        id: 3,
        title: "Rat ",
        releaseDate: "1981-03-07",
        runtime: 113,
        mpaa_rating: "R",
        description: "Some long desc",
      },
    ];
    setMovies(moviesList);
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      <hr />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Release Date</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((m) => (
            <tr key={m.id}>
              <td>
                <Link to={`/movies/${m.id}`}>{m.title}</Link>
              </td>
              <td>{m.releaseDate}</td>
              <td>{m.mpaa_rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Movies;
