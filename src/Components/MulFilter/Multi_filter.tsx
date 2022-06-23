import React, { useState } from 'react'
import MultiSelect from "multiselect-react-dropdown";
type Props = {}

const Multi_filter = (props: Props) => {
    const [data,SetData] = useState<string>()
    const options = [
        { label: "Grapes", value: "grapes" },
        { label: "Mango ", value: "mango" },
        { label: "Strawberry ", value: "strawberry" }
      ];
    
  return (
    <div>
       <MultiSelect
       isObject={false}
        options={options}
        onRemove={(e)=>{console.log(e)}}
       onSelect={(e)=>{console.log(e)}}
      />
    </div>
  )
}

export default Multi_filter