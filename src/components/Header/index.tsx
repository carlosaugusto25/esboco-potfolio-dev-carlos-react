import styles from './header.module.scss'

export function Header() {
    return (
        <header className={styles.container}>
            <p className={styles.title}>DNC</p>
            <div className={styles.content}>
                <nav className={styles.nav}>
                    <a href="">contato</a>
                    <a href="">sobre mim</a>
                    <a href="">projetos</a>
                    <a href="">home</a>
                </nav>
                <h1 className={styles.titleContent}>front-end.web(devloper)</h1>
            </div>
        </header>
    )
}