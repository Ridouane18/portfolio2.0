import React from 'react'
import styles from './SocialMediaFooer.module.css';
import github from 'assets/icons8-github.svg';
import linkedIn from 'assets/icons8-linkedin.svg';
import Image from 'next/image';
import Link from 'next/link';

const SocialMediaFooer = () => {
  return (
    <div className={styles.container}>
        <Link href={'https://www.linkedin.com/in/ridouane-tansouft-952868150/'} target="_blank">
            <Image src={linkedIn} width={40} height={40} alt={'linkedIn'}/>
        </Link>
        <Link href={'https://github.com/Ridouane18'} target="_blank">
             <Image src={github} width={40} height={40} alt={'github'}/>
        </Link>
    </div>
  )
}


export default SocialMediaFooer