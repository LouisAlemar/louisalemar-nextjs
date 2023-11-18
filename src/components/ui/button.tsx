import styles from '../../styles/components/ui/Button.module.scss';

interface ButtonProps {
  id?: string;
  children: any;
  href?: string;
  isPrimary?: boolean;
  clickFunc?: () => void;
  isMobileMenuToggler?: boolean;
  isDownloadCv?: boolean;
  download?: boolean;
  className?: string
}

const Button: React.FC<ButtonProps> = ({ id, children, href, isPrimary = true, clickFunc, isMobileMenuToggler = false, isDownloadCv = false, download = false, className }) => {
  const buttonClass = `
    ${isPrimary ? styles['btn-primary'] : styles['btn-secondary']} 
    ${isMobileMenuToggler ? styles['btn-mobile-menu-toggler'] : ''}
    ${isDownloadCv ? styles['btn-desktop-cv'] : ''}
    ${className ? className : ''}
  `;

  return (
    <button id={id} className={buttonClass} onClick={clickFunc}>
      {download && href &&
        <a href={href} target='_blank' download>
          {children}
        </a>
      }
      {!download && href &&
        <a href={href} target='_blank'>
          {children}
        </a>
      }
      {!href &&
        <>
          {children}
        </>
      }
    </button>
  )
}

export default Button