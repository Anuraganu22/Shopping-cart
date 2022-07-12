import React, { useCallback } from 'react'
import Select from 'react-select'
import { useContext } from 'react';
import productContext from '../../../../Context/productContext';
type Props = {}
const MultiSelect = (props: Props) => {
const {productdata} =useContext(productContext);
console.log(productdata,"ALLLL DAAA TAAA")

const filteredOptions = React.useCallback(() => {
  const list: any = [];
  productdata?.forEach((item: any) => {
    console.log('my',item)
    if (list.findIndex((el: any) => el.value === item.pro_Brand_id) === -1) {
      list.push({ ...item ,label:item.pro_Brand , value: item.pro_Brand_id})
    }
  })
  return list;
}, [productdata])
console.log(filteredOptions(),"########")

  return (
    <div >
      <Select options={filteredOptions()}  isMulti />
    </div>
  )
}

export default MultiSelect



