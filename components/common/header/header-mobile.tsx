import { Box, Button, Container, Stack, SwipeableDrawer,Link as MuiLink, ListItem, List, Divider, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import React, { useState } from 'react';
import { ROYTE_LIST } from './routes';
import { useRouter } from 'next/router';
import { Menu } from '@mui/icons-material';
export interface IHeaderMobileProps {}
type Anchor = 'top' | 'left' | 'bottom' | 'right';

export function HeaderMobile(props: IHeaderMobileProps) {
  const route = useRouter();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const router = useRouter();
  const toggleDrawer =
  (anchor: Anchor, open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleMenuClick =( href: string ) =>{
    console.log('clikc' + href);
    route.push(href)
    return;
  }
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {ROYTE_LIST.map((route, index) => (
          <ListItem key={route.path} disablePadding>
            <ListItemButton onClick={e =>handleMenuClick( route.path)}>
            <ListItemText primary={route.lable} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <Stack direction='row'>
          <Box flexGrow={1}>
          </Box>
          <Button onClick={toggleDrawer('right', true)}><Menu></Menu></Button>
          <SwipeableDrawer
            anchor='right'
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            {list('right')}
          </SwipeableDrawer>
        </Stack>
    </div>
  );
}
