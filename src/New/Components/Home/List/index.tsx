import React, { useContext } from 'react'
import productContext from '../../../../Context/productContext'
import ListItem from './Listitems'
import './Style.css'
type Props = {}

const List = (props: Props) => {
    const {productdata} =useContext(productContext)
  return (
    <div className='list-wrap'> 
            <ListItem/>
      
    </div>
  )
}

export default List