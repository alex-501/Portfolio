import styles from "./Footer.module.css";
import { footerData } from "./footerData";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            {footerData.map((data, i) => (
                <a
                    key={i}
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.icon}
                </a>
            ))}
        </footer>
    );
};

export default Footer;
