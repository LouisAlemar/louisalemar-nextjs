import Circle from '../ui/circle'

import styles from '../../styles/components/testimonials/Testimonials.module.scss'
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import TestimonialItem from './testimonial-item';

const TestimonialsSection = () => {
  const testimonials = useSelector((state: RootState) => state.data.allData.testimonials);
  const loading = useSelector((state: RootState) => state.data.loading);
  const error = useSelector((state: RootState) => state.data.error);

  return (
    <section id="testimonials" className={styles['testimonials-section']}>
      <Circle color='purple' topPosition='0rem' />
      <div className="container">
        <div className={styles['testimonials-header']}>
          <h2>Testimonials</h2>
        </div>
        <p className={styles['section-description']}>Discover what others are saying: Browse through genuine testimonials from clients and colleagues who have experienced the quality and impact of my work.</p>
        <div className={`grid grid-cols-1 ${styles['testimonial-listing']}`}>
          {loading && <p>Loading...</p>}
          {error && <p>Error!</p>}
          {testimonials.map((testimonial, index) => {
            return <TestimonialItem key={testimonial.testimonialId} index={index} {...testimonial} />
          })}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection