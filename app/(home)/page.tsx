import Link from "next/link";

export const metadata = {
  title: 'Home',  
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
  //await new Promise((resolve) => setTimeout(resolve, 10_000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json
}

export default async function Page() {
  const movies = await getMovies()
  return (
    <div>
      <h1>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </h1>
    </div>
  );
}