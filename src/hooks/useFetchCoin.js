import { useQuery } from '@tanstack/react-query';
import { fetchCoinDetails } from '../services/fetchCoinDetails';
import currencyStore from '../state/store'


function useFetchCoin({coinId}) {
    

    const {currency} = currencyStore();

    const {isError, error, isLoading, data: coin} = useQuery({
        queryKey:['coin', coinId],
        queryFn: () => fetchCoinDetails({id: coinId}),
        cacheTime: 1000*60*2,
        staleTime: 1000*60*2,
    });

    return {
        isError,
        error,
        isLoading,
        coin,
        currency
    }
}

export default useFetchCoin;