import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import './topbar.css';
import pic from '../../assets/godwin.jpg';

const Topbar = () => {
  return (
       <div className="topbar">
           <div className="topbarWrapper">
               <div className="topLeft">
                 <span className="logo">GShop-admin</span>
               </div>
               <div className="topRight">
                 <div className="topbarIconContainer">
                    <NotificationsNoneIcon/>
                    <span className="topIconBadge">2</span>
                 </div>
                 <div className="topbarIconContainer">
                    <LanguageIcon/>
                 </div>
                 <div className="topbarIconContainer">
                    <SettingsIcon/>
                 </div>
                 <img src={pic}  className="topAvatar" alt="profile"/>
               </div>
           </div>
       </div>
  )
}

export default Topbar