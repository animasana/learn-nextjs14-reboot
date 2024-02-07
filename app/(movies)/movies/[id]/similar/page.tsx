import { Suspense } from "react";
import SimilarMovies from "../../../../../components/similar-movies";

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


  
