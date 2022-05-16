import { HeroSection } from '@/components/home';
import { FeatureWork } from '@/components/home/featured-work';
import { MainLayout } from '@/components/layout';
import { Box } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { NextPageWithLayout } from '../models';
import styles from '../styles/Home.module.css';

const Home: NextPageWithLayout = () => {
  return (
      <Box >
      <HeroSection/>
      <FeatureWork/>
      </Box>
  );
};
Home.Layout = MainLayout;
export default Home;
