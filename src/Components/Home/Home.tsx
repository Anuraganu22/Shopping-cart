import React from 'react'
import AppBar from '../AppBar/AppBar'
import Content from '../Content/Content'
import SideBar from '../SideBar/SideBar'
import './home.css'
type Props = {}

const Home = (props: Props) => {
  return (
    <div className='main'>
        {/* <AppBar/> */}
        <SideBar/>
        {/* <Content/> */}
    </div>
  )
}

export default Home