import * as React from "react";
import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={18} />
          </span>
        </a>
      </footer>
    </>
  );
}                                                                                                                                                                    



