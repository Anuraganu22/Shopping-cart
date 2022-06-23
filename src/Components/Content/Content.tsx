import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
//import './Content.css'
import { Typography } from '@mui/material';
import Cards from '../Cards/Cards';
import Grids from '../Grid/Grids';
type Props = {}

const Content = (props: Props) => {
  return (
    <div className='Box'>
         <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width:500,
          height:600,
        },
      }}
    ></Box>
        <Paper variant="outlined" square elevation={8} >
            <h1>My products..</h1>
            <Grids/>
        </Paper>
        <Box/>
    </div>
  )
}

export default Content