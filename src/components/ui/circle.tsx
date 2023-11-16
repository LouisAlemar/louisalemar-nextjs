import styles from '../../styles/components/ui/Circle.module.scss'

interface CircleProps {
  color: string;
  topPosition: string;
}

const Circle: React.FC<CircleProps> = ({ color, topPosition }) => {
  let bgColor;

  switch (color) {
    case 'purple':
      bgColor = '#5f2adc'
      break;

    case 'gray':
      bgColor = '#f5f5f5'
      break;

    case 'white':
      bgColor = '#ffffff'
      break;

    default:
      break;
  }

  return (
    <div className={styles['circle-container']}>
      <span style={{ backgroundColor: bgColor, top: topPosition }} className={styles.circle}></span>
    </div>
  )
}

export default Circle