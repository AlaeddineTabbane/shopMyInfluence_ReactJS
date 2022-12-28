import React, { useEffect, useState } from 'react'
import Euro from '../asset/euro-svgrepo-com.svg'
// import axios from 'axios';

function Main() {

  const [brand, setBrand] = useState({})
  const [generaleValue, setGeneraleValue] = useState([])

  useEffect(() => {
    const getBrand = async () => {
      try {
        const response = await fetch('http://localhost:8000/brand?offerId=-MUNuxd-1azwBHl-1v5E')
        const data = await response.json()
        console.log(data);
        setBrand(data)
      } catch (error) {
        console.error(error);
      }
    }
    getBrand()
    const gv = [
      {src:Euro, title: 'Sold', value: 2000 },
      {src:'', title: 'Sales number', value: 2000 },
      {src:'', title: 'Influencer', value: 2000 },
      {src:'', title: 'Commission', value: 2000 },
      {src:'', title: 'Influencer commision', value: 2000 },
      {src:'', title: 'Sold product number', value: 2000 },
    ]
    setGeneraleValue(gv)
  }, [])

  const getBrand = async (offerId) => {
    try {
      const response = await fetch(`http://localhost:8000/brand?offerId=${offerId}`)
      const data = await response.json()
      console.log(data);
      setBrand(data)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="main p-4">
      <header className="row">
        <div className="col-5 ms-auto">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
        <div className="col-1">
          <select className="form-select">
            <option value="EN">EN</option>
            <option value="FR">FR</option>
          </select>
        </div>
        <div className="col-2 offset-1 brand">
          <img width="50" src={brand.pic} alt={brand.displayName} className="" loading='lazy' />
          <span className="ms-2">{brand.displayName}</span>
        </div>
      </header>
      <div className="row gap-3">
        {
          generaleValue.map(item =>
            <div className="col-auto ">
              <div className="d-flex card">
                <div className="image">
                  <img width="40" src={item.src} alt="euro" />
                </div>
                <div>
                  <div>{item.title}</div>
                  <div>{item.value}</div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Main