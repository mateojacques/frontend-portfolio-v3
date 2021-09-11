import styles from './projects.module.css'
import { Title, Footer, ProjectBox } from '../../components'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import project4 from '../../assets/project4.png'
import project5 from '../../assets/project5.png'
import project6 from '../../assets/project6.svg'

const Projects = () => {
  return (
    <section className={styles.projects}>
      <Title title='projects' />
      <div className={styles.grid}>
        <ProjectBox
          title='COREBIZ STORE'
          description='E-commerce Front End'
          img={project1}
          link='/projects/corebiz-store'
          color='#111'
          bgColor='#fefefe'
        />
        <ProjectBox
          title='ALTAR'
          description='Web application'
          img={project2}
          link='/projects/altar'
          color='#efce26'
          bgColor='#444'
        />
        <ProjectBox
          title='GSEI ESPORTS'
          description='Landing page'
          img={project3}
          link='/projects/gsei-esports'
          color='#8f2df3'
          bgColor='#161616'
        />
        <ProjectBox
          title='PORTFOLIO V2'
          description='Frontend Portfolio'
          img={project4}
          link='/projects/portfolio-v2'
          color='#fff'
          bgColor='#c32031'
        />
        <ProjectBox
          title='AIRHITECT'
          description='Landing page'
          img={project5}
          link='/projects/airhitect'
          color='#f2f2f2'
          bgColor='#eb1559'
        />
        <ProjectBox
          title='SHIA'
          description='To-do list app'
          img={project6}
          link='/projects/shia'
          color='#42220a'
          bgColor='#98dee7'
        />
      </div>
      <Footer
        prevPage='About Me'
        prevHref='/about'
        nextPage='Contact Me'
        nextHref='/contact'
      />
    </section>
  )
}

export default Projects
