import Link from "next/link";
import { getMovie } from "../../../../../components/movie-info";
import ProviderLogos from "../../../../../components/provider-logos";
import { MOVIE_NOT_FOUND } from "../../../../constants";
import styles from "./providers.module.css";

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
        <div>
            <Link prefetch href={`/movies/${id}`}>&larr; Back to the movie info</Link>
        </div>
        <div>
          <h1 className={styles.korea}>KR</h1>
          <ProviderLogos id={id} country="KR" purchaseType="buy" />
          <ProviderLogos id={id} country="KR" purchaseType="rent" />
          <ProviderLogos id={id} country="KR" purchaseType="flatrate" />

          <h1 className={styles.usa}>US</h1>
          <ProviderLogos id={id} country="US" purchaseType="buy" />
          <ProviderLogos id={id} country="US" purchaseType="rent" />
          <ProviderLogos id={id} country="US" purchaseType="flatrate" />
        </div>
      </div>
    </div>
    );  
}