import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MultiSelect from './MultiSelect';
import Grids from './Grids';
import Avatar from '@mui/material/Avatar';
import SearchBox from './SearchBox';
import Slider from '@mui/material/Slider';
import ProductList from './ProductList';

const drawerWidth = 260;
type Props = {}

const SideBar = (props: Props) => {
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            <Avatar alt="Remy Sharp"
                                src="data:image/png;base64,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"
                                sx={{ width: 56, height: 56 }} />
                        </Typography>
                        <Typography variant="h6" noWrap component="div">
                            My-shoe
                        </Typography>
                        <Typography variant="h6" align='right'>
                            <SearchBox />
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}>
                    <Toolbar />
                    <Box sx={{ overflow: 'visible' }}>
                        <List>
                        <MultiSelect />
                        </List>
                    </Box>
                    {/* <Typography><h5>price..!</h5></Typography>
                    <Typography align="justify"><Slider /></Typography> */}
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <Typography paragraph>
                    </Typography>
                    <Typography >
                    <ProductList/>
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default SideBar
