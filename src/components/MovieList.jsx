import { useState } from "react";
import { getAllMovies } from "../Data/Movies";
import MovieCart from "./MovieCart";
import MovieDetails from "./MovieDetails";
import { useCarts } from "../hooks/useCarts";
import { toast } from "react-toastify";

const MovieList = () => {
  const movies = getAllMovies();
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [error, setError] = useState("");
  const [movieDetails, setMovieDetails] = useState(null);
  const { cartData, setCartData } = useCarts();
  const handleMovieDetails = (movie) => {
    setMovieDetails(movie);
    setShowMovieDetails(true);
  };
  const handleAddToCart = (e, movie) => {
    e.stopPropagation();
    console.log(movie);
    const found = cartData.find((item) => {
      return item.id === movie.id;
    });
    if (!found) {
      setCartData([...cartData, movie]);

      toast(`Movie ${movie.title} added successfully`, {
        position: "bottom-right",
        type:"success"
      });
    } else {
      toast(`The movie ${movie.title} has been added to the cart already!`, {
        position: "bottom-right",
        type:"error"
      });
    }

    setShowMovieDetails(false);
  };

  return (
    <>
      {showMovieDetails && (
        <MovieDetails
          movieDetails={movieDetails}
          onClose={setShowMovieDetails}
          handleAddToCart={handleAddToCart}
        />
      )}
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movies.map((movie) => (
            <MovieCart
              movie={movie}
              onMovieDetails={handleMovieDetails}
              key={movie.id}
              handleAddToCart={handleAddToCart}
            />
          ))}
          <div>
            <p
              onClick={() => setError("")}
              className={`text-3xl text-red-500 font-bold p-3 ${
                error && "bg-gray-900 border-2 rounded-md shadow-sm"
              }`}
            >
              {error}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
