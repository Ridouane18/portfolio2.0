"use client"
import React from 'react'
import styles from './header.module.css'
import { useTheme } from 'next-themes';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import Logo from '../../assets/favicon.webp'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const { theme, setTheme } = useTheme()
  console.log('theme', theme);

  return (
    <div className={styles.header_container}>
      <div>
        <Link href={'/'}>
          <Image src={Logo} alt="my gif" height={50} width={50} priority />
        </Link>
      </div>
      {/* <div className={styles.Navbar} >

        <Link href={'/blog'}>
          Blog loading
        </Link>
      </div> */}
      <div>
        <a className={styles.header_icon} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <BsFillSunFill size={20} color='#fff' /> : <BsFillMoonStarsFill size={20} color='#000' />}
        </a>
      </div>
    </div>
  )
}

export default Header