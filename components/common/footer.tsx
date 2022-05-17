import { Box, Icon, Stack, Typography } from '@mui/material';
import * as React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Facebook, Mail, PersonPinCircle, SvgIconComponent, YouTube } from '@mui/icons-material';
export interface IFooterProps {
}
export interface Social {
  name: string;
  link?: string;
  icon?: any;
  target?: string;
}

export function Footer(props: IFooterProps) {
  const socials: Social[] = [{
    name: '/nguyenduy1011',
    icon: Facebook,
    link: 'https://www.facebook.com/nguyenduy1011/',
    target: '_blank'
  }, {
    name: '/channel/UCsq5KHaN6zZpM4BYrElb2mQ',
    icon: YouTube,
    link: 'https://www.youtube.com/channel/UCsq5KHaN6zZpM4BYrElb2mQ',
    target: '_blank'
  }, {
    name: 'ducduy10k@gmail.com',
    icon: Mail,
    link: 'mailto:ducduy10k@gmail.com?subject=subject&body=body',
    target: '_blank'
  }, {
    name: 'Hanoi, Vietnam',
    icon: PersonPinCircle,
    link: 'https://www.google.com/maps?q=21.029689, 105.797603',
    target: '_blank'
  },];

  return (
    <Box component='footer' py={2} textAlign="center">
      <Stack direction='row' justifyContent='center' spacing={0}>
        {
          socials.map((social, index) => {
            return <Box key={index} component='a' p={1} href={social.link} target={social.target} rel='noopener noreferrer'> 
              <Icon component={social.icon} sx={{fontSize: '36px'}}></Icon>
            </Box>
          })
        }
      </Stack>
      <Typography>
        Copyright  © {new Date().getFullYear()} All right reserved
      </Typography>
    </Box>
  );
}
