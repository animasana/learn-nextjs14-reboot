import Link from "next/link";
import { API_URL, MOVIE_NOT_FOUND } from "../app/constants";
import Movie from "./movie";
import styles from "../styles/similar-movies.module.css";

const getSimilarMovies = async (id: string) => {  
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();  
}

function SimilarMovie({ movies }) {
  return (
    <div className={styles.container}>         
      {movies.map(movie => 
        <Movie 
          key={movie.id} 
          id={movie.id} 
          title={movie.title} 
          poster_path={movie.poster_path ?? MOVIE_NOT_FOUND} 
        />            
      )}
    </div> 
  );
}

export default async function SimilarMovies({ id }: { id: string }) {
  const similarMovies = await getSimilarMovies(id);
  return (
    <>       
      <span className={styles.anchor_back}>        
        <Link prefetch href={`/movies/${id}`}>&larr; Back to the movie info</Link>
      </span>      
      { 
        (similarMovies.length !== 0) ?
        <SimilarMovie movies={similarMovies} /> : 
        <h1 className={styles.not_found}>Movie Not Found!!!</h1>          
      }      
    </>
  );
}