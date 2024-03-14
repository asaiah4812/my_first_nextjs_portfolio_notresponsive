import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Toptal is an exclusive network of the top freelance software in the
            world.
          </h1>
          <p className={styles.desc}>
            Toptal is an exclusive network of the top freelance software
            developers, designers, finance experts, product managers, and
            project managers in the world.Toptal is an exclusive network of the
            top freelance software developers, designers, finance experts,
            product managers, and project managers in the world.
          </p>
          <div className={styles.author}>
            <Image
              src=""
              alt="author"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Nghainuh Henson</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image 
          src="/pexel.jpg" 
          alt="" 
          fill={true} 
          className={styles.image} 
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Toptal is an exclusive network of the top freelance software
          developers, designers, finance experts, product managers, and project
          managers in the world.Toptal is an exclusive network of the top
          freelance software developers, designers, finance experts, product
          managers, and project managers in the world.Toptal is an exclusive
          network of the top freelance software developers, designers, finance
          experts, product managers, and project managers in the world.
          <br />
          <br />
          Toptal is an exclusive network of the top freelance software
          developers, designers, finance experts, product managers, and project
          managers in the world.Toptal is an exclusive network of the top
          freelance software developers experts, product managers, and project
          managers in the world.
          <br />
          <br />
          Toptal is an exclusive network of the top freelance software
          developers, designers, finance experts, product managers, and project
          managers in the world.Toptal is an exclusive network of the top
          freelance software developers, designers, finance experts, product
          managers, and project managers in the world.Toptal is an exclusive
          network of the top freelance software developers, designers, finance
          experts, product managers, and project managers in the world.
        </p>
      </div>
    </div>
  );
}

export default BlogPost;