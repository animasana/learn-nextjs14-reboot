import Credit from "./credit";
import styles from "../styles/credits.module.css"
import { API_URL, DUMMY_PERSON } from "../app/constants";

export async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();  
}

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getCredits(id);

  return (
    <>
      <div className={styles.anchor_back}>
        <a href={`/movies/${id}`}>&larr; Back to the movie info</a>
      </div>
      <div className={styles.container}>      
        {credits.map(credit => 
          <Credit 
            key={credit.id}
            name={credit.name} 
            character={credit.character}          
            profile_path={credit.profile_path ?? DUMMY_PERSON} 
          />
        )}
      </div>
    </>
  );
}