import { HOW_TO_BUY } from "../app/constants";
import styles from "../styles/provider-country.module.css";
import ProviderLogos from "./provider-logos-01.tsx";
import {v4 as uuidv4, v5 as uuidv5} from 'uuid';

interface IProviderCountryProps {
  id: string;
  country: string;  
}

export function getUUIDV5(how: string): string {  
  const MY_NAMESPACE = uuidv4();  
  return uuidv5(how, MY_NAMESPACE);
}

export default function ProviderCountry({id, country}: IProviderCountryProps) {
  return (    
    <div className={styles.container}>        
      <h1 className={styles.title}>{country}</h1>
      {
        HOW_TO_BUY.map(
          how => <ProviderLogos key={getUUIDV5(how)} id={id} country={country} purchaseType={how} />
        )
      }      
    </div>    
  );  
}