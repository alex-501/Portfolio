//./portfolioItem
import PortfolioItem from "./PortfolioItem";
import { portfolioItems } from "./portfolioItems";
//styles
import styles from "./portfolio.module.css";


//define
const Portfolio = () => {return (
        <section className={styles.portfolio}> <div className={styles.heading}>       <h2>Portfolio</h2>
                <h4>Class Projects</h4> </div>

            <div className={styles.galleryWrapper}>
         {portfolioItems.map((item, i) => 
                (  <PortfolioItem key={i} item={item} /> ))}    </div>
    <div className={styles.buttonBox}>
                <a href="/" className={styles.button}> See More &rarr;</a> </div> </section> );};
//export Portfolio ^
export default Portfolio;
