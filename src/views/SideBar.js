import React from 'react';
import Logo from '../asset/logo.png'

function SideBar() {

  return (
    <div className='sidebar'>
      <div className='logo'>
        <img src={Logo} alt='logo' loading='lazy'/>
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