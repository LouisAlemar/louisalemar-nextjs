import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

import Circle from '../ui/circle';
import ServiceItem from './service-item';

import styles from '../../styles/components/services/Services.module.scss';
import Button from '../ui/button';
import Loader from '../ui/loader';

const ServicesSection = () => {
  const services = useSelector((state: RootState) => state.services.data);
  const loading = useSelector((state: RootState) => state.services.loading);
  const error = useSelector((state: RootState) => state.services.error);

  return (
    <section id="services" className={styles['services-section']}>
      <Circle color='purple' topPosition='-5rem' />
      <div className="container">
        <div className={styles['services-header']}>
          <h2>Services</h2>
        </div>
        {loading && <Loader />}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
          {error && <p>Error!</p>}
          {services.map((service) => {
            return <ServiceItem key={service.id} name={service.name} description={service.description} keyFeatures={service.keyFeatures} />
          })}
        </div>
        <Button href="mailto:louisalemar@gmail.com?subject=Requesting%20more%20information%20about%20your%20services!">Start Consulting</Button>
      </div>
    </section>
  )
}

export default ServicesSection