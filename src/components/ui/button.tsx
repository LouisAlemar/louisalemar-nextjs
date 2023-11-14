import styles from '../../styles/components/ui/Button.module.scss';

interface ButtonProps {
  children: any;
  isPrimary?: boolean;
  clickFunc?: () => void;
  isMobileMenuToggler?: boolean;
  isDownloadCv?: boolean;
  className?: string
}

const Button: React.FC<ButtonProps> = ({ children, isPrimary = true, clickFunc, isMobileMenuToggler = false, isDownloadCv = false, className }) => {
  const buttonClass = `
    ${isPrimary ? styles['btn-primary'] : styles['btn-secondary']} 
    ${isMobileMenuToggler ? styles['btn-mobile-menu-toggler'] : ''}
    ${isDownloadCv ? styles['btn-desktop-cv'] : ''}
    ${className ? className : ''}
  `;

  return (
    <button className={buttonClass} onClick={clickFunc}>{children}</button>
  )
}

export default Button