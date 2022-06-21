import * as React from "react";
import Link from "next/link";
export default function Navbar() {

 
  return (
    <>
      <div>
        <Link href="/">
          <h1><a>Home</a></h1>
        </Link>
      </div>
      <div>
        <Link href="/about">
          <h1><a>About</a></h1>
        </Link>
        <Link href="/post">
          <h1><a>Post</a></h1>
        </Link>
      </div>
    </>
  );
}