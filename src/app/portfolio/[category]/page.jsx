import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Create Portfolio</h1>
          <p className={styles.desc}>
            Toptal is an exclusive network of the top freelance software
            developers, designers, finance experts, product managers, and
            project managers in the world. Top companies hire Toptal freelancers
            Toptal is an exclusive network of the top freelance software
            developers, designers, finance experts, product managers, and
            project managers in the world. Top companies hire Toptal freelancers
            for their most important projects.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src="/MacBook.png"
            className={styles.img}
            alt="illustration"
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Create Portfolio</h1>
          <p className={styles.desc}>
            Toptal is an exclusive network of the top freelance software
            developers, designers, finance experts, product managers, and
            project managers in the world. Top companies hire Toptal freelancers
            Toptal is an exclusive network of the top freelance software
            developers, designers, finance experts, product managers, and
            project managers in the world. Top companies hire Toptal freelancers
            for their most important projects.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src="/MacBook2.png"
            className={styles.img}
            alt="illustration"
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Create Websites</h1>
          <p className={styles.desc}>
            Toptal is an exclusive network of the top freelance software
            developers, designers, finance experts, product managers, and
            project managers in the world. Top companies hire Toptal freelancers
            Toptal is an exclusive network of the top freelance software
            developers, designers, finance experts, product managers, and
            project managers in the world. Top companies hire Toptal freelancers
            for their most important projects.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src="/bg1.png"
            className={styles.img}
            alt="illustration"
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Create Online Book store</h1>
          <p className={styles.desc}>
            Toptal is an exclusive network of the top freelance software
            developers, designers, finance experts, product managers, and
            project managers in the world. Top companies hire Toptal freelancers
            Toptal is an exclusive network of the top freelance software
            developers, designers, finance experts, product managers, and
            project managers in the world. Top companies hire Toptal freelancers
            for their most important projects.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src="/bg2.png"
            className={styles.img}
            alt="illustration"
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Create Portfolio</h1>
          <p className={styles.desc}>
            Toptal is an exclusive network of the top freelance software
            developers, designers, finance experts, product managers, and
            project managers in the world. Top companies hire Toptal freelancers
            Toptal is an exclusive network of the top freelance software
            developers, designers, finance experts, product managers, and
            project managers in the world. Top companies hire Toptal freelancers
            for their most important projects.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src="/bg3.png"
            className={styles.img}
            alt="illustration"
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Create Resturant Website</h1>
          <p className={styles.desc}>
            Toptal is an exclusive network of the top freelance software
            developers, designers, finance experts, product managers, and
            project managers in the world. Top companies hire Toptal freelancers
            Toptal is an exclusive network of the top freelance software
            developers, designers, finance experts, product managers, and
            project managers in the world. Top companies hire Toptal freelancers
            for their most important projects.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src="/save.png"
            className={styles.img}
            alt="illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default Category