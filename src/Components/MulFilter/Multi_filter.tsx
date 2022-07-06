import React, { useState } from 'react'
import Select from 'react-select'
import { useContext } from 'react';
import productContext from '../../Context/productContext';
import { isTemplateExpression } from 'typescript';
type Props = {}

const Multi_filter = (props: Props) => {

  const { mydata } = useContext(productContext);
  const [selctdata, SetSelectData] = useState<string>()
  console.log(mydata, "@@@@")

  //  const option=Array.from(new Set(mydata.map((item:any)=>({...item, label: item.pro_Brand , value: item.pro_Brand_id}))))

  const getFilteredOptions = React.useCallback(() => {
    const list: any = [];
    mydata.forEach((item: any) => {
      console.log('my',item)
      if (list.findIndex((el: any) => el.value === item.pro_Brand_id) === -1) {
        list.push({ ...item ,label:item.pro_Brand , value: item.pro_Brand_id})
      }
    })
    return list;
  }, [mydata])
  return (
    <div>
      <Select options={getFilteredOptions()} isMulti />
    </div>

  )
}
export default Multi_filter