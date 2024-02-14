import { API_URL, MOVIE_NOT_FOUND } from "../app/constants";
import styles from "../styles/providers.module.css"
import { TCountryCode, getCountryData } from "countries-list";

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getProviders(id: string) {
  const response = await fetch(`${API_URL}/${id}/providers`);
  return response.json();
}

export default async function MovieProviders({ id }: { id: string }) {
  const movie = await getMovie(id);
  const providers = await getProviders(id); 

  return (
    <div>
      <img 
        src={movie.poster_path === "https://image.tmdb.org/t/p/w780null" 
          ? MOVIE_NOT_FOUND : 
          movie.poster_path
        } 
        className={styles.poster} 
        alt={movie.title} 
      />      
      {/* <div className={styles.logo}>        
        <Link href={`/movies/${id}`}>&larr; Back to the movie info</Link>        
        <ProviderCountry id={id} country="KR" />
        <ProviderCountry id={id} country="US" />        
      </div>       */}
    </div>
  );
}