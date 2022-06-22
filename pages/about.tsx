import React from "react";
import { useRouter } from 'next/router';
import btn from '../styles/Btn.module.css'

export default function AboutPage() {

  const router = useRouter();
  function backtoHome() {
    router.push({
      pathname: '/',
    })
  }
  return (
    <>
      <div>About Page</div>
      <button className={btn.buttons} onClick={backtoHome}>Back to Home</button>
    </>
  );
}

