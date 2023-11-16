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
    <section className={styles['testimonials-section']}>
      <Circle color='purple' topPosition='0rem' />
      <div className="container">
        <div className={styles['testimonials-header']}>
          <h2>Testimonials</h2>
        </div>
        <p className={styles['section-description']}>Eu viverra integer dolor feugiat. In phasellus dictum cursus non. Non nibh quam a fermentum interdum. Non sed quisque magna in.</p>
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