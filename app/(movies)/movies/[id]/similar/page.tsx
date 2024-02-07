import { Suspense } from "react";
import SimilarMovies from "../../../../../components/similar-movies";
import { getMovie } from "../../../../../components/movie-info";

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: `The Movies Similar to \"${movie.title}\"`,
  }
}

interface IParams {
  params: { id: string }; 
}

export default async function Similar({ params: { id } }: IParams) {
  return (
    <Suspense fallback={<h1>Loading Similar Movies...</h1>}>
      <SimilarMovies id={id} />
    </Suspense>
  );
}


  
