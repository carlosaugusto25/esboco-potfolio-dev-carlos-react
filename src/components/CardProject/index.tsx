import styles from './cardprojects.module.scss';
import starwars from '../../assets/starwars-list.png';
import primeflix from '../../assets/primeflix.png';
import tarefas from '../../assets/tarefas.png';
import architecture from '../../assets/arquitetura.png';

export interface CardProps {
    id: number;
    title: string;
    description: string;
    tech: string[];
    path: string;
}

export function CardProject({ id, title, description, tech, path }: CardProps) {
    return (
        <a href={path} target="_blank" rel="noreferrer" style={{textDecoration: 'none', color: 'black'}}>
        <div className={styles.container}>
            <div className={styles.imgProject}>
                <img src={id === 1 ? starwars : id === 2 ? primeflix : id === 3 ? tarefas : architecture} alt="" />
                <div className={styles.technologies}>
                    {tech?.map((tech) => (
                            <div className={styles.content}>{tech}</div>
                    ))}
                </div>
            </div>
            <div className={styles.textProject}>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
        </a>
    )
}