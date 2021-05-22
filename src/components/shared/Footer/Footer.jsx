//footer plus styles
import { footerData } from "./footerData";  import styles from "./Footer.module.css";
const Footer = () => {return (
<footer className={styles.footer}>     {footerData.map((data, i) => (
                <a     key={i}      href={data.link}    target="_blank"   rel="noopener noreferrer">
                    {data.icon} </a> ))}
</footer>);};
export default Footer;
//EXPORT FOOTER