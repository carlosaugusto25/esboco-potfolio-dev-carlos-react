import styles from './aboutme.module.scss';
import me from '../../assets/me.jpg';
import { CardTech } from '../CardTech';

export function AboutMe() {
    return (
        <section className={styles.container}>
            <div className={styles.textContainer}>
                <h2>Sobre mim</h2>
                <div className={styles.borderText} />
            </div>
            <div className={styles.contentAbout}>
                <img src={me} alt="" />
                <div className={styles.information}>
                    <h4>Carlos Augusto</h4>
                    <p>Profissional atuante na área de desenvolvimento web e mobile a mais de 3 anos, participei no desenvolvimento de diversos projetos na parte do front-end, utilizando as tecnologias mais buscadas do mercado, a principal delas foi o React para os projetos web e React-Native para os projetos mobile, todos usando TypeScript. Adquiri conhecimentos e experiências na área durante este tempo, como integração do Front-End com Axios, versionamento de código com Git, Styled-Components, Tailwind e ChakraUI. Continuo sempre buscando me aperfeiçoar e adquirir mais conhecimentos  na área, estudando back-end, banco de dados e outras tecnologias para agregar ainda mais qualidade nos meus trabalhos e atividades diárias.

                    </p>
                    <div className={styles.links}>
                        <a href="https://github.com/carlosaugusto25" target='_blank' rel="noreferrer">GITHUB</a>
                        <a href="mailto:carlosmedeiros.dev@gmail.com" target='_blank' rel="noreferrer">E-MAIL</a>
                        <a href="https://www.linkedin.com/in/carlos-augusto-dev/" target='_blank' rel="noreferrer">LINKEDIN</a>
                    </div>
                </div>
            </div>
            <div className={styles.technologies}>
                <CardTech title="Interface & Design" description="Estilização de projetos, UI, UX" icon='interface' />
                <CardTech title="HTML & CSS" description="Sites responsivos e otimizados" icon='html' />
                <CardTech title="React" description="Sistemas SPA com Node" icon='react' />
                <CardTech title="Node" description="Back-end usando JavaScript" icon='node' />
            </div>
            <div className={styles.experiences}>
                <div className={styles.experienceCard}>
                    <div className={styles.contentTechs}>
                        <h4>Eu tive experiências com</h4>
                        <p>Firebase Database</p>
                        <p>SQL Database</p>
                        <p>Git, GitHub, Bitbucket</p>
                        <p>Figma</p>
                        <p>Processadores de CSS</p>
                        <p>Java</p>
                    </div>
                </div>
                <div className={styles.experienceCard}>
                    <div className={styles.contentTechs}>
                        <h4>Tenho anos de experiência com</h4>
                        <p>Desenvolvimento com HTML5</p>
                        <p>Estilização com CSS3</p>
                        <p>JavaScript</p>
                        <p>TypeScript</p>
                        <p>React e Next</p>
                        <p>React Native</p>
                        <p>Node</p>
                    </div>
                </div>
                <div className={styles.experienceCard}>
                    <div className={styles.contentTechs}>
                        <h4>Eu trabalho e estudo sobre</h4>
                        <p>React</p>
                        <p>Next</p>
                        <p>TypeScript</p>
                        <p>Node</p>
                        <p>Prisma ORM</p>
                        <p>Nest</p>
                        <p>React-Native</p>
                    </div>
                </div>
            </div>
        </section>
    )
}