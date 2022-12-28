import React from 'react'
import Map from '../asset/world_map.png'
function SalesByCountry() {
  return (
    <div className="sales-country">
      <div className="text-center title">Sales number by country</div>
      <div className='map'>
        <img src={Map} alt='map' loading='lazy' />
      </div>
    </div>
  )
}

export default SalesByCountry