import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../Components/MovieCard";


function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorite</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}
  return (
    <div className="favorites-empty">
    <h2>No Favorite Movie Yet</h2>
    <p>Start adding movies to your favorite and they will appear here</p>
  </div>
  );
}

export default Favorites;