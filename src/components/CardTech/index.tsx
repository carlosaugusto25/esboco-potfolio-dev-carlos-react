import styles from './cardtech.module.scss';
import { FaReact, FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiAffinitydesigner } from "react-icons/si";

interface Props {
    title: string;
    description: string;
    icon: 'interface' | 'html' | 'react' | 'node';
}

export function CardTech({ title, description, icon }: Props) {
    return (
        <div className={styles.container}>
            {
                icon === 'interface' ?
                    <SiAffinitydesigner className={styles.icon} />
                    :
                    <>
                        {
                            icon === 'html' ?
                                <FaHtml5 className={styles.icon} />
                                :
                                <>
                                    {
                                        icon === 'react' ?
                                            <FaReact className={styles.icon} />
                                            :
                                            <FaNodeJs className={styles.icon} />
                                    }
                                </>
                        }
                    </>
            }
            <div className={styles.content}>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}