import Link from "next/link";
import { getMovie } from "./movie-info";
import ProviderCountry from "./provider-country";
import { MOVIE_NOT_FOUND } from "../app/constants";
import styles from "../styles/providers.module.css"

export default async function MovieProviders({ id }: {id: string}) {
  const movie = await getMovie(id);  

  return (
    <div className={styles.container}>
      <img 
        src={movie.poster_path === "https://image.tmdb.org/t/p/w780null" ? MOVIE_NOT_FOUND : movie.poster_path} 
        className={styles.poster} 
        alt={movie.title} 
      />      
      <div className={styles.logo}>        
        <Link prefetch href={`/movies/${id}`}>&larr; Back to the movie info</Link>        
        <ProviderCountry id={id} country="KR" />
        <ProviderCountry id={id} country="US" />        
      </div>
    </div>
  );
}