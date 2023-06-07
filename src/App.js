import "./App.css";
import { useContext, useEffect } from "react";
import MoviesContext from "./storage/MoviesContext";
import { getMovies } from "./service/moviesService";
 
function App() {
  const movieContext = useContext(MoviesContext);
  useEffect(() => {
    getMovies().then((data) => movieContext.updateMovie(data));
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default App;