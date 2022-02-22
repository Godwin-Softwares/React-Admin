import React from 'react'
import './featuredInfo.css'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined'
const FeaturedInfo = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <span className='featuredTitle'>Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">-11.6 <ArrowDownwardOutlinedIcon className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSub">Compared to last Month</span>
        </div>
        <div className='featuredItem'>
            <span className='featuredTitle'>Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$1,415</span>
                <span className="featuredMoneyRate">-3.6 <ArrowDownwardOutlinedIcon className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSub">Compared to last Month</span>
        </div>
        <div className='featuredItem'>
            <span className='featuredTitle'>Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$1,415</span>
                <span className="featuredMoneyRate">+7.6 <ArrowUpwardOutlinedIcon className="featuredIcon"/></span>
            </div>
            <span className="featuredSub">Compared to last Month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo