import styles from "./about-us.module.css";
export const metadata = {
  title: 'About Us',  
}
export default function AboutUsLayout({ children, }: { children: React.ReactNode }) {
  return (
    <div>        
      {children}
      <h1 className={styles.copyright}>&copy; Next JS is great!</h1>
    </div>    
  );
}
