import { Suspense } from "react"
import MovieCredits from "../../../../../components/movie-credits";

export const metadata = {
  title: "Credits",
}

interface IParmas {
  params: { id: string }
}

export default function Credits({ params: { id } }: IParmas) {
  return (
    <Suspense fallback={<h1>Loading Movie Credits...</h1>}>
      <MovieCredits id={id} />
    </Suspense>
  );  
}