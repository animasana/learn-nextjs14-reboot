import styles from "../styles/credit.module.css";

interface ICreditProps {  
  name: string;
  character: string;
  profile_path: string;
}

export default function Credit({name, character, profile_path }: ICreditProps) {  
  return (
    <div className={styles.credit}>      
      <img src={profile_path} alt={name} />              
      <h3>{name}</h3>
      <h3>({character})</h3>
    </div>
  );
}