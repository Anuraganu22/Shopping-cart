import React, { useContext, useState } from 'react'
import Slider from '@mui/material/Slider';
import productContext from '../../../../Context/productContext';
import { Button } from '@mui/material';
import './Style.css'
type Props = {}

const Sliders = (props: Props) => {
  const { priceFilter } = useContext(productContext)
  const [selectedValue, SetSelectedValue] = useState<any>([])

  const handleChangePrice = (e: any, val: any) => {
    SetSelectedValue(val)
  }

  const invokeFilter = () => {
    priceFilter(selectedValue)
  }

  return (
    <>
    <div>
      <Slider defaultValue={500}
        //  value={selectedValue}
        onChange={handleChangePrice}
        valueLabelDisplay='on'
        min={100}
        max={2000}
      />
    </div>
<div className='filterbutton'>
<Button variant="contained" onClick={invokeFilter}>Filter</Button>
</div>
</>

  )
}

export default Sliders