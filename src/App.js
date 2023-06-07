import "./App.css";
import { useContext, useEffect } from "react";
import MoviesContext from "./storage/MoviesContext";
import { getMovie, getMovies } from "./service/moviesService";
import { Route, Routes } from "react-router-dom";
import AllMovies from "./pages/AllMovies";
import SignIn from "./register/SignIn";
import SignUp from "./register/SignUp";
import UserContext from "./storage/UserContext";

function App() {
  const movieContext = useContext(MoviesContext);
  const { signedIn } = useContext(UserContext);
  console.log(signedIn);

  useEffect(() => {
    if (signedIn) {
      getMovies().then(({ data }) => {
        movieContext.updateMovie(data.data);
      });
    }
  }, [signedIn]);

  return (
    <Routes>
      <Route
        index
        element={<AllMovies movies={movieContext} singedIn={signedIn} />}
      ></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
    </Routes>
  );
}

export default App;
