"use client"
import React from 'react'
import styles from './header.module.css'
import { useTheme } from 'next-themes';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { SiHomebridge } from "react-icons/si";
// import Logo from '../../assets/favicon.webp'
// import Logo from '../../assets/logo.png'
// import Image from 'next/image';
import Link from 'next/link';


const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className={styles.header_container}>
      <div>
        <Link href={'/'}>
          <SiHomebridge size={20} color={theme === 'dark' ? '#fff' : '#000'} />
          {/* <Image src={Logo} alt="my gif" height={50} width={50} priority /> */}
        </Link>
      </div>
      <div className={styles.Navbar_container} >
        <Link className={styles.Navlink} href={'/blog'}>
          Blog
        </Link>
        <Link className={styles.Navlink} href={'/tech-news'}>
          Frontend news
        </Link>
        <Link className={styles.Navlink} href={'/projects'}>
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