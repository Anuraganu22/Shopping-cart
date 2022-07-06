import React from 'react'
import Filter from '../../Home/Filter'
import AppBars from '../../Home/Header/AppHeader'
import ProductLists from '../../Home/ProductList/ProductList'
import ProductList from '../../Home/ProductList/ProductList'
import SearchBar from '../../Home/SearchBar.tsx'
import './Style.css'
type Props = {}

const HomePege = (props: Props) => {
  return (
    <div className='home'>
        {/* Search bar */}
        {/* <SearchBar/> */}
       <AppBars/>
        <div className='home-panelList-wrap'> 
        <div className='home-panel-wrap'>
           {/* filter side panel */}
        <Filter/>
        </div>
        <div className='home-list-wrap'>
          <ProductLists/>
        </div>
    </div>
    </div>
  )
}

export default HomePege