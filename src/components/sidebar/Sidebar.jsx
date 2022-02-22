import React from 'react'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyleIcon className="sidebarIcon"/> Home
                    </li>
                    <li className="sidebarListItem">
                        <TimelineIcon className="sidebarIcon"/> Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className="sidebarIcon"/> Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <PersonOutlineOutlinedIcon className="sidebarIcon"/> Users
                    </li>
                    <li className="sidebarListItem">
                        <Inventory2OutlinedIcon className="sidebarIcon"/> Products
                    </li>
                    <li className="sidebarListItem">
                        <PaidOutlinedIcon className="sidebarIcon"/> Transaction
                    </li>
                    <li className="sidebarListItem">
                        <AssessmentOutlinedIcon className="sidebarIcon"/> Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <EmailOutlinedIcon className="sidebarIcon"/> Mail
                    </li>
                    <li className="sidebarListItem ">
                        <FeedbackOutlinedIcon className="sidebarIcon"/> Feedback
                    </li>
                    <li className="sidebarListItem ">
                        <MessageOutlinedIcon className="sidebarIcon"/> Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <ManageAccountsOutlinedIcon className="sidebarIcon"/> Manage
                    </li>
                    <li className="sidebarListItem">
                        <AnalyticsOutlinedIcon className="sidebarIcon"/> Analytics
                    </li>
                    <li className="sidebarListItem">
                        <ReportGmailerrorredOutlinedIcon className="sidebarIcon"/> Reports
                    </li>
                </ul>
            </div>
   
        </div>
    </div>
  )
}

export default Sidebar