import styles from './projectBox.module.css'

const ProjectBox = ({ title, img, link, color, bgColor }) => {
  return (
    <a
      href={link}
      className={styles.projectBox}
      style={{ backgroundColor: bgColor, color: color }}
    >
      <img src={img} alt={title} />
      <h3 className={styles.title}>{title}</h3>
    </a>
  )
}

export default ProjectBox
