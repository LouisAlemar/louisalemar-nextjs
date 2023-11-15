import Image from 'next/image'

import ServiceIcon from './service-icon';

import styles from '../../styles/components/services/ServiceItem.module.scss'

interface ServiceItemProps {
  name: string;
  description: string;
  keyFeatures: string[]
}

const icons = {
  'web-design.svg': '/images/web-design.svg',
  'web-development.svg': '/images/web-development.svg',
  'content-creation.svg': '/images/content-creation.svg'
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
        {keyFeatures.map((feature, index) => <li key={index}>{feature}</li>)}
      </ul>
    </div>
  )
}

export default ServiceItem