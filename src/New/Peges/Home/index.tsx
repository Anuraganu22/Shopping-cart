import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Filter from '../../Components/Home/Filter'
import TopBar from '../../Components/Home/TopBar'
import productContext from '../../../Context/productContext'
import './Style.css'
type Props = {}

const Home = (props: Props) => {
    const [productdata, SetProductdata] =useState<any>([])
    const getList = async()=>{
        const {data}= await axios.get('http://localhost:4000/products')
        console.log(data,"!!!")
        SetProductdata(data)
        }
        useEffect(()=>{
            getList()
        },[])
  return (
    <div>
      <productContext.Provider value={{productdata:productdata}}>
        <div className='home'>
      {/* App Bar */}
      <TopBar/>
      <div className='home_panelList-wrap'>
        {/* Filter */}
        <div className='home_panel-wrap'>
        <Filter/>
        </div>
        {/* List & Empty View */}
        <div className='home_list-wrap'>
        </div>
      </div>
    </div>
    </productContext.Provider>
    </div>
  )
}

export default Home