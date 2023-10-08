import Seo from "@/components/Seo";
import { useEffect, useState } from "react";

const API_KEY = "API_KEY";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const fetchMovie = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };
    const response = await fetch(url, options);
    const { results } = await response.json();
    setMovies(results);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div>
      <Seo title="Home" />
      {!movies.length && <h4>Loading...</h4>}
      {movies.map((movie) => (
        <div key={movie.id}>{movie.original_title}</div>
      ))}
    </div>
  );
}
