import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
  title: 'Home',  
}

const getMovies = async () => {
  //await new Promise((resolve) => setTimeout(resolve, 10_000));
  const response = await fetch(API_URL);
  return response.json();  
}

export default async function Page() {
  const movies = await getMovies()
  return (
    <div className={styles.container}>        
      {
        movies.map(movie => 
          <Movie 
            key={movie.id} 
            id={movie.id} 
            title={movie.title} 
            poster_path={movie.poster_path} 
          />
        )
      }      
    </div>
  );
}