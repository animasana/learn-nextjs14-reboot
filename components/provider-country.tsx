import { HOW_TO_BUY } from "../app/constants";
import styles from "../styles/provider-country.module.css";
import ProviderLogos from "./provider-logos";

interface IProviderCountryProps {
  id: string;
  country: string;  
}

export default function ProviderCountry({id, country}: IProviderCountryProps) {
  return (    
    <div className={styles.container}>        
      <h1 className={styles.title}>{country}</h1>
      {
        HOW_TO_BUY.map(
          how => <ProviderLogos key={id} id={id} country={country} purchaseType={how} />
        )
      }      
    </div>    
  );  
}