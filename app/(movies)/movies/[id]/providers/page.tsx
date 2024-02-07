import { Suspense } from "react"
import MovieProviders from "../../../../../components/movie-providers"

export const metadata = {
  title: "Providers",
}

interface IParmas {
  params: { id: string }
}

export default async function Providers({ params: { id } }: IParmas) {
  return (
    <Suspense fallback={<h1>Loading Movie Providers...</h1>}>
      <MovieProviders id={id} />
    </Suspense>  
  );
}