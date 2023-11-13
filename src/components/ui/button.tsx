import styles from '../../styles/components/ui/Button.module.scss'

interface ButtonProps {
  primary: boolean;
  children: string;
}

const Button: React.FC<ButtonProps> = ({ primary = true, children }) => {
  return (
    <button className={primary ? styles['btn-primary'] : styles['btn-secondary']}>{children}</button>
  )
}

export default Button