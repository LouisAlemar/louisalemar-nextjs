import Image from 'next/image'

import Button from './ui/button'
import Circle from './ui/circle'

import HeaderImg from '../images/header-image.jpg'

import styles from '../styles/components/Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container grid grid-cols-1 md:grid-cols-2 mobile-flex-col ${styles['header-container']}`}>
        <div className={styles['header-text']}>
          <h5 className={styles['white-text']}>Hi, Im</h5>
          <h1 className={styles['white-text']}>Louis Alemar</h1>
          <h3 className={styles['white-text']}>Front-End Developer</h3>
          <div className={styles['header-cta']}>
            <Button isPrimary={false}>Start Consulting</Button>
            <div className="freelance">
              <span className={styles['green-circle']}></span>
              <span className={styles['white-text']}>Available for freelance</span>
            </div>
          </div>
        </div>
        <div className={styles['header-image-container']}>
          <Image
            className={styles['header-image']}
            src={HeaderImg}
            alt="Image of Louis Alemar"
            width={550}
            height={550}
          />
        </div>
      </div>
      <Circle />
    </header>
  )
}

export default Header