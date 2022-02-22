import React from 'react'
import './widgetSm.css'
import pics from '../../../assets/godwin.jpg'
import VisibilityIcon from '@mui/icons-material/Visibility';

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src={pics} alt={pics} className="widgetSmImg"/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Eseigbe Godwin</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/> Display
                 </button>
            </li>
            <li className="widgetSmListItem">
                <img src={pics} alt={pics} className="widgetSmImg"/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Eseigbe Godwin</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/> Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={pics} alt={pics} className="widgetSmImg"/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Eseigbe Godwin</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/> Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={pics} alt={pics} className="widgetSmImg"/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Eseigbe Godwin</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/> Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={pics} alt={pics} className="widgetSmImg"/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Eseigbe Godwin</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon className="widgetSmIcon"/> Display
                </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm