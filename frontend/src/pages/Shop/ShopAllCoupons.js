import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSidebar from '../../components/Shop/Layout/DashboardSidebar'
import AllCouponCodes from '../../components/Shop/AllCouponCodes'


const ShopAllCoupons = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSidebar active={4} />
        </div>
        <div className="w-full justify-center flex">
            <AllCouponCodes />
        </div>
      </div>
    </div>
  )
}

export default ShopAllCoupons