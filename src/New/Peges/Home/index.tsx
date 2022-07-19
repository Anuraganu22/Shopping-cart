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
  const [searchValue, setSearchValue] = useState<any>([])
  const [searchData, setSearchData] = useState<any>([])
  const [selectedPrice,setSelectedPrice]=useState<any>([100,2000])
  const getList = async () => {
    const { data } = await axios.get('http://localhost:4000/products')
    console.log(data, "!!!")
    SetProductdata(data)
  }
  useEffect(() => {
    getList()
    setSearchData(productdata)

  }, [])

  /*  filter   */
  const filter = (selectedValue: any) => {
    if (selectedValue) {
      const brandfilter = productdata.filter((item: any) => {
        const isPresent = selectedValue.some((value: any) => {
          return value.pro_Brand === item.pro_Brand
        })
        return isPresent
      })
      SetProductdata(brandfilter)
      console.log(brandfilter, "MY BRAND..?")
    }
  }

/* price filter */


const priceFilter =()=>{

const minPrice=[0]
const maxPrice=[1]
const pricefilter = productdata.filter((item:any)=>{
 return item.pro_price >= minPrice && item.pro_price <= maxPrice
})
SetProductdata(pricefilter)
}



  /* Search */
  const search = (searchInput: any) => {
    if (searchInput) {
     // debugger;
      const updatedList = productdata.filter((item: any) => {
          // debugger;
          console.log(searchInput,"!!!")
          return item.pro_name.includes(searchInput)
      })
      SetProductdata(updatedList)
    }
  }

  return (
    <div>
      <productContext.Provider value={{ productdata: productdata, filter, search,priceFilter }}>
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