import { API_URL, MOVIE_NOT_FOUND } from "../app/constants";
import styles from "../styles/providers.module.css"

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieProviders({ id }: { id: string }) {
  const movie = await getMovie(id);
  const isPosterNull = movie.poster_path === "https://image.tmdb.org/t/p/w780null"; 

  return (
    <div>
      <img 
        src={isPosterNull ? MOVIE_NOT_FOUND : movie.poster_path} 
        className={styles.poster} 
        alt={movie.title} 
      />      
    </div>
  );
}