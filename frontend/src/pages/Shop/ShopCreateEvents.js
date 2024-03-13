import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import CreateEvent from '../../components/Shop/CreateEvent.js'
import DashboardSidebar from '../../components/Shop/Layout/DashboardSidebar.js'

const ShopCreateEvents = () => {
  return (
<div>
        <DashboardHeader/>
        <div className="flex items-center justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <DashboardSidebar active={4} />
          </div>
          <div className="w-full justify-center flex">
            <CreateEvent />
          </div>
        </div>
    </div>
  )
}

export default ShopCreateEvents