import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Circle from "./ui/circle";

import styles from '../styles/components/Contact.module.scss'

const Contact = () => {
  return (
    <section className={styles['contact-section']}>
      <Circle color="white" topPosition={"-5rem"} />
      <div className="container">
        <div className={styles['contact-header']}>
          <h2>Let&apos;s Chat</h2>
        </div>
        <div className={`grid grid-cols-1`}>
          <p className={styles['section-description']}>Nibh purus blandit ipsum euismod enim vulputate mollis. Sit at volutpat sed molestie elementum. Ultricies gravida velit ligula eu odio egestas sed. Tortor est nulla aenean posuere volutpat a vel. Nibh purus blandit ipsum euismod enim vulputate mollis. Sit at volutpat sed molestie elementum.</p>
          <div className={styles['social-icons-container']}>
            <FaGithub />
            <FaLinkedin />
            <MdEmail />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact