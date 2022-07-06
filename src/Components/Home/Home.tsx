import React, { useEffect, useState,useContext,createContext } from 'react'
import SideBar from '../SideBar/SideBar'
import './home.css'
import MyTypes from '../../Interface/types'
import axios from 'axios'
import { Box } from '@mui/material'
import productContext from '../../Context/productContext'
type IHomeProps = {}

//Creating a context
const Home = (props: IHomeProps) => {
 const [mydata, setMyData] =React.useState<any>([])
 const getProduct =async()=>{ 
   const {data} = await axios.get('http://localhost:4000/products ')
   console.log(data,"MY DATA IS ")
   setMyData(data)
 }
 useEffect(()=>{
 getProduct();
 },[])

  return (
    <div className='main'>

<productContext.Provider value={{ mydata:mydata }}>
        <SideBar/>
      </productContext.Provider>  
    </div>
  )         
}

export default Home