import React from 'react'
import './widgetLg.css'
import pics from '../../../assets/godwin.jpg'

const WidgetLg = () => {

  const Button = ({type}) => {
      return <button className={"widgetLgButton "+type}>{type}</button>
  }

  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest Transaction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <td className="widgetLgTh">Customer</td>
          <td className="widgetLgTh">Date</td>
          <td className="widgetLgTh">Amount</td>
          <td className="widgetLgTh">Status</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={pics} alt={pics} className="widgetLgImg"/>
            <span className='widgetLgName'>Eseigbe Godwin</span>
          </td>
          <td className="widgetLgDate">22 Feb, 2022</td>
          <td className="widgetLgAmount">$1,2400</td>
          <td className="widgetLgbtn">
            <Button type='Approved'/>
            </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={pics} alt={pics} className="widgetLgImg"/>
            <span className='widgetLgName'>Eseigbe Godwin</span>
          </td>
          <td className="widgetLgDate">22 Feb, 2022</td>
          <td className="widgetLgAmount">$1,2400</td>
          <td className="widgetLgbtn">
            <Button type='Pending'/>
            </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={pics} alt={pics} className="widgetLgImg"/>
            <span className='widgetLgName'>Eseigbe Godwin</span>
          </td>
          <td className="widgetLgDate">22 Feb, 2022</td>
          <td className="widgetLgAmount">$1,2400</td>
          <td className="widgetLgbtn">
            <Button type='Declined'/>
            </td>
        </tr>
        
      </table>
    </div>
  )
}

export default WidgetLg