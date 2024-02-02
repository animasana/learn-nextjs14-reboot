import Link from "next/link";
import { API_URL } from "../../../../(home)/page";
import Movie from "../../../../../components/movie";
import styles from "./similar-movies.module.css";

const getSimilarMovies = async (id: string) => {  
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();  
}

interface IParams {
  params: { id: string }; 
}

export const movieNotFound = "https://media.istockphoto.com/id/1265221960/sv/vektor/sidan-hittades-inte-fel-med-filmflik-design.jpg?s=2048x2048&w=is&k=20&c=dF66Bt4iCOp0fLi9rhELI4QjJV0rMAc21fhklu7kdoA="

export default async function SimilarMovies({ params: { id } }: IParams) {
  const similarMovies = await getSimilarMovies(id);
  return (
    <>       
      <span className={styles.anchor_back}>        
        <Link href={`/movies/${id}`}>&larr; Backt to the movie info</Link>
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
                poster_path={movie.poster_path ?? movieNotFound} 
              />            
            ) 
          }
        </div> 
        : 
        <h1 className={styles.not_found}>Movies Not Found!!!</h1>          
      }      
    </>
  );
}


  
