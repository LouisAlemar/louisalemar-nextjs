import Image from 'next/image';

import styles from '../../styles/components/work/ProjectItem.module.scss'
import Button from '../ui/button';

interface ProjectItemProps {
  name: string;
  description: string;
  logo: string;
  bgImage: string;
  url: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ name, description, logo, bgImage, url }) => {
  return (
    <div className={styles['project-item']}>
      <div className={styles.overlay}></div>
      <div className={styles['project-item-bg-image']} style={{ backgroundImage: `url('/images/${bgImage}')` }}></div>
      <div className={styles['logo-container']}>
        <Image
          className={styles['project-item-logo']}
          src={`/images/${logo}`}
          alt="Image of Louis Alemar"
          width={200}
          height={200}
        />
      </div>
      <div className={styles['project-item-text']}>
        <h4>{name}</h4>
        <p>{description}</p>
        <Button isPrimary={false}>View Project</Button>
      </div>
    </div>
  )
}

export default ProjectItem