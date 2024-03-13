import React from 'react'
import styles from '../../styles/styles'
import ShopInfo from '../../components/Shop/ShopInfo'
import ShopProfile from '../../components/Shop/ShopProfile'

const ShopHomePage = () => {
  return (
    <div className={`${styles.section} bg-[#f5f5f5]`}>
      <div className="w-full flex py-10 justify-between">
        <div className="w-[25%] bg-[#fff] shadow-sm rounded-[4px] overflow-y-scroll h-[90vh] sticky top-10 left-0 z-10">
          <ShopInfo isOwner={true}/>
        </div>

        <div className="w-[72%] rounded-[4px] ">
        <ShopProfile isOwner={true} />
        </div>
      </div>

    </div>
  )
}

export default ShopHomePage