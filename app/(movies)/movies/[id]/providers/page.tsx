import Link from "next/link";
import { getMovie } from "../../../../../components/movie-info";
import { MOVIE_NOT_FOUND } from "../../../../constants";
import styles from "./providers.module.css";
import ProviderCountry from "../../../../../components/provider-country";

export const metadata = {
  title: "Providers",
}

interface IParmas {
  params: { id: string }
}

export default async function Providers({ params: { id } }: IParmas) {
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