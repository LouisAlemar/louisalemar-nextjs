import Image from "next/image"
import Circle from "./ui/circle"
import AboutMeImg from '../images/about-me-image.jpg'
import styles from '../styles/components/About.module.scss'


const About = () => {
  return (
    <section id="about" className={styles['about-section']}>
      <Circle color="white" topPosition={"4rem"} />
      <div className="container">
        <div className={styles['about-header']}>
          <h2>About Me</h2>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2`}>
          <div>
            <Image
              className={styles['about-image']}
              src={AboutMeImg}
              alt="Image of Louis Alemar"
              width={550}
              height={550}
            />
          </div>
          <div className={styles['about-text']}>
            <p>I am Louis Alemar, a highly skilled Front-End Developer with a robust portfolio in web development. My expertise lies in a broad spectrum of web development technologies, with a particular focus on front-end frameworks like React, Redux, and Next.js, alongside back-end development skills in Node.js, Express, and Sequelize. Throughout my career at renowned companies such as Launch Interactive, Trusted Media Brands, Access Intelligence, and The Berman Group, I have honed my abilities in creating engaging website features, developing custom WordPress plugins for enhanced site functionality, and leading major development projects. My collaborative efforts with design and backend teams have been instrumental in transforming intricate web designs into efficient React user interfaces. My dedication to crafting compelling user experiences and my comprehensive approach to web development are the hallmarks of my professional journey.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About