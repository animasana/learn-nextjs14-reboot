import { Suspense } from "react"
import MovieProviders from "../../../../../components/movie-providers"
import MovieProvidersClient from "../../../../../components/movie-providers-client"

export const metadata = {
  title: "Providers",
}

interface IParmas {
  params: { id: string }
}

export default async function Providers({ params: { id } }: IParmas) {
  // return (
  //   <Suspense fallback={<h1>Loading Movie Providers...</h1>}>
  //     <MovieProviders id={id} />
  //   </Suspense>  
  // );
  return (
    <Suspense fallback={<h1>Loading Movie Providers...</h1>}>
      <MovieProvidersClient id={id} >
        <MovieProviders id={id} />
      </MovieProvidersClient>
    </Suspense>
  )
}