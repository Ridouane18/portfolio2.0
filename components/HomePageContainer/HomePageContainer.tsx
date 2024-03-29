import Image from 'next/image';
import React, { Suspense } from 'react';
import styles from './HomePageContainer.module.css';
import myGif from '../../assets/myGif.gif';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('components/Footer/Footer'));

const HomePageContainer = () => {
  return (
    <div className={styles.HomePage}>
      <section className={styles.section_1}>
        <div className={styles.section_1_image_container}>
          <Image className={styles.section_1_image} src={myGif} alt="my gif" height={500} width={500} priority />
        </div>
      </section>
      <section className={styles.section_2}>
        <div>
          <h1>I&lsquo;m Ridouane Tansouft 👋</h1>
          <h3>Front-end developer at <a href='https://www.bouyguestelecom.fr/' target="_blank"> Bouygues Telecom</a></h3>
        </div>
        <p>
          I specialize in <a href='https://react.dev/' target="_blank">ReactJS</a> and <a href='https://nextjs.org/docs' target="_blank">NextJS</a>,
          equipped with a deep understanding of JavaScript and TypeScript.
          With extensive experience in crafting top-notch web applications,
          I excel in creating responsive, interactive, and high-performing
          interfaces. My detail-oriented and collaborative approach drives me to
          conquer complex challenges as part of a team, ensuring exceptional outcomes
          in feature design, bug resolution, and performance optimization. If you&lsquo;re
          seeking expertise to bring your projects to life, let&lsquo;s connect and collaborate.
        </p>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </section>
    </div>
  )
}

export default HomePageContainer