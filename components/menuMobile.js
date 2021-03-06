import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import logoNav from '../assets/carvalhaco-logo-header.png';
import styles from '../styles/menuMobile.module.css';

export const MenuMobile = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false)
  
  const handleMenu = () => {
    setOpen(!open)
  }
  
  return (
    <div className={styles.mobileHeader}>
      <header className={open !== true ? '' : 'mobileactive'}>
        <div className={styles.menuMobile}>
          <Link href="/">
            <a>
              <Image className={styles.logoHeader} src={logoNav} alt="logo da Carvalhaço"/>
            </a>
          </Link>
          <span
            className="menuHamburger"
            onClick={handleMenu}
          ></span>               
        </div>
        <nav className={styles.navMobile}>
            <div className={styles.navLinks}>
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/servicos">
                <a>Serviços</a>
              </Link>
              <Link href="/empresa">
                <a>Empresa</a>
              </Link>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
              <Link href="/contato">
                <a>Contato</a>
              </Link>
            </div>
            <div className={styles.socialMedia}>
              <a href="https://www.facebook.com/carvalhacoreciclagem/" target="_blank" rel="noreferrer">
                  <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/carvalhacoreciclagem_oficial/" target="_blank" rel="noreferrer">
                  <FaInstagram />
              </a>
              <a href="https://web.whatsapp.com/send?phone=5571992103020" target="_blank" rel="noreferrer">
                  <FaWhatsapp />
              </a>
            </div>
          </nav>
      </header>
    </div>
  )
};