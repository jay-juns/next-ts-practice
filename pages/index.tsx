import Head from 'next/head'
import React, { FC } from 'react'
import Image from "next/image"
import styles from '../styles/Home.module.css'
import PageWithLayoutType from '../types/pageWithLayoutType';
import MainLayout from '../components/layout/Main';

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>닫다</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        여기가 홈
      </div>
    </div>
  )
};

(Home as PageWithLayoutType).layout = MainLayout

export default Home
