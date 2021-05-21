import styles from "./resume.module.css";
import { backEndSkills, frontEndSkills } from "./skills";
const Resume = () => {
    return (
        <section className={styles.resume}>
            <div className={styles.heading}>
                <h2>My Resume</h2>
            </div>

            <p className={styles.resume__link}>
                Download My{" "} 
                <a
                    className={styles.button}
                    // ADD GOOGLE DRIVE RESUME WHEN UPDATED
                    href="https://www.linkedin.com/in/justinbeard1989/"
                >
                    Resume
                </a>{" "} Here
            </p>

            <div className={styles.frontEnd}>
                <h2 className={styles.frontEndHeader}>Front-End Skills</h2>
                <ul className={styles.list}>
                    {frontEndSkills.map((skill, i) => (
                        <li key={i} className={styles.listItem}>
                            {skill.title}
                            <span> {skill.icon}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.backend}>
                <h2 className={styles.backendHeader}>Back-End Skills</h2>
                <ul className={styles.list}>
                    {backEndSkills.map((skill, i) => (
                        <li key={i} className={styles.listItem}>
                            {skill.title}
                            <span> {skill.icon}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Resume;
