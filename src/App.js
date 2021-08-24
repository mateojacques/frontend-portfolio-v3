import styles from './styles/app.module.css'
import { Homepage, About, Projects, ProjectPage, Contact } from './views'
import { Switch, Route } from 'react-router'

function App() {
  return (
    <div id='app' className={styles.app}>
      <main id='app-container' className={styles.container}>
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route exact path='/projects'>
            <Projects />
          </Route>
          <Route exact path='/projects/altar'>
            <ProjectPage
              name='ALTAR'
              description='Web application'
              siteLink='https://altar-art.netlify.app'
              githubLink='https://github.com/mateojacques/altar-app'
              text={[
                'ALTAR is a web application that gives you a collection of artworks of up to three comic/manga artists of your selection. It can be used as a reference for art studies, or just as a gallery of iconic illustrations.',
                'Tech Stack: React and Material UI for the frontend. NodeJS and Express for the underlying REST API, which is hosted with Netlify Functions (AWS Lambda). Also, LOTS of Javascript.',
              ]}
              img='https://i.imgur.com/iuRh9Et.png'
            />
          </Route>
          <Route exact path='/projects/gsei-esports'>
            <ProjectPage
              name='GSEI ESPORTS'
              description='Landing page'
              siteLink='https://gsei-esports.netlify.app'
              githubLink='https://github.com/mateojacques/react-landing-esports'
              text={[
                'Landing page for a fake e-sports organization.',
                'Built using React, Material UI and CSS.',
              ]}
              img='https://i.imgur.com/O0poj02.png'
            />
          </Route>
          <Route exact path='/projects/portfolio-v2'>
            <ProjectPage
              name='PORTFOLIO V2'
              description='Frontend Portfolio'
              siteLink='https://frontend-portfolio-v2.netlify.app'
              githubLink='https://github.com/mateojacques/frontend-portfolio-v2'
              text={[
                'Responsive frontend portfolio featuring a comic-like UI.',
                'Built with React, Javascript, HTML, CSS, SASS, and Bootstrap.',
              ]}
              img='https://i.imgur.com/eS1zK04.png'
            />
          </Route>
          <Route exact path='/projects/airhitect'>
            <ProjectPage
              name='AIRHITECT'
              description='Landing page'
              siteLink='https://airhitect.netlify.app'
              githubLink='https://github.com/mateojacques/airhitect-landing-page'
              text={[
                'Landing page made as part of an interview process. It features translation from a given design to a fully responsive website.',
                'Written in HTML, CSS (Sass) and Javascript.',
              ]}
              img='https://i.imgur.com/Rggd6Ja.png'
            />
          </Route>
          <Route exact path='/projects/mockapp'>
            <ProjectPage
              name='MOCKAPP'
              description='Landing page'
              siteLink='https://mockapp.netlify.app'
              githubLink='https://github.com/mateojacques/mockapp'
              text={[
                'Landing page of a fake application to include in my web designer and developer portfolio.',
                'Designed in Adobe XD. Built using HTML, CSS (Sass), JavaScript and GSAP library for the animations.',
              ]}
              img='https://i.imgur.com/iMrHmUW.png'
            />
          </Route>
          <Route exact path='/projects/shia'>
            <ProjectPage
              name='SHIA'
              description='To-do list app'
              siteLink='https://shia-just-do-it.netlify.app'
              githubLink='https://github.com/mateojacques/shia-just-do-it'
              text={[
                'SHIA is a Vanilla JS To Do App with a fun little twist.',
                'Built using pure Vanilla JS, Bootstrap for the layout and a little bit of CSS.',
              ]}
              img='https://i.imgur.com/lMLE2az.png'
            />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
