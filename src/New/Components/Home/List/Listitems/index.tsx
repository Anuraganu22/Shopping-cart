import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import productContext from '../../../../../Context/productContext'

type Props = {}

const ListItem = (props: Props) => {
    const{productdata}=useContext(productContext)
  return (
    <>{
        productdata.map((item:any)=>{
            return <Card sx={{ maxWidth:300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image={item.pro_image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {item.pro_name} 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <h6></h6>Brand:{item.pro_Brand}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <h6></h6>price:{item.pro_price}/-₹
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        })
        }
      
    </>
  )
}

export default ListItem