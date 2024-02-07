import { Suspense } from "react"
import MovieCredits from "../../../../../components/movie-credits";
import { getMovie } from "../../../../../components/movie-info";

interface IParams {
  params: { id: string}
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: `\"${movie.title}\" Credits`,
  }
}

export default function Credits({ params: { id } }: IParmas) {
  return (
    <Suspense fallback={<h1>Loading Movie Credits...</h1>}>
      <MovieCredits id={id} />
    </Suspense>
  );  
}