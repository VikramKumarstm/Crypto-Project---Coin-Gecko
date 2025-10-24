import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import MainLayout from '../../pages/Layout'
import PageLoader from '../PageLoader/PageLoader'
import CustomErrorBoundary from '../ErrorBoundary/CustomErrorBoundary'

const Home = lazy(() => import('../../pages/Home'));
const CoinDetailsPage = lazy(() => import('../../pages/CoinDetailsPage'));

function Routing() {
  return (
    <div>
        <CustomErrorBoundary>
          <Routes>
            <Route path='/' element={<MainLayout />} >

                <Route index element={
                  <Suspense fallback={< PageLoader/>}>
                    <Home />
                  </Suspense> 
                } 
                />

                <Route path='/details/:coinId' element={
                  <Suspense fallback={<PageLoader />}>
                    <CoinDetailsPage />
                  </Suspense>
                } 
                />
            </Route>
            
          </Routes>
        </CustomErrorBoundary>
    </div>
  )
}

export default Routing