import Credit from "./credit";
import styles from "../styles/credits.module.css"
import { API_URL, DUMMY_PERSON } from "../app/constants";
import Link from "next/link";
import { BackButton } from "./movie-providers-client";

export async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();  
}

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getCredits(id);

  return (
    <>
      <BackButton id={id} />
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