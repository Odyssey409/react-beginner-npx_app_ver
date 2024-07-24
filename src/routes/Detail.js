import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setMovie(json.data.movie);
      setLoading(false);
      console.log(movie);
    };
    getMovie();
  }, [id, movie]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <p>{movie.description_full}</p>
          <ul>
            {movie.genres?.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <span>rating: {movie.rating}/10</span>
          <br></br>
          <span>runtime: {movie.runtime} mins</span>
        </div>
      )}
    </div>
  );
}

export default Detail;
