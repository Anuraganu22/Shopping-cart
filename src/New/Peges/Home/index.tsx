import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Filter from '../../Components/Home/Filter'
import TopBar from '../../Components/Home/TopBar'
import productContext from '../../../Context/productContext'
import './Style.css'
import List from '../../Components/Home/List'

type Props = {}

const Home = (props: Props) => {
  const [productdata, SetProductdata] = useState<any>([])
  const [selectedBrand, SetSelectedBrand] = useState<any>([])
  const [result, SetResult] = useState<any>([])


  const getList = async () => {
    const { data } = await axios.get('http://localhost:4000/products')
    console.log(data, "!!!")
    SetProductdata(data)
  }
  useEffect(() => {
    getList()
  }, [])

   /*  filter   */
  const filter = (selectedValue: any) => {
    if (selectedValue) {
      const brandfilter = productdata.filter((item: any) => {
        // console.log(item,"@@@!!")
        const isPresent = selectedValue.some((value: any) => {
          return value.pro_Brand === item.pro_Brand
        })
        console.log(item, "MY FILTER VALUES")
        console.log(isPresent, "MY FILTER-2 VALUES")
        return isPresent
      })
      SetProductdata(brandfilter)
      console.log(brandfilter, "MY BRAND..?")
    }
  }

/* Search */
const search =((searchedValue:any)=>{
    if(searchedValue){
      const newSearchResult:any=[];
      productdata.forEach((item:any)=>{
        if(item.pro_name.includes(searchedValue))
        {
          newSearchResult.push(item)
        }
      })
      SetProductdata(newSearchResult) 
    }
  });

  return (
    <div>
      <productContext.Provider value={{ productdata: productdata, filter ,search}}>
        <div className='home'>
          {/* App Bar */}
          <TopBar />
          <div className='home_panelList-wrap'>
            {/* Filter */}
            <div className='home_panel-wrap'>
              <Filter />
            </div>
            {/* List & Empty View */}
            <div className='home_list-wrap'>
              <List />
            </div>
          </div>
        </div>
      </productContext.Provider>
    </div>
  )
}

export default Home