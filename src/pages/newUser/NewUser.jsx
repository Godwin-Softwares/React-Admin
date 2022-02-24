import React from 'react'
import './newUser.css'

export const NewUser = () => {
  return (
    <div className='newUser'>
        <h1 className="newUserTitle">Add User</h1>
        <div className="newUserForm">
            <div className="newUserItem">
                <label>Username</label>
                <input type="text" placeholder="Goddon"/>
            </div>
            <div className="newUserItem">
                <label>Full Name</label>
                <input type="text" placeholder="Eseigbe Godwin"/>
            </div>
            <div className="newUserItem">
                <label>Email</label>
                <input type="email" placeholder="godwin@gmail.com"/>
            </div>
            <div className="newUserItem">
                <label>Password</label>
                <input type="password" placeholder=""/>
            </div>
            <div className="newUserItem">
                <label>Phone</label>
                <input type="text" placeholder="+2347035488699"/>
            </div>
            <div className="newUserItem">
                <label>Address</label>
                <input type="text" placeholder="13 Bode Thomas way"/>
            </div>
            <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">
                    <input type="radio" name='male' value='male' id='male'/>
                    <label htmlFor='male'>Male</label>
                    <input type="radio" name='female' value='female' id='female'/>
                    <label htmlFor='female'>Female</label>
                    <input type="radio" name='others' value='others' id='others'/>
                    <label htmlFor='others'>Others</label>
                </div>
                
            </div>
            <div className="newUserItem">
                <label>Active</label>
                <select name="active" id="active" className="newUserSelect">
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </select>
            </div>
            <button className="newUserButton">Create</button>
        </div>
    </div>
  )
}
