import CoinInfo from './CoinInfo'
import PageLoader from '../PageLoader/PageLoader'
import Alert from '../Alert/Alert'
import useFetchCoinHistory from '../../hooks/useFetchCoinHistory'

function CoinInfoContainer({coinId}) {

  const [historicData, isError, isLoading, days, setDays, setCoinInterval, currency] = useFetchCoinHistory({coinId});

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