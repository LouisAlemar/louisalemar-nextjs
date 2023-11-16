import Image from "next/image";

import styles from '../../styles/components/testimonials/TestimonialItem.module.scss'

interface TestimonialItemProps {
  index: number;
  name: string;
  jobTitle: string;
  company: string;
  image: string;
  text: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ index, name, jobTitle, company, image, text }) => {
  const altText = `Image of ${name}`

  let horizontalPosition;

  if (index % 2 === 0) {
    horizontalPosition = styles['position-left']
  } else {
    horizontalPosition = styles['position-right']
  }

  return (
    <div className={styles['testimonial-item']}>
      <Image
        className={`${styles['testimonial-image']} ${horizontalPosition}`}
        src={`/images/${image}`}
        alt={altText}
        width={100}
        height={100}
      />
      <div className={styles['testimonial-item-text-container']}>
        <p>{text}</p>
        <div className={styles['testimonial-info']}>
          <p className={styles['testimonial-name']}><strong>{name}</strong></p>
          <h6>{jobTitle}, {company}</h6>
        </div>
      </div>
    </div>
  )
}

export default TestimonialItem