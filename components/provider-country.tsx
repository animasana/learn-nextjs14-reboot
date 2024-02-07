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
      <ProviderLogos id={id} country={country} purchaseType="buy" />
      <ProviderLogos id={id} country={country} purchaseType="rent" />
      <ProviderLogos id={id} country={country} purchaseType="flatrate" />        
    </div>    
  );  
}