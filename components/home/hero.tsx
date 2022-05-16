import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
export function HeroSection() {
    return (
        <Box pt={{xs: 4,md: 18}} pb={{xs: 7, md: 9}}>
            <Container>
                <Stack spacing={4} direction={{xs: 'column-reverse' , md: 'row'}} alignItems={{xs: 'center', md: 'flex-start'}} textAlign={{xs: 'center', md: 'start'}}>
                    <Box>
                        <Typography component="h1" variant='h3' fontWeight='bold' mb={{xs: 3.5, md: 5}}>
                            Hi, I am Duy <br /> Web design
                        </Typography>
                        <Typography mb={{xs: 3.5, md: 5}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad commodi iusto harum sequi voluptatem? Placeat, vero numquam itaque incidunt similique quasi ex voluptatem et laudantium provident temporibus quam facilis unde!</Typography>
                        <Button size='large'>Dowload CV</Button>
                    </Box>
                    <Box minWidth='240px' sx={{
                        borderRadius: '50%',
                        width: '200px',
                        height: '300px',
                        '& *': {
                            // height: '100% !important'
                        },
                        '& img': {
                            borderRadius: '5px',
                        }
                    }}>
                        {/* <Image src={myInfo} alt='img-info' layout='responsive'/> */}
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}
