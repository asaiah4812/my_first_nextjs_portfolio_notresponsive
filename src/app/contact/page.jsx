import Image from 'next/image';
import styles  from './page.module.css'
import React from "react";
import Button from '@/components/button/Button';

const Contact = () => {
  return (
  <div className={styles.container}>
    <h1 className={styles.title}>Let's Keep in Touch</h1>
    <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image
        src="/app5.png"
        alt=''
        fill={true}
        className={styles.image}
        />
      </div>
      <form className={styles.form}>
        <input type='text' placeholder='name' className={styles.input} />
        <input type='text' placeholder='email' className={styles.input} />
        <textarea
        className={styles.textArea}
        placeholder='message'
        color='30'
        rows="10"
        ></textarea>
        <Button url="#" text="Send"/>
      </form>
    </div>
  </div>
  );
};
export default Contact;