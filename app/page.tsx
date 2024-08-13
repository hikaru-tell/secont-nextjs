"use client";
import React from 'react';
import Head from 'next/head';
import GlobalStyle from '../styles/GlobalStyle';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Landing Page</title>
    </Head>
    <GlobalStyle />
    <Header />
    <MainSection />
    <Footer />
  </>
);

export default Home;
