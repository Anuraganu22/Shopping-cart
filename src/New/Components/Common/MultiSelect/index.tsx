import React, { useCallback, useState } from 'react'
import Select from 'react-select'
import { useContext } from 'react';
import productContext from '../../../../Context/productContext';
import { Button } from '@mui/material';
import './Style.css'
type Props = {}
const MultiSelect = (props: Props) => {
  const { productdata, filter} = useContext(productContext);
  console.log(filter,"function...")
  const [selectedValue, SetSelectedValue] = useState<any>([])


  const filteredOptions = React.useCallback(() => {
    const list: any = [];
    productdata?.forEach((item: any) => {
      if (list.findIndex((el: any) => el.value === item.pro_Brand_id) === -1) {
        list.push({ ...item, label: item.pro_Brand, value: item.pro_Brand_id })
      }
    })
    return list;
  }, [productdata])

  return (
    <div >
      <Select options={filteredOptions()}
        defaultValue={selectedValue}
        onChange={SetSelectedValue}
        isMulti />
      {/* <button onClick={()=>filter(["puma","nike"])}>Filter</button> */}
      <div className='button'>
         <Button variant="contained" onClick={()=>filter(selectedValue)}>Filter</Button>
      </div>
    </div>
  )
}
export default MultiSelect



