import React, { useEffect, useState } from 'react'

function TopInfluencer() {

  const [influencers, setInfluencers] = useState([])

  useEffect(() => {

    const list = [
      { name: 'Idee2look', sales: '17552£', number: 1234 },
      { name: 'Pouussin', sales: '17552£', number: 1234 },
      { name: 'Jkjhsq', sales: '17552£', number: 1234 },
      { name: 'Mlkshdkq', sales: '17552£', number: 1234 },
      { name: 'Ykshfkmsh', sales: '17552£', number: 1234 },
    ]
    setInfluencers(list)
  }, [])
  return (
    <div className="top-influencer">
      <table className="table">
        <thead>
          <tr >
            <td>Top 5 influencers</td>
            <td>Sales</td>
            <td>Sales number</td>
          </tr>
        </thead>
        <tbody>
          {
            influencers.map((item, index) =>
              <tr>
                <td><div>{index + 1} {item.name}</div>  </td>
                <td><div>{item.sales}</div> </td>
                <td><div>{item.number}</div> </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default TopInfluencer