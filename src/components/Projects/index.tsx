import { CardProject, CardProps } from '../CardProject';
import styles from './projects.module.scss';
import { data as database } from '../../data';
import { useEffect, useState } from 'react';

export function Projects() {
    
    const [data, setData] = useState<CardProps[]>([]);

    useEffect(()=>{
        setData(database)
    },[])
    
    return (
        <section className={styles.container}>
            <div className={styles.textContainer}>
                <h2>Projetos</h2>
                <div className={styles.borderText} />
            </div>
            <div className={styles.projectsContainer}>
                {
                    data?.map((project) => (
                        <CardProject id={project.id} description={project.description} tech={project.tech} title={project.title} path={project.path} />
                    ))
                }
            </div>
        </section>
    )
}