import Image from 'next/image';
import React from 'react';
import styles from './HomePageContainer.module.css';
import myGif from '../../assets/myGif.gif';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('components/Footer/Footer'));

const HomePageContainer = () => {
  return (
    <div className={styles.HomePage}>
      <section className={styles.section_1}>
        <Image className={styles.section_1_image} src={myGif} alt="my gif" height={500} width={500} priority />
      </section>
      <section className={styles.section_2}>
        <div>
          <h1>I'm Ridouane Tansouft 👋</h1>
          <h3>Front-end developer specializing in ReactJS and NextJS</h3>
        </div>
        <p>
          I specialize in <a href='https://react.dev/' target="_blank">ReactJS</a> and <a href='https://nextjs.org/docs' target="_blank">NextJS</a>,
          equipped with a deep understanding of JavaScript and TypeScript.
          With extensive experience in crafting top-notch web applications,
          I excel in creating responsive, interactive, and high-performing
          interfaces. My detail-oriented and collaborative approach drives me to
          conquer complex challenges as part of a team, ensuring exceptional outcomes
          in feature design, bug resolution, and performance optimization. If you're
          seeking expertise to bring your projects to life, let's connect and collaborate.
        </p>
        <Footer />
      </section>
    </div>
  )
}

export default HomePageContainer