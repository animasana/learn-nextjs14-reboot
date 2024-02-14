import { Suspense } from "react";
import Movies from "../../components/movies";

export const metadata = {
  title: 'Home',  
}

export default async function Home() {
  return (
    <Suspense fallback={<h1>Movies Home Loading...</h1>}>
      <Movies />
    </Suspense>        
  );
}