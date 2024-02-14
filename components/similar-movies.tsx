import { API_URL } from "../app/constants";
import styles from "../styles/similar-movies.module.css";
import { BackButton } from "./movie-providers-client";
import { MoviesList } from "./movies";

const getSimilarMovies = async (id: string) => {  
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();  
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