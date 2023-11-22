import styles from '../../styles/components/ui/Loader.module.scss'

const Loader = () => (

  <div className={styles.loader}>
    <div className={styles.spinner}></div>
  </div>
)

export default Loader;