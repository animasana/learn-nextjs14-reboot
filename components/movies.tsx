import { API_URL } from "../app/constants";
import styles from "../styles/home.module.css";
import Movie from "./movie";

const getMovies = async () => {
  //await new Promise((resolve) => setTimeout(resolve, 10_000));
  const response = await fetch(API_URL);
  return response.json();  
}

export default async function Movies() {
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

