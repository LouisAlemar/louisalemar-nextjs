import ServiceIcon from './service-icon';

import styles from '../../styles/components/services/ServiceItem.module.scss';

interface ServiceItemProps {
  name: string;
  description: string;
  keyFeatures: string[]
}

const ServiceItem: React.FC<ServiceItemProps> = ({ name, description, keyFeatures }) => {
  const altText = `An icon for ${name} service.`;

  return (
    <div className={styles['service-item']}>
      <ServiceIcon serviceType={name} />

      <h4>{name}</h4>
      <p>{description}</p>
      <hr />
      <ul>
        {keyFeatures.map((feature, index) => <li key={index} dangerouslySetInnerHTML={{ __html: feature }} />)}
      </ul>
    </div>
  )
}

export default ServiceItem