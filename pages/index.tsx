import { SEO } from '@/components/common';
import { HeroSection } from '@/components/home';
import { FeatureWork } from '@/components/home/featured-work';
import FeaturedSkill from '@/components/home/featured-skill';
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
    <Box>
      <SEO
        data={{
          title: 'My CV',
          decription: "Create new you're profile",
          url: 'https://learn-nextjs-jade.vercel.app/',
          thumnailUrl:
            'https://yt3.ggpht.com/UnGsNQZn9J8p_mF6waLmrpgShQmN6KZkdzsBjdPAIeyObx91CUxRuQNB1_hhLPzhJOXzgAwK_A=s108-c-k-c0x00ffffff-no-rj',
        }}
      />
      <HeroSection />
      <FeaturedSkill></FeaturedSkill>
      <FeatureWork />
    </Box>
  );
};
Home.Layout = MainLayout;
Home.isPrivate = true;

export default Home;
