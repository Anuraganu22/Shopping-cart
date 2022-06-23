import React from 'react'
import './SideBar.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AppBars from '../AppBar/AppBar';
import Grids from '../Grid/Grids';
import Content from '../Content/Content';
import Multi_filter from '../MulFilter/Multi_filter';
type Props = {}
const drawerWidth = 240;
const SideBar = (props: Props) => {
  return (
    // <div className='sidebar'>
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
  <Typography sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
     <AppBars/>
  </Typography>
   
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
    
      </Box>
      <Typography>
        <h3>Filter your Brans...!</h3>
     <Multi_filter/>
        </Typography> 
    </Drawer>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Typography paragraph>
       <Content/>
      </Typography>
    </Box>
  </Box>
    
  )
}
export default SideBar