import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/Programmer.png'
import Button from '@/components/button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Best Design for Your Porfolio Website.</h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the Teams from the
          global tech Industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="bg" className={styles.img} />
      </div>
    </div>
  );
}
