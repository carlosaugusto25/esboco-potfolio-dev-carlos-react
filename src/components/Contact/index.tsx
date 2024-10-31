import styles from './contact.module.scss';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';

export function Contact() {
    return(
        <footer className={styles.container}>
            <h2>Contato</h2>
            <div className={styles.content}>
                <a href="http://www.linkedin.com/in/carlos-augusto-dev" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin logo" /></a>
                <a href="http://github.com/carlosaugusto25" target="_blank" rel="noopener noreferrer"><img src={github} alt="gitgub logo" /></a>
            </div>
        </footer>
    )
}