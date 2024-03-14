import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 Asaiah. All rights reserved</div>
      <div className={styles.social}>
        <Image src="/1.png" width={18} height={18} className={styles.icon} alt="Facebook" />
        <Image src="/2.png" width={18} height={18} className={styles.icon} alt="Twitter" />
        <Image src="/5.png" width={18} height={18} className={styles.icon} alt="Instagram" />
        <Image src="/4.png" width={18} height={18} className={styles.icon} alt="Youtube" />
      </div>
    </div>
  );
}

export default Footer;