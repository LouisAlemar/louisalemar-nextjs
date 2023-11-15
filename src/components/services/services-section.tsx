import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

import Circle from '../ui/circle';
import ServiceItem from './service-item';

import styles from '../../styles/components/services/Services.module.scss';
import Button from '../ui/button';

const ServicesSection = () => {
  const services = useSelector((state: RootState) => state.data.allData.services);
  const loading = useSelector((state: RootState) => state.data.loading);
  const error = useSelector((state: RootState) => state.data.error);

  return (
    <section className={styles.services}>
      <Circle />
      <div className="container">
        <div className={styles['services-header']}>
          <h2>Services</h2>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
          {loading && <p>Loading...</p>}
          {error && <p>Error!</p>}
          {services.map((service) => {
            return <ServiceItem key={service.serviceId} name={service.name} description={service.description} keyFeatures={service.keyFeatures} />
          })}
        </div>
        <Button>Start Consulting</Button>
      </div>
    </section>
  )
}

export default ServicesSection