import React from 'react'
import './user.css'
import pic from '../../assets/godwin.jpg'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublishIcon from '@mui/icons-material/Publish';

export const User = () => {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <button className="userAddButton">Create User</button>
        </div>
        <div className='userContainer'>
            <div className="userShow">
              <div className='userShowTop'>
                <img src={pic} alt="" className='userShowUserImg'/>
                <div className='userShowTopTitle'>
                <span className='userShowUsername'>Eseigbe Godwin</span>
                <span className='userShowUserTitle'>Software Engineer</span>
              </div>
              </div>
              
              <div className="userShowBottom">
                <span className='userShowTitle'>Account Detail</span>
                <div className="userShowInfo">
                    <PermIdentityIcon className="userShowIcon"/>
                    <span className='userShowInfoTitle'>Godwin2022</span>
                </div>
                <div className="userShowInfo">
                    <CalendarTodayIcon className="userShowIcon"/>
                    <span className='userShowInfoTitle'>10.5.1985</span>
                </div>
                <span className='userShowTitle'>Contact Details</span>
                <div className="userShowInfo">
                    <PhoneAndroidIcon className="userShowIcon"/>
                    <span className='userShowInfoTitle'>+2347035488699</span>
                </div>
                <div className="userShowInfo">
                    <MailOutlineIcon className="userShowIcon"/>
                    <span className='userShowInfoTitle'>Godwin2022@gmail.com</span>
                </div>
                <div className="userShowInfo">
                    <LocationOnIcon className="userShowIcon"/>
                    <span className='userShowInfoTitle'>18 Bode Thomas way Lagos</span>
                </div>
                
               
              </div>
            </div>
            <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className='userUpdateForm'>
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Username</label>
                    <input
                      type="input"
                      placeholder="Godwin2022"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Full Name</label>
                    <input
                      type="input"
                      placeholder="Eseigbe Godwin"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Date</label>
                    <input
                      type="input"
                      placeholder="10.12.1985"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Phone Number</label>
                    <input
                      type="input"
                      placeholder="+2347035488699"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Email Address</label>
                    <input
                      type="input"
                      placeholder="godwin2022@gmail.com"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Address</label>
                    <input
                      type="input"
                      placeholder="18 bode thomas way, Lagos"
                      className="userUpdateInput"
                    />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img src={pic} alt="" className='userUpdateImg'/>
                    <label htmlFor='file'><PublishIcon className="userUpdateIcon"/></label>
                    <input type="file" id="file" style={{display:"none"}}/>
                  </div>
                  <button className="userUpdateButton">Update</button>
                </div>
              </form>
            </div>
        </div>
    </div>
  )
}
