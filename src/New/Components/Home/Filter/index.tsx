import { Button } from '@mui/material'
import React from 'react'
import MultiSelect from '../../Common/MultiSelect'
import Sliders from '../../Common/Slider'

import './Style.css'
type Props = {}

const Filter = (props: Props) => {
  return (
  <>
      <div className='input-group'>
        <div>
        <MultiSelect/>
        </div>
        <div className='label-text'>select your Price range..!</div>
      <div className='slider-part'>
        <Sliders/>
        </div>
        <div className='filterbutton'>
        <Button variant="contained" >Filter</Button>
        </div>
        
    </div>
    </>
     
  
    
  )
}

export default Filter