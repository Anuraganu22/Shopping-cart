import React from 'react'
import Slider from '@mui/material/Slider';
type Props = {}

const Sliders = (props: Props) => {
  return (
    <div>
         <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </div>
  )
}

export default Sliders