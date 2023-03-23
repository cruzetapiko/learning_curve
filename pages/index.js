import React from "react";
import Link from "next/link";

export default function index() {
  return (
    <>
      <h1>Hello Geeks</h1>
      <ul>
        <li>
          getStaticProps :<Link href={"/albums"}>albums</Link>
        </li>
        <li>
          getStaticPaths :<Link href={"/users/1"}>User 1</Link>
        </li>
        <li>
          getServerSideProps :<Link href={"/posts"}>Posts Page</Link>
        </li>
      </ul>
    </>
  );
}