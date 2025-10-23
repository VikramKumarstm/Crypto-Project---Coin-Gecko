import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CoinDetailsPage from '../../pages/CoinDetailsPage'
import MainLayout from '../../pages/Layout'
import Home from '../../pages/Home'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<MainLayout />} >
                <Route index element={<Home />} />
                <Route path='/details/:coinId' element={<CoinDetailsPage />} />
            </Route>
            
        </Routes>
    </div>
  )
}

export default Routing