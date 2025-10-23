import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom'
import { fetchCoinDetails } from '../services/fetchCoinDetails';

function CoinDetailsPage() {
    const {coinId} = useParams();
    
  return (
    <div>
        CoinDetailsPage {coinId}

        
    </div>
  )
}

export default CoinDetailsPage