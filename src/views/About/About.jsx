import styles from './about.module.css'
import { Title, Footer, Box } from '../../components'

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <Title title='about me' />
        <p>
          I’m a <span>Frontend Web Developer</span>. I have a passion for
          writing clean and concise code that, in conjuction with a good
          understanding of web design principles, allows me to create work that
          I'm proud of. I<span> always</span> keep learning (and always will).
        </p>

        <div className={styles.boxes}>
          <Box
            title='EDUCATION'
            content={[
              'Web Development (Self-taught)',
              <br key='key'></br>,
              'Software Engineering (Current)',
            ]}
          ></Box>
          <Box title='EXPERIENCE' content='2+ years'></Box>
          <Box title='DATE OF BIRTH' content='Apr, 2002 - 19 years old'></Box>
          <Box
            title='FAMILIAR WITH'
            content='React, JavaScript, HTML, CSS, SASS, Node, Express'
          ></Box>
          <Box
            title='SKILLS'
            content='UI Development, REST API Development, Design Translation'
          ></Box>
        </div>
      </div>
      <Footer
        prevPage='Index'
        prevHref='/'
        nextPage='Projects'
        nextHref='/projects'
      />
    </section>
  )
}

export default About
