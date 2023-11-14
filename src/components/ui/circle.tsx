import styles from '../../styles/components/ui/Circle.module.scss'

const Circle = () => {
  return (
    <div className={styles['circle-container']}>
      <span className={styles.circle}></span>
    </div>
  )
}

export default Circle