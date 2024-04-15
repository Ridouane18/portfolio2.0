"use client"
import React from 'react'
import styles from './header.module.css'
import { useTheme } from 'next-themes';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { IoIosArrowBack } from "react-icons/io";
// import Logo from '../../assets/favicon.webp'
// import Logo from '../../assets/logo.png'
// import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { CiHome } from "react-icons/ci";

const Header = () => {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname();

  return (
    <div className={styles.header_container}>
      <div>
        <Link href={'/'}>
          {/* {pathname !== '/' && <IoIosArrowBack size={20} color={theme === 'dark' ? '#fff' : '#000'} />} */}
          {pathname !== '/' && <CiHome size={20} color={theme === 'dark' ? '#fff' : '#000'} />}
        </Link>
      </div>
      <div className={styles.Navbar_container} >
        <Link className={`${styles.Navlink} ${pathname === '/blog' ? styles.active : ''}`} href={'/blog'} >
          Blog
        </Link>
        <Link className={`${styles.Navlink} ${pathname === '/tech-news' ? styles.active : ''}`} href={'/tech-news'}>
          Frontend news
        </Link>
        <Link className={`${styles.Navlink} ${pathname === '/projects' ? styles.active : ''}`} href={'/projects'}>
          Projects
        </Link>
      </div>
      <div>
        <a className={styles.header_icon} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <BsFillSunFill size={20} color='#fff' /> : <BsFillMoonStarsFill size={20} color='#000' />}
        </a>
      </div>
    </div>
  )
}

export default Header