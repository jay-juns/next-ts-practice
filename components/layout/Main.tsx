import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="자신의 마음을 적는 공간" />
        <title>쓰다</title>
      </Head>
      <div>
        <Header />
       {children}
       <Footer />
      </div>
    </>

  )
}

export default MainLayout;