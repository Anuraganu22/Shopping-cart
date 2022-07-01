import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
//import './Content.css'
import { Grid, Typography } from '@mui/material';
import Cards from '../Cards/Cards';
type Props = {}

const Content = (props: Props) => {
  return (
    <div>
<div><h1>MY PRODUCTS..</h1> </div>
    <Grid container spacing={3}  rowSpacing={3}>
   <Cards/>
   </Grid>
    </div>
  )
}

export default Content