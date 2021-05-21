//react and styles
import React from "react";
import styles from "./About.module.css";

const About = () => { return ( <section className={styles.about}> <div className={styles.heading}>
                <h2 aria-label="About-me-section">About Me</h2></div>
   <div className={styles.content}>                <div className={styles.content__img}>
                    <img src="https://i.ibb.co/frJbW3g/20190227-125039.jpg"alt="..."
                        title="Portfolio Image"  /> </div>
                <h3 className={styles.content__header}>
                    I'm a Full Stack Web Developer.
                </h3>                     <p>
              I decided to attend The UofA Coding Bootcamp after volunteering for the Conservation Corps.            </p></div>
        </section>);};
//export about
export default About;
