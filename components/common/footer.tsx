import { Box, Stack, Typography } from '@mui/material';
import * as React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
export interface IFooterProps {
}
export interface Social {
  name: string;
  link?: string;
  icon?: string;
  target?: string;
}

export  function Footer (props: IFooterProps) {
  const socials: Social[] = [{
    name: '/nguyenduy1011',
    icon: 'bx bxl-facebook-square btn-facebook',
    link: 'https://www.facebook.com/nguyenduy1011/',
    target: '_blank'
  }, {
    name: '/channel/UCsq5KHaN6zZpM4BYrElb2mQ',
    icon: 'bx bxl-youtube btn-youtube',
    link: 'https://www.youtube.com/channel/UCsq5KHaN6zZpM4BYrElb2mQ',
    target: '_blank'
  }, {
    name: 'ducduy10k@gmail.com',
    icon: 'bx bxl-gmail btn-gmail',
    link: 'mailto:ducduy10k@gmail.com?subject=subject&body=body',
    target: '_blank'
  }, {
    name: 'live:duy10111999',
    icon: 'bx bxl-skype btn-skype',
    link: 'skype:duy10111999?call',
    target: '_blank'
  }, {
    name: '/ducduy10k',
    icon: 'bx bxl-github btn-github',
    link: 'https://github.com/ducduy10k',
    target: '_blank'
  }, {
    name: 'Hanoi, Vietnam',
    icon: 'bx bxs-map btn-location',
    link: 'https://www.google.com/maps?q=21.029689, 105.797603',
    target: '_blank'
  },];
  
  return (
    <Box component='footer' py={2} textAlign="center">
      <Stack>

      </Stack>
      <Typography>
        Copyright <CopyrightIcon fontSize='small'></CopyrightIcon> {new Date().getFullYear()} All right reserved 
      </Typography>
    </Box>
  );
}
