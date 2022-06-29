
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useContext } from 'react';
import productContext from '../../Context/productContext';

type Props = {}
const Cards = () => {
  const product =useContext(productContext);
  console.log(product,"MY PRODUCTS....")
  return (
    <div>
  <Card sx={{ maxWidth: 345 }}>
    {
      product.map((item:any)=>{
        <CardActionArea>
        <CardMedia />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </CardContent>
      </CardActionArea>

      })
   
}
    </Card>
    </div>
  )
}

export default Cards