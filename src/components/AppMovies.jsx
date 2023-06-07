import { useContext, useEffect } from "react";
import MoviesContext from "../storage/MoviesContext";
import UserContext from "../storage/UserContext";

const AppMovies = ({movies}) => {
  return (
    <div>
      {movies.movies.map((movie) => {
        return <div>{movie.title}aaaa</div>
      })}
    </div>
  )
};

export default AppMovies;
