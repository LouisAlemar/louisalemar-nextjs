import Link from "next/link"
import Image from 'next/image'

import logo from '../images/web-programming.png'

import styles from '../styles/components/Nav.module.scss'
import Button from "./ui/button";
import { useState } from "react";

export default function Nav() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const toggleMobileMenuHandler = () => {
    setToggleMobileMenu(!toggleMobileMenu)
  }

  return (
    <>
      <nav className={`${styles.nav} ${styles['desktop-nav']}`}>
        <div className={`container ${styles['nav-container']}`}>
          <Image
            className={styles.logo}
            src={logo}
            alt="Louis Alemar logo"
            width={48}
            height={48}
          />
          <ul className={`${styles['nav-items']} ${styles['desktop-nav-items']}`}>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#work">Work</Link></li>
            <li><Link href="#testimonials">Testimonials</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
          <Button href="/pdf/Louis_Alemar_Resume.pdf" download={true} isDownloadCv={true} isPrimary={false}>Download CV</Button>
          <Button isPrimary={false} isMobileMenuToggler={true} clickFunc={toggleMobileMenuHandler} className="space-y-2">
            <span className={`${styles['hamburger-line']} block h-2 w-10`}></span>
            <span className={`${styles['hamburger-line']} block h-2 w-10`}></span>
            <span className={`${styles['hamburger-line']} block h-2 w-10`}></span>
          </Button>
        </div>
      </nav>

      <nav className={`${styles.nav} ${styles['mobile-nav']} ${toggleMobileMenu && styles['show-mobile-nav']}`}>
        <div className={`container flex-col ${styles['nav-container']}`}>
          <div>
            <ul className={`${styles['nav-items']} ${styles['mobile-nav-items']}`}>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#work">Work</Link></li>
              <li><Link href="#testimonials">Testimonials</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
            <Button href="/pdf/Louis_Alemar_Resume.pdf" download={true} isPrimary={false}>Download CV</Button>
          </div>
        </div>
      </nav>
    </>
  );
}
