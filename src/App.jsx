import { useState } from 'react'
import Dashboard from './components/dashboard/Dashboard'
import Sidebar from './components/sidebar/Sidebar'
import { RecoilRoot } from 'recoil'

function App() {
  return <div className='flex'>
    <RecoilRoot>
      <Sidebar />
      <Dashboard />
    </RecoilRoot>
  </div>
}

export default App
