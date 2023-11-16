import Image from "next/image"
import Circle from "./ui/circle"
import AboutMeImg from '../images/about-me-image.jpg'
import styles from '../styles/components/About.module.scss'


const About = () => {
  return (
    <section className={styles['about-section']}>
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
            <p>Eu viverra integer dolor feugiat. In phasellus dictum cursus non. Non nibh quam a fermentum interdum. Non sed quisque magna in. Feugiat velit morbi porttitor sit enim ipsum accumsan vel felis. Volutpat et varius magnis in. Massa amet nisi vulputate nunc maecenas auctor in etiam. Nec sagittis faucibus facilisi velit vel. Aliquam sed vitae molestie velit ac enim tempor aliquam turpis. Leo ornare tellus sagittis sed at sodales tempor. Et tincidunt semper diam est viverra. Risus enim faucibus adipiscing odio at orci tellus sodales eu. Sed egestas pulvinar pretium commodo arcu in posuere quis. Pulvinar enim semper eu enim. Pulvinar risus at integer egestas elementum.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About