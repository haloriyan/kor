'use client'
import styles from "./styles/Section.module.css";

const Section = ({description, title, reversed = false, action = null, image}) => {
    return (
        <>
            <section className={`${styles.Wrapper} ${reversed ? styles.Reverse : ''}`}>
                <img src={image} alt="tes" className={styles.Image} />
                <div className={styles.Content}>
                    {
                        action === null &&
                        <div className={styles.Line} style={{marginBottom: 40}}></div>
                    }
                    <div className={styles.Title}>{title}</div>
                    <pre className={styles.Description}>
                        {description}
                    </pre>
                    {
                        action !== null && action
                    }
                </div>
            </section>
        </>
    )
}

export default Section