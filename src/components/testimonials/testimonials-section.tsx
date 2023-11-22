import Circle from '../ui/circle';

import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import styles from '../../styles/components/testimonials/Testimonials.module.scss';
import Loader from '../ui/loader';
import TestimonialItem from './testimonial-item';

const TestimonialsSection = () => {
  const testimonials = useSelector((state: RootState) => state.testimonials.data);
  const loading = useSelector((state: RootState) => state.testimonials.loading);
  const error = useSelector((state: RootState) => state.testimonials.error);

  return (
    <section id="testimonials" className={styles['testimonials-section']}>
      <Circle color='purple' topPosition='0rem' />
      <div className="container">
        <div className={styles['testimonials-header']}>
          <h2>Testimonials</h2>
        </div>
        <p className={styles['section-description']}>Discover what others are saying: Browse through genuine testimonials from clients and colleagues who have experienced the quality and impact of my work.</p>
        {loading && <Loader />}
        <div className={`grid grid-cols-1 ${styles['testimonial-listing']}`}>
          {error && <p>Error!</p>}
          {testimonials.map((testimonial, index) => {
            return <TestimonialItem key={testimonial.id} index={index} {...testimonial} />
          })}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection