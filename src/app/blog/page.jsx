import React from 'react'
import styles from "./page.module.css";
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imagesContainer}>
          <Image
            width={400}
            height={250}
            src="/bg2.png"
            className={styles.image}
            alt="illustration"
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Toptal is an exclusive network of the top freelance software
            developers, designers, finance experts, product managers, and
            project managers in the world.
          </p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imagesContainer}>
          <Image
            width={400}
            height={250}
            src="/bg.png"
            className={styles.image}
            alt="illustration"
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Toptal is an exclusive network of the top freelance software
            developers, designers, finance experts, product managers, and
            project managers in the world.
          </p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imagesContainer}>
          <Image
            width={400}
            height={250}
            src="/bg1.png"
            className={styles.image}
            alt="illustration"
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Toptal is an exclusive network of the top freelance software
            developers, designers, finance experts, product managers, and
            project managers in the world.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;