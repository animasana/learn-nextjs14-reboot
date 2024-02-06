import Link from "next/link";
import Movie from "../../../../../components/movie";
import styles from "./similar-movies.module.css";
import { API_URL, MOVIE_NOT_FOUND } from "../../../../constants";

const getSimilarMovies = async (id: string) => {  
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();  
}

interface IParams {
  params: { id: string }; 
}

export default async function SimilarMovies({ params: { id } }: IParams) {
  const similarMovies = await getSimilarMovies(id);
  return (
    <>       
      <span className={styles.anchor_back}>        
        <Link prefetch href={`/movies/${id}`}>&larr; Back to the movie info</Link>
      </span>      
      { 
        (similarMovies.length !== 0) ?
        <div className={styles.container}>         
          {
            similarMovies.map(movie => 
              <Movie 
                key={movie.id} 
                id={movie.id} 
                title={movie.title} 
                poster_path={movie.poster_path ?? MOVIE_NOT_FOUND} 
              />            
            ) 
          }
        </div> 
        : 
        <h1 className={styles.not_found}>Movie Not Found!!!</h1>          
      }      
    </>
  );
}


  
