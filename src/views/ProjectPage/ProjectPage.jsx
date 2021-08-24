import styles from './projectPage.module.css'
import { Footer } from '../../components'

const ProjectPage = ({
  name,
  description,
  text,
  img,
  githubLink,
  siteLink,
}) => {
  return (
    <section className={styles.project}>
      <header className={styles.header}>
        <div className={styles.title}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>

        <div className={styles.links}>
          <a href={siteLink} target='_blank' rel='noreferrer'>
            Live Demo
          </a>
          <a href={githubLink} target='_blank' rel='noreferrer'>
            Github Repo
          </a>
        </div>
      </header>

      <div className={styles.info}>
        <p>{text[0]}</p>
        <p>{text[1]}</p>
        <img src={img} alt={name} />
      </div>

      <Footer prevPage='Projects' prevHref='/projects' />
    </section>
  )
}

export default ProjectPage
