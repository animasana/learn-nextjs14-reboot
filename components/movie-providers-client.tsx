'use client';

import { useEffect, useRef, useState } from "react";
import { TCountryCode, getCountryData } from "countries-list";
import styles from '../styles/providers.module.css';
import Link from "next/link";
import { API_URL } from "../app/constants";
import {v4 as uuidv4, v5 as uuidv5} from 'uuid';

export function getUUIDV5(how: string): string {
  if (how) {
    const MY_NAMESPACE = uuidv4();  
    return uuidv5(how, MY_NAMESPACE);
  }
  return uuidv4();
}

export function BackButton({ id }: { id: string }) {
  return (    
    <span className={styles.anchor_back}>
      <Link prefetch href={`/movies/${id}`}>&larr; Back to the movie info</Link>
    </span>    
  )
}

export function NotFoundMessage({ text }: { text: string }) {
  return <h1 className={styles.not_found}>{text}</h1>;
}

export async function getProviders(id: string) {
  const response = await fetch(`${API_URL}/${id}/providers`);
  return response.json();
}

function getCodeAndName(providers) {
  return Object.keys(providers).map(key => {
    const countryData = getCountryData(key as TCountryCode);    
    return [key, countryData.name];
  });
}

function Capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function MovieProvidersClient({ children, id }: { children: React.ReactNode, id: string }) {  
  const [countrySelected, setCountrySelected] = useState("");
  const [purchaseTypes, setPurchaseTypes] = useState([]);
  const [purchaseType, setPurchaseType] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const countriesRef = useRef([[]]);
  const providersRef = useRef({});

  useEffect(() => {
    const fetchData = async (id: string) => {
      const providers = await getProviders(id); 
      if (Object.keys(providers).length !== 0) {
        providersRef.current = providers;
        countriesRef.current = getCodeAndName(providersRef.current);

        const firstCountry = countriesRef.current[0][0]; //[[], [], []...]
        setCountrySelected(firstCountry);      
        setPurchaseTypes(Object.keys(providersRef.current?.[firstCountry])?.filter(p => p != 'link'));          
      }
      setIsLoading(false);
    }
    fetchData(id);    
  }, [id]);

  // purchaseTypes 상태가 업데이트될 때마다 첫 번째 구매 유형을 선택하는 useEffect
  useEffect(() => {    
    setPurchaseType(purchaseTypes[0]);    
  }, [purchaseTypes]);
  
  useEffect(() => {
    const purchases = [];
    for (const purchase in providersRef.current[countrySelected]) {
      purchases.push(purchase);            
    }
    setPurchaseTypes(purchases.filter(p => p !== 'link'));    
  }, [countrySelected]);

  const handleCountrySelectChange = (event) => {    
    setCountrySelected(event.target.value);
  }

  const handlePurchaseSelectChange = (event) => {    
    setPurchaseType(event.target.value);
  }

  const countryOptions = countriesRef.current.map(country => (
    // 0: 두자리 국가 코드 1: 국가명
    <option key={getUUIDV5(country[0])} value={country[0]}>{country[1]}</option>
  ));

  const purchaseOptions = purchaseTypes?.map(pType => (
    <option key={getUUIDV5(pType)} value={pType}>{Capitalize(pType)}</option>
  ));

  const providerIcons = providersRef.current[countrySelected]?.[purchaseType]?.map((provider) => (     
    <span key={provider["provider_id"]} className={styles.icon}>
      <img         
        src={provider.logo_path.startsWith("http://") ? 
          provider.logo_path : 
          `https://image.tmdb.org/t/p/w300/${provider.logo_path}`} 
        alt={provider["provider_name"]}
      />
      <figcaption>{provider["provider_name"]}</figcaption>
    </span>    
  ));

  return (    
    <>      
      <BackButton id={id} />
      <div className={styles.container}>
        {children}
        {Object.keys(providersRef.current).length !== 0 ? (
          <div>
            <label htmlFor="country">Choose a country: </label>
            <select id="country-select" className={styles.select} value={countrySelected} onChange={handleCountrySelectChange}>
              {countryOptions}
            </select>
            <select id="purchase-type" value={purchaseType} onChange={handlePurchaseSelectChange}>
              {purchaseOptions}
            </select>        
            <div className={styles.icon_container}>
              {providerIcons}
            </div>
          </div>
        ) : (          
          <div>
            <NotFoundMessage 
              text={isLoading ? "Loading Icons..." : "Provider Not Found"} 
            />
          </div>
        )}
      </div>
    </>    
  );
}