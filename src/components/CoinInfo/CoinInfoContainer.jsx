import React, { useState } from 'react'
import CoinInfo from './CoinInfo'
import { useQuery } from '@tanstack/react-query'
import { fetchCoinHistoricData } from '../../services/fetchCoinHistoricData'
import currencyStore from "../../state/store"
import PageLoader from '../PageLoader/PageLoader'
import Alert from '../Alert/Alert'

function CoinInfoContainer({coinId}) {

  const {currency} = currencyStore();

  const [days, setDays] = useState(7);
  const [interval, setCoinInterval] = useState('daily');

  const {data: historicData, isLoading, isError} = useQuery({
    queryKey: ['historicData', {id: coinId, days, interval, currency}],
    queryFn: () => fetchCoinHistoricData({id: coinId, days, interval, currency}),
    cacheTime: 1000*60*2,
    staleTime: 1000*60*2,
  })

  if(isLoading) return < PageLoader />

  if(isError) return <Alert message='Error fetching data' type='error' />

  return (
    <div>
        <CoinInfo 
          historicData={historicData} 
          setDays={setDays} 
          setCoinInterval={setCoinInterval} 
          days={days}
          currency={currency}
        />
    </div>
  )
}

export default CoinInfoContainer