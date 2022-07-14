import { Button } from '@mui/material'
import React from 'react'
import MultiSelect from '../../Common/MultiSelect'

import './Style.css'
type Props = {}

const Filter = (props: Props) => {
  return (
    <div>
         <div className='input-group'>
      <MultiSelect/>
    </div>
  
    </div>
  )
}

export default Filter