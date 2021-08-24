import styles from './contact.module.css'
import { Title, Box, Footer } from '../../components'

const Contact = () => {
  return (
    <>
      <section className={styles.contact}>
        <Title title='contact' />

        <p>
          Thanks for having a look at my portfolio! Feel free to reach out to me
          using the links below.
        </p>

        <div className={styles.links}>
          <Box
            title='EMAIL'
            content={[
              <a
                href='mailto:mateojacquesweb@gmail.com'
                target='_blank'
                rel='noreferrer'
                key='a'
              >
                mateojacquesweb<span key='span'>@gmail.com</span>
              </a>,
            ]}
          />
          <Box
            title='PHONE'
            content={[<span key='span'>+54</span>, '1127929152']}
          />
          <Box
            title='LINKEDIN'
            content={[
              <a
                href='https://linkedin.com/in/mateoleonjacques'
                target='_blank'
                rel='noreferrer'
                key='a'
              >
                <span key='span'>https://</span>
                linkedin.com/in/mateoleonjacques
              </a>,
            ]}
          />
          <Box
            title='GITHUB'
            content={[
              <a
                href='https://github.com/mateojacques'
                target='_blank'
                rel='noreferrer'
                key='a'
              >
                <span>https://</span>
                github.com/mateojacques
              </a>,
            ]}
          />
        </div>
        <Footer prevPage='Home' prevHref='/' />
      </section>
    </>
  )
}

export default Contact
