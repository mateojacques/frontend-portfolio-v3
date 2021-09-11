import styles from './homepage.module.css'
import { Box, Footer } from '../../components'

const Homepage = () => {
  return (
    <section className={styles.homepage}>
      <div className={styles.title}>
        <h1>Mateo Jacques</h1>
        <p>Frontend Web Developer</p>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            <a href='/about'>ABOUT ME</a>
          </li>
          <li>
            <div>
              <a href='/projects'>PROJECTS</a>
              <div>
                <a
                  className={styles.projectLink}
                  href='/projects/corebiz-store'
                >
                  COREBIZ
                </a>
                <a className={styles.projectLink} href='/projects/altar'>
                  ALTAR
                </a>
                <a className={styles.projectLink} href='/projects/gsei-esports'>
                  GSEI ESPORTS
                </a>
                <a className={styles.projectLink} href='/projects/portfolio-v2'>
                  PORTFOLIO V2
                </a>
                <a className={styles.projectLink} href='/projects/airhitect'>
                  AIRHITECT
                </a>
                <a className={styles.projectLink} href='/projects/shia'>
                  SHIA
                </a>
              </div>
            </div>
          </li>
          <li>
            <a href='/contact'>CONTACT</a>
          </li>
        </ul>
      </nav>

      <div className={styles.contactInfo}>
        <Box
          title='EMAIL'
          content={['mateojacquesweb', <span key='span'>@gmail.com</span>]}
        />
        <Box
          title='PHONE'
          content={[<span key='span'>+54</span>, '1127929152']}
        />
      </div>

      <Footer nextPage='About Me' nextHref='/about' />
    </section>
  )
}

export default Homepage
