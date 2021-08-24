import styles from './box.module.css'

const Box = ({ title, content }) => {
  return (
    <div key={title} className={styles.box}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default Box
