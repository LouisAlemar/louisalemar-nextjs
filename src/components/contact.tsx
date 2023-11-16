import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Circle from "./ui/circle";

import styles from '../styles/components/Contact.module.scss'

const Contact = () => {
  return (
    <section id="contact" className={styles['contact-section']}>
      <Circle color="white" topPosition={"-5rem"} />
      <div className="container">
        <div className={styles['contact-header']}>
          <h2>Let&apos;s Chat</h2>
        </div>
        <div className={`grid grid-cols-1`}>
          <p className={styles['section-description']}>Ready to bring your digital vision to life? I&apos;m just a message away. Let&apos;s collaborate to create something exceptional that truly stands out in the digital world. Whether you have a fully-formed idea or are seeking creative guidance, I am here to help transform your concepts into reality.</p>
          <div className={styles['social-icons-container']}>
            <Link href="https://github.com/LouisAlemar/" target="_blank">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/louisalemar/" target="_blank">
              <FaLinkedin />
            </Link>
            <Link href="mailto:louisalemar@gmail.com?subject=Requesting%20more%20information%20about%20your%20services!">
              <MdEmail />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact