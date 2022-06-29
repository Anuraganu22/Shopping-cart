import React, { useEffect, useState } from 'react'
import SideBar from '../SideBar/SideBar'
import './home.css'
import MyTypes from '../../Interface/types'
import axios from 'axios'
import { Box } from '@mui/material'
type IHomeProps = {}

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
 
          <SideBar/>
      
    </div>
  )         
}

export default Home