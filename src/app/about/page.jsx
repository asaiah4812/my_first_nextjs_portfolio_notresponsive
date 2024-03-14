import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image';
import Button from '@/components/button/Button';


const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/pexel.jpg"
          fill={true}
          className={styles.img}
          alt="image"
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            HandCrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Toptal is an exclusive network of the top freelance software
            developers, designers, finance experts, product managers, and
            project managers in the world. Top companies hire Toptal freelancers
            for their most important projects.Toptal is an exclusive network of
            the top freelance software developers, designers, finance experts,
            product managers, and project managers in the world. Top companies
            hire Toptal freelancers for their most important projects.
            <br />
            <br />
            Toptal is an exclusive network of the top freelance software
            developers, designers, finance experts, product managers, and
            project managers in the world. Top companies hire Toptal freelancers
            for their most important projects.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who is Asaiah?</h1>
          <p className={styles.desc}>
            Toptal is an exclusive network of the top freelance software
            developers, designers, finance experts, product managers, and
            project managers in the world. Top companies hire Toptal freelancers
            for their most important projects.
            <br /> - Dynamic Website
            <br /> 
            <br /> - Fast and Handy
            <br /> 
            <br /> - Modile Apps
          </p>
          <Button url="contact" text="Contact"/>
        </div>
      </div>
    </div>
  );
}


export default About;