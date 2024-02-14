import Link from "next/link";
import { API_URL, MOVIE_NOT_FOUND } from "../app/constants";
import Movie from "./movie";
import styles from "../styles/similar-movies.module.css";
import { BackButton } from "./movie-providers-client";

const getSimilarMovies = async (id: string) => {  
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();  
}

function MoviesList({ movies }) {
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
  if (similarMovies.length > 0) {
    return (
      <>
        <BackButton id={id} />
        <MoviesList movies={similarMovies} />
      </>
    )
  }
  return (    
    <>      
      <h1 className={styles.not_found}>Movie Not Found!!!</h1>            
    </>
  );
}