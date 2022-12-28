import React, { useState } from 'react';
import Logo from '../asset/logo.png'

function SideBar({ ...props }) {

  return (
    <div className='sidebar'>
      <div className='logo'>
        <img src={Logo} alt='logo' />
      </div>
      <div className='item active'>
        Dashboard
      </div>
      <div className='item'>
        Influencers
      </div>
      <div className='item'>
        Statistics
      </div>
      <div className='item'>
        Log out
      </div>

    </div>
  )
}

export default SideBar