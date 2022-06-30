
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
  const {mydata}=useContext(productContext);
  console.log(mydata,"MY PRODUCTS....")
  return (
    <div> {
      mydata.map((item:any)=>{
     return <Card >
        <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.pro_image }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.pro_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {item.pro_Brand}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     })
    }
    </div>
  )
}
export default Cards