import React from 'react'
import SideBare from './SideBar'
import Main from './Main'
function Dashboard() {
  return (
    <div className="d-flex">
      <SideBare />
      <Main />
    </div>
  )
}

export default Dashboard