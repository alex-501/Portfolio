import React from "react";
import styles from "./portfolio.module.css";
import { AiFillGithub } from "react-icons/ai";

const PortfolioItem = ({ item }) => {
    return (
        <div className={styles.portfolioItem}>
            <img src={item.image} alt={item.title} />

            <div className={styles.portfolioItem__details}>
                <a
                    href={item.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live site link"
                >
                    {item.title}
                </a>
                <a
                    href={item.githubLink}
                    rel="noreferrer noopener"
                    target="_blank"
                    aria-label="Github Link"
                >
                    <AiFillGithub />
                </a>

                <p>{item.description}</p>
            </div>
        </div>
    );
};

export default PortfolioItem;
