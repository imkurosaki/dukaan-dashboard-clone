import { useState } from 'react'
import Dashboard from './components/dashboard/Dashboard'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return <div className='flex'>
    <Sidebar/>
    <Dashboard/>
  </div>
}

export default App
