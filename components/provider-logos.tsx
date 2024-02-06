import { API_URL } from "../app/constants";
import styles from "../styles/provider-logos.module.css";

export async function getProviders(id: string) {
  const response = await fetch(`${API_URL}/${id}/providers`);
  return response.json();
}

interface IProviderProps {
  id: string;
  country: string;
  purchaseType: string;
}

export default async function ProviderLogos({id, country, purchaseType}: IProviderProps) {
  const providers = await getProviders(id);  

  return (          
    <div className={styles.container}>
      <div>        
        <h1 className={styles.purchase_type}>{purchaseType.toUpperCase()}</h1>
      </div>
      <div className={styles.logo}>
        {
          providers[country] && providers[country][purchaseType] ?
          providers[country][purchaseType].map(
            provider => 
              <img 
                key={provider["provider_id"]} 
                src={provider.logo_path.startsWith("http://") ? provider.logo_path : `https://image.tmdb.org/t/p/w300/${provider.logo_path}`} 
              />
          ) : (
            <h1>Provider가 없습니다.</h1>
          )
        }
      </div>
    </div>    
  );  
}