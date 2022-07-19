import React, { useContext, useState } from 'react'
import Slider from '@mui/material/Slider';
import productContext from '../../../../Context/productContext';
type Props = {}

const Sliders = (props: Props) => {
  const {priceFilter} = useContext (productContext)
  const [selectedValue, SetSelectedValue] = useState<any>([])

const handleChangePrice =(e:any)=>{
  priceFilter(SetSelectedValue)
}

  return (
    <div>
         <Slider defaultValue={500} aria-label="Default" 
           value={selectedValue}
           onChange={handleChangePrice}
           valueLabelDisplay='on'
           min={100}
           max={2000}
        
         />
    </div>
  )
}

export default Sliders