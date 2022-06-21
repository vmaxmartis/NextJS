import React from "react";
import { useRouter } from 'next/router';

export interface Aboutpage {




}
export default function Aboutpage() {
  
  const router = useRouter();
  function gotoPost() {
  // or using options object
  router.push({
  pathname: '/post/[postId]',
  query: {
  postId: 1,
  ref: 'social',
  },  
  })
  }
  return (
    <>
      <div>About Page </div>
      <button onClick={gotoPost}>Go to Post List  </button>
    </>
  );
}

