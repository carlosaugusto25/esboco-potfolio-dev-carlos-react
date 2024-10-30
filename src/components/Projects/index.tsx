import styles from './projects.module.scss';

export function Projects() {
    return (
        <section className={styles.container}>
            <div className={styles.textContainer}>
                <h2>Projetos</h2>
                <div className={styles.borderText} />
            </div>
        </section>
    )
}