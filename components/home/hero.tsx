import { useAuth } from '@/hooks';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
export function HeroSection() {
  const { profile, firstLoading } = useAuth();
  return (
    <Box pt={{ xs: 4, md: 6 }} pb={{ xs: 4, md: 6 }}>
      <Container>
        <Stack
          spacing={4}
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'start' }}
        >
          <Box>
            <Typography component="h1" variant="h3" fontWeight="bold" mb={{ xs: 3.5, md: 5 }}>
              Hi, I am {(profile as any)?.name} <br /> Web design
            </Typography>
            <Typography mb={{ xs: 3.5, md: 5 }}>
              {' '}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad commodi iusto harum sequi
              voluptatem? Placeat, vero numquam itaque incidunt similique quasi ex voluptatem et
              laudantium provident temporibus quam facilis unde!
            </Typography>
            <Button size="large">Dowload CV</Button>
          </Box>
          <Box
            minWidth="240px"
            sx={{
              borderRadius: '50%',
              height: '300px',
              '& *': {
                // height: '100% !important'
              },
              '& img': {
                borderRadius: '5px',
              },
            }}
          >
            <Image
              src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2022/4/21/dc1-1650525506742648648617.png"
              width={240}
              height={180}
              layout="responsive"
              alt="img-info"
              style={{marginTop:'1rem'}}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
